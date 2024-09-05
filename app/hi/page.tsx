// app/waitlist/page.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signUp } from "../actions/signup";
import { verifyCode } from "../actions/verify";
import { Checkbox } from "@headlessui/react";
import Logo from "@/components/Logo";
import Link from "next/link";

export const runtime = "edge";

export default function WaitlistPage() {
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");

  const [errMessage, setErrMessage] = useState("");

  const router = useRouter();
  const [enabled, setEnabled] = useState(false);
  const [waitVerify, setWaitVerify] = useState(false);
  const [verificationDone, setVerificationDone] = useState(false);
  const [verificationMessage, setVerificationMessage] = useState("");

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Call the signUp action with the email
      await signUp(email);
      // setMessage("Verification code sent to your email!");
      setWaitVerify(true); // Redirect to verification page or show a success message
    } catch (error: any) {
      // setMessage(error.message || "An error occurred.");
    }
  };

  const handleCode = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrMessage("");

    try {
      // Call the signUp action with the email
      const count = await verifyCode(email, code);
      // setMessage("Verification done");
      setVerificationDone(true);
      setVerificationMessage('You ')
    } catch (error: any) {
      setErrMessage(error.message || "An error occurred.");
    }
  };

  const doneForm = () => (
    <div className="w-full max-w-md">
      <div className="mb-28 text-center">
      <div className=" mb-1 flex justify-center">
          <div className="w-4/5">
            <Logo />
          </div>
        </div>

        <div className="text-lg">
          <p className="font-bold mb-2"> You’re our {verificationMessage}th shopping insider in line 🎉</p>
          <p>
            Thank you for joining the waitlist! We’ll keep you posted and make
            sure you're the first to know when we are ready. Stay tuned!
          </p>
        </div>
      </div>
      <div className="w-full">
        <button
          onClick={() => router.push("/")}
          className="w-full font-light border-2 border-black px-4 py-1 transition-all hover:bg-primaryText hover:text-black  md:py-3 md:px-5 lg:px-14 text-lg md:text-xl lg:text-2xl  "
        >
          Exit
        </button>
      </div>
    </div>
  );

  const emailForm = () => (
    <div className="w-full max-w-md">
      <div className="mb-20 text-center">
        <div className=" mb-1 flex justify-center">
          <div className="w-4/5">
            <Logo />
          </div>
        </div>

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
                  <span className="font-medium text-gray-600  underline ">
                    Privacy
                  </span>
                </Link>{" "}
                policy and acknowledge you’ve read our{" "}
                <Link href={"/terms"}>
                  <span className="font-medium text-gray-600  underline ">
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

  const waitCodeForm = () => (
    <div className="w-full max-w-md">
      <div className="mb-20 text-center">
        <div className=" mb-1 flex justify-center">
          <div className="w-4/5">
            <Logo />
          </div>
        </div>
        <p>
          We have sent a verification code to{" "}
          <span className="font-semibold">{email}</span>
        </p>
      </div>
      <form className="flex flex-col space-y-4" onSubmit={handleCode}>
        <div className="mb-20 w-full">
          <input
            type="number"
            placeholder="Enter 6-digit code"
            required
            className="p-2 border border-black w-full"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
          {errMessage && <p className="text-rose-600	">{errMessage}</p>}
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
      {!verificationDone && (waitVerify ? waitCodeForm() : emailForm())}
      {verificationDone && doneForm()}
    </div>
  );
}
