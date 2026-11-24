"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PainPoint from "@/components/PainPoint";
import PhotoToGlazeDemo from "@/components/PhotoToGlazeDemo";
import HowItWorks from "@/components/HowItWorks";
import FeatureBento from "@/components/FeatureBento";
import AppVsReality from "@/components/AppVsReality";
import FAQ from "@/components/FAQ";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";
import VideoModal from "@/components/VideoModal";

export default function Home() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <>
      <Navbar />
      <main>
        <Hero onOpenVideo={() => setVideoOpen(true)} />
        <PainPoint />
        <PhotoToGlazeDemo />
        <HowItWorks />
        <FeatureBento />
        <AppVsReality />
        <FAQ />
        <CTABanner />
      </main>
      <Footer />
      <VideoModal isOpen={videoOpen} onClose={() => setVideoOpen(false)} />
    </>
  );
}
