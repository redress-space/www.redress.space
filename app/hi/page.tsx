// app/waitlist/page.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signUp } from "../actions/signup";
import { verifyCode } from "../actions/verify";
import { Checkbox } from "@headlessui/react";
import { redirect } from 'next/navigation'
import Link from "next/link";

export const runtime = 'edge';

export default function WaitlistPage() {
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");

  const [message, setMessage] = useState("");

  const router = useRouter();
  const [enabled, setEnabled] = useState(false);
  const [waitVerify, setWaitVerify] = useState(false);
  const [verificationDone, setVerificationDone] = useState(false);

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Call the signUp action with the email
      await signUp(email);
      setMessage("Verification code sent to your email!");
      setWaitVerify(true); // Redirect to verification page or show a success message
    } catch (error: any) {
      setMessage(error.message || "An error occurred.");
    }
  };

  const handleCode = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Call the signUp action with the email
      await verifyCode(email, code);
      setMessage("Verification done");
      setVerificationDone(true);
    } catch (error: any) {
      setMessage(error.message || "An error occurred.");
    }
  };

  const emailForm = () => (
    <div className="w-full max-w-md">
      <div className="mb-20 text-center">
        <h1 className="text-5xl mb-10 font-alexandria">REDRESS</h1>
        <p>
          We will send you a verification code to register your account and to
          verify your email
        </p>
      </div>
      <form className="flex flex-col space-y-4" onSubmit={handleSignUp}>
        <div className="mb-20 w-full">
          <input
            type="email"
            placeholder="Enter your email"
            required
            className="p-2 mb-8 border border-black w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <div className="flex">
            <div className="p-2">
              <Checkbox
                checked={enabled}
                onChange={setEnabled}
                className="group block size-5 rounded border-2 bg-white data-[checked]:bg-gray-800"
              >
                {/* Checkmark icon */}
                <svg
                  className="stroke-white opacity-0 group-data-[checked]:opacity-100"
                  viewBox="0 0 14 14"
                  fill="none"
                >
                  <path
                    d="M3 8L6 11L11 3.5"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Checkbox>
            </div>

            <div className="ml-1">
              <p className="text-sm text-gray-700">
                By continuing, you agree to Redress{" "}
                <Link href={"/privacy"}>
                  <span className="font-medium text-gray-600 dark:text-white underline ">
                    Privacy
                  </span>
                </Link>{" "}
                policy and acknowledge you’ve read our{" "}
                <Link href={"/terms"}>
                  <span className="font-medium text-gray-600 dark:text-white underline ">
                    Terms
                  </span>
                </Link>{" "}
                of service
              </p>
            </div>
          </div>
        </div>

        <button
          type="submit"
          disabled={!enabled}
          className="p-2 bg-gray-700 text-white hover:bg-gray-800 disabled:bg-gray-400 "
        >
          Join
        </button>
      </form>
    </div>
  );

  const waitCode = () => (
    <div className="w-full max-w-md">
      <div className="mb-20 text-center">
        <h1 className="text-5xl mb-10 font-alexandria">REDRESS</h1>
        <p>
          We have sent a verification code to <span className="text-semibold">{email}</span>
        </p>
      </div>
      <form className="flex flex-col space-y-4" onSubmit={handleCode}>
        <div className="mb-20 w-full">
          <input
            type="number"
            placeholder="Enter 6-digit code"
            required
            className="p-2 mb-8 border border-black w-full"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
        </div>

        <button
          type="submit"
          disabled={code.length === 0}
          className="p-2 bg-gray-700 text-white hover:bg-gray-800 disabled:bg-gray-400 "
        >
          Verify
        </button>
      </form>
    </div>
  );

  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center px-6 md:px-0">
      <div className="absolute z-50 top-2 right-2 ">
        <button
          className="p-2 bg-gray-100 rounded-full opacity-75 hover:opacity-100"
          onClick={() => router.push("/")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      {verificationDone && <div className="text-2xl text-center font-alexandria"><h1>Thanks!</h1></div>}
      {!verificationDone && (waitVerify ? waitCode() : emailForm())}
    </div>
  );
}
