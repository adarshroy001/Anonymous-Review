
import { resend } from "@/lib/resend";
import VerificationEmail from "../../emails/VerificationEmail";
import { ApiResponse } from "@/types/ApiRespose";

export async function sendVerificationEmail(email: string, username: string, verifyCode: string): Promise<ApiResponse> {
    try {
        await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: email,
            subject: 'Verification code',
            react: VerificationEmail({ username:username,otp:verifyCode }),
          });
        return { success: true, message: 'Verification email send successfully' }
    } catch (emailError) {
        console.log('error in sending verification email', emailError);
        return { success: false, message: 'error in sending verification email' }
    }

}
