// app/actions/verifyCode.ts
'use server';

import { sendOnJoinWaitlistEmail } from "../../utils/email/resend";

export async function verifyCode(email: string, code: string): Promise<number | null> {
  if (!email || !code) {
    throw new Error("Email or verification code is undefined.");
  }

  const WAITLIST_REGISTER_FUNCTION_URL = 
    process.env.NEXT_PUBLIC_WAITLIST_REGISTER_FUNCTION_URL!;

  // Call the Cloud Function with email and confirmationCode to trigger verification
  const response = await fetch(WAITLIST_REGISTER_FUNCTION_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email, confirmationCode: code })
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Cloud function error: ${errorText}`);
  }
  await sendOnJoinWaitlistEmail(email, 'N');
  return 0;
}
