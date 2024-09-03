// app/actions/signup.ts
"use server";

import { createClient } from "../../utils/supabase/server";
import { sendVerificationEmail } from "../../utils/email/resend";

const supabase = createClient();


export async function signUp(email: string) {
  if (!email) {
    throw new Error("email undefined");
  }

  // Check if the email already exists in the waitlist
  const { data: existingUser, error: existingUserError } = await supabase
    .from("waitlist")
    .select("*")
    .eq("email", email)
    .single();

  if (existingUserError && existingUserError.code !== "PGRST116") {
    console.log(existingUserError);

    throw new Error("Error checking existing users.");
  }

  let verificationCode: string;

  if (existingUser) {
    // Email already exists, so generate a new verification code
    verificationCode = String(Math.floor(100000 + Math.random() * 900000));

    // Update the record with the new verification code
    const { error } = await supabase
      .from("waitlist")
      .update({ verification_code: verificationCode, is_verified: false })
      .eq("email", email);

    if (error) {
      throw new Error("Error updating verification code.");
    }
  } else {
    // Generate a new verification code for a new sign-up
    verificationCode = String(Math.floor(100000 + Math.random() * 900000));

    // Insert the user into the waitlist table with the verification code
    const { error } = await supabase
      .from("waitlist")
      .insert([
        { email, verification_code: verificationCode, is_verified: false },
      ]);

    if (error) {
      throw new Error("Error inserting new user.");
    }
  }

  // Send the verification code to the user's email using Resend
  try {
    await sendVerificationEmail(email, verificationCode);
  } catch (error) {
    throw new Error("Failed to send verification email.");
  }

  return true;
}
