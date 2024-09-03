// app/actions/verifyCode.ts
'use server';

import { sendOnJoinWaitlistEmail } from "../../utils/email/resend";
import { createClient } from '../../utils/supabase/server';
const supabase = createClient();

export async function verifyCode(email: string, code: string): Promise<void> {
  // Check if the email and verification code match a record in the waitlist
  const { data, error } = await supabase
    .from('waitlist')
    .select('*')
    .eq('email', email)
    .eq('verification_code', code)
    .single();

  if (error || !data) {
    throw new Error('Invalid verification code or email.');
  }

  // Update the user record to mark it as verified
  const { error: updateError } = await supabase
    .from('waitlist')
    .update({ is_verified: true })
    .eq('id', data.id);

  if (updateError) {
    throw new Error('Error updating verification status.');
  }

  await sendOnJoinWaitlistEmail(email);
}
