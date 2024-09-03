import { Resend } from "resend";
import VerificationEmail from "../../components/email-templates/verificationEmail";
import WelcomeEmail from "../../components/email-templates/welcomeEmail";

const resend = new Resend(process.env.RESEND_API_KEY!);

export const sendVerificationEmail = async (email: string, verificationCode: string) => {
  await resend.emails.send({
    from: "no-reply@redress.space",
    to: email,
    subject: `Your REDRESS verification code: ${verificationCode}`,
    text: `Your REDRESS verification code is: ${verificationCode}`,
    react: VerificationEmail({verificationCode}),
  });
};


export const sendOnJoinWaitlistEmail = async (email: string) => {
    await resend.emails.send({
      from: "no-reply@redress.space",
      to: email,
      subject: `Redress - your are in the list`,
      text: `Your are in the list`,
      react: WelcomeEmail(),
    });
  };