import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PainPoint from "@/components/PainPoint";
import VideoSection from "@/components/VideoSection";
import PhotoToGlazeDemo from "@/components/PhotoToGlazeDemo";
import HowItWorks from "@/components/HowItWorks";
import FeatureBento from "@/components/FeatureBento";
import AppVsReality from "@/components/AppVsReality";
import FAQ from "@/components/FAQ";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";
import {
  softwareApplicationJsonLd,
  faqPageJsonLd,
} from "@/lib/structured-data";

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareApplicationJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqPageJsonLd),
        }}
      />
      <Navbar />
      <main>
        <Hero />
        <PainPoint />
        <VideoSection />
        <PhotoToGlazeDemo />
        <HowItWorks />
        <FeatureBento />
        <AppVsReality />
        <FAQ />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
