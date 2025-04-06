// app/actions/signup.ts
"use server";

import { sendVerificationEmail } from "../../utils/email/resend";

// const supabase = createClient();

export async function signUp(email: string) {
  if (!email) {
    throw new Error("email undefined");
  }

  // Use an environment variable for the Cloud Function endpoint
  const WAITLIST_REGISTER_FUNCTION_URL =
    process.env.NEXT_PUBLIC_WAITLIST_REGISTER_FUNCTION_URL ||
    "https://on-waitlist-register-379364220772.europe-west2.run.app";

  // Call the Cloud Function with the email
  const response = await fetch(WAITLIST_REGISTER_FUNCTION_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Cloud function error: ${errorText}`);
  }

  // Parse the response, which includes the verification code
  const { message, verification_code }: 
    { message?: string; verification_code?: string } = await response.json();

  if (message == "verify" && verification_code) {
    // Send the verification code to the user's email using Resend
    try {
      await sendVerificationEmail(email, verification_code);
    } catch (error) {
      throw new Error("Failed to send verification email.");
    }
  }
  return true;
}
