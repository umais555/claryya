"use client";
import EmailVerificationSection from "@/Landing/EmailVerificationSection/EmailVerificationSection";
import LandingPage from "@/Landing/LandingPage";
import Header from "@/layout/Header";
import Image from "next/image";
import { emailVerificationData } from "../data/emailVerificationData";
import FAQSection from "@/Landing/FAQSection/FAQSection";
import BannerSection from "@/Landing/BannerSection/BannerSection";
import FooterSection from "@/layout/FooterSection";
import { usePathname } from 'next/navigation';
import LoginSignUp from "./Authentication/LoginSignUp";
import { useSearchParams } from 'next/navigation';
export default function Home() {
  const searchParams = useSearchParams();
  const auth = searchParams.get("auth");
  return (
   
      <>
        {auth ? (
          <LoginSignUp />
        ) : (
          <>
            <Header />
            <LandingPage />
            <EmailVerificationSection sections={emailVerificationData} />
            <FAQSection />
            <FooterSection />
          </>
        )}
      </>
    );

  
}
