import { APP_STORE_URL, SITE_URL } from "@/lib/constants";
import { faqItems } from "@/data/faqItems";

export const softwareApplicationJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Ceramistry",
  description:
    "Turn real-world colors into kiln-ready ceramic glaze recipes. Capture colors with your camera, generate measured recipes, and preview fired results.",
  operatingSystem: "iOS",
  applicationCategory: "UtilitiesApplication",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  url: SITE_URL,
  installUrl: APP_STORE_URL,
};

export const faqPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};
