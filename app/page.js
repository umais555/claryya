"use client";
import { Suspense } from "react";
import EmailVerificationSection from "@/Landing/EmailVerificationSection/EmailVerificationSection";
import LandingPage from "@/Landing/LandingPage";
import Header from "@/layout/Header";
import { emailVerificationData } from "../data/emailVerificationData";
import FAQSection from "@/Landing/FAQSection/FAQSection";
import BannerSection from "@/Landing/BannerSection/BannerSection";
import FooterSection from "@/layout/FooterSection";
import LoginSignUp from "./Authentication/LoginSignUp";
import { useSearchParams } from 'next/navigation';

// Separate Component for SearchParams Logic
function AuthComponent() {
  const searchParams = useSearchParams();
  const auth = searchParams.get("auth");

  return auth ? <LoginSignUp /> : (
    <>
      <Header />
      <LandingPage />
      <EmailVerificationSection sections={emailVerificationData} />
      <FAQSection />
      <FooterSection />
    </>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AuthComponent />
    </Suspense>
  );
}
