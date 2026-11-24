export interface FAQItem {
  question: string;
  answer: string;
}

export const faqItems: FAQItem[] = [
  {
    question: "How accurate are the predictions across different kilns?",
    answer:
      "Ceramistry's ML model is trained on thousands of real fired test tiles across electric, gas, and wood kilns. While no digital preview can perfectly replicate the nuances of every kiln's atmosphere, our users consistently report 85-90% color accuracy. The app accounts for your specific cone, clay body, and atmosphere to give you the closest possible prediction before you fire.",
  },
  {
    question: "Can I tweak or substitute base ingredients I already have in my studio?",
    answer:
      "Absolutely. Every generated recipe is fully editable. You can swap feldspars, adjust colorant percentages, or substitute materials you have on hand. Ceramistry will recalculate the predicted outcome in real time so you can see how substitutions affect the final glaze before committing to a firing.",
  },
  {
    question: "Which firing cones and atmospheres are supported?",
    answer:
      "Ceramistry currently supports Cones 1 through 10 in both oxidation and reduction atmospheres. This covers the vast majority of studio pottery firing ranges, from low-fire earthenware to mid-range stoneware. We're actively expanding support for higher cone ranges and wood-fire atmospheres.",
  },
  {
    question: "Does Ceramistry work offline in a basement or rural studio?",
    answer:
      "Yes. Once you've downloaded your glaze library and preset palettes, the core color extraction and recipe generation features work entirely offline. You only need an internet connection to sync new recipes, download model updates, or access community-shared glazes.",
  },
  {
    question: "Is Ceramistry available on Android?",
    answer:
      "Ceramistry is currently available exclusively on iOS. We're gauging demand for Android — if you'd like to be notified when an Android version launches, join our waitlist through the app's website. Your interest directly influences our development roadmap.",
  },
];
