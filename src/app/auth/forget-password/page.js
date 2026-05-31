"use client";
import React, { useState } from "react";
import UITextField from "@/components/InputField/UITextField";
import UIButton from "@/components/UIButton/UIButton";
import { apiPost } from "@/apis/ApiRequest";
import { ApiEndpoints } from "@/utils/ApiEndpoints";
import { pathLocations } from "@/utils/navigation";
import { useRouter } from "next/navigation";
import Link from "next/link";

const ForgetPassword = () => {
  const router = useRouter();
  const [step, setStep] = useState("email"); // "email" | "code"
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setError("Please enter your email address.");
      return;
    }
    setError("");
    setLoading(true);
    apiPost(
      `${ApiEndpoints.auth.base}${ApiEndpoints.auth.forgotPassword}`,
      { email },
      (res) => {
        setLoading(false);
        setStep("code");
      },
      (err) => {
        setLoading(false);
        setError(
          err?.response?.data?.message || "Something went wrong. Please try again."
        );
      }
    );
  };

  const handleCodeSubmit = (e) => {
    e.preventDefault();
    if (!code) {
      setError("Please enter the verification code.");
      return;
    }
    setError("");
    setLoading(true);
    apiPost(
      `${ApiEndpoints.auth.base}/verify-code`,
      { email, code },
      (res) => {
        setLoading(false);
        router.push(pathLocations.login);
      },
      (err) => {
        setLoading(false);
        setError(
          err?.response?.data?.message || "Invalid code. Please try again."
        );
      }
    );
  };

  return (
    <>
      <h1 className="text-2xl font-bold text-center mb-2">Forgot Password</h1>

      {step === "email" ? (
        <>
          <p className="text-center text-gray-600 text-sm mb-6">
            Enter your email and we&apos;ll send you a verification code.
          </p>
          <form onSubmit={handleEmailSubmit} className="space-y-4">
            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700">
                Email Address
              </label>
              <UITextField
                isForm={false}
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <UIButton
              type="contained"
              icon={false}
              btnType="submit"
              title={loading ? "Sending..." : "Send Code"}
              className="w-full"
              disabled={loading}
            />

            <div className="text-center">
              <Link
                href={pathLocations.login}
                className="text-sm text-gray-600 hover:text-black transition-colors"
              >
                Back to Login
              </Link>
            </div>
          </form>
        </>
      ) : (
        <>
          <p className="text-center text-gray-600 text-sm mb-6">
            We sent a code to <span className="font-medium text-black">{email}</span>. Enter it below.
          </p>
          <form onSubmit={handleCodeSubmit} className="space-y-4">
            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700">
                Verification Code
              </label>
              <UITextField
                isForm={false}
                type="text"
                placeholder="Enter verification code"
                value={code}
                onChange={(e) => setCode(e.target.value)}
              />
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <UIButton
              type="contained"
              icon={false}
              btnType="submit"
              title={loading ? "Verifying..." : "Verify Code"}
              className="w-full"
              disabled={loading}
            />

            <div className="text-center">
              <button
                type="button"
                onClick={() => { setStep("email"); setError(""); setCode(""); }}
                className="text-sm text-gray-600 hover:text-black transition-colors"
              >
                Use a different email
              </button>
            </div>
          </form>
        </>
      )}
    </>
  );
};

export default ForgetPassword;
