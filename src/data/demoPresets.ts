export interface Swatch {
  name: string;
  hex: string;
  percentage: number;
  recipe: RecipeIngredient[];
}

export interface RecipeIngredient {
  name: string;
  grams: number;
}

export interface DemoPreset {
  name: string;
  gradient: string;
  swatches: Swatch[];
}

export const demoPresets: DemoPreset[] = [
  {
    name: "Morning Espresso",
    gradient: "linear-gradient(135deg, #3B2314 0%, #6B3A2A 35%, #D4A574 70%, #F2E6D9 100%)",
    swatches: [
      {
        name: "Dark Roast",
        hex: "#3B2314",
        percentage: 34,
        recipe: [
          { name: "Custer Feldspar", grams: 28.0 },
          { name: "Silica (Flint)", grams: 22.0 },
          { name: "Whiting", grams: 12.0 },
          { name: "Red Iron Oxide", grams: 8.5 },
          { name: "Ball Clay", grams: 18.0 },
          { name: "Manganese Dioxide", grams: 2.5 },
        ],
      },
      {
        name: "Warm Sienna",
        hex: "#6B3A2A",
        percentage: 28,
        recipe: [
          { name: "Custer Feldspar", grams: 32.0 },
          { name: "Silica (Flint)", grams: 20.0 },
          { name: "Whiting", grams: 14.0 },
          { name: "Red Iron Oxide", grams: 6.0 },
          { name: "EPK Kaolin", grams: 16.0 },
        ],
      },
      {
        name: "Caramel Cream",
        hex: "#D4A574",
        percentage: 24,
        recipe: [
          { name: "Custer Feldspar", grams: 35.0 },
          { name: "Silica (Flint)", grams: 24.0 },
          { name: "Whiting", grams: 15.0 },
          { name: "Rutile", grams: 4.0 },
          { name: "Ball Clay", grams: 12.0 },
        ],
      },
      {
        name: "Latte Foam",
        hex: "#F2E6D9",
        percentage: 14,
        recipe: [
          { name: "Custer Feldspar", grams: 38.0 },
          { name: "Silica (Flint)", grams: 26.0 },
          { name: "Whiting", grams: 18.0 },
          { name: "Zircopax", grams: 8.0 },
          { name: "EPK Kaolin", grams: 10.0 },
        ],
      },
    ],
  },
  {
    name: "Rainy Street",
    gradient: "linear-gradient(135deg, #2C3E50 0%, #5D7B93 35%, #8CAFCE 65%, #BDC3C7 100%)",
    swatches: [
      {
        name: "Storm Cloud",
        hex: "#2C3E50",
        percentage: 30,
        recipe: [
          { name: "Nepheline Syenite", grams: 30.0 },
          { name: "Silica (Flint)", grams: 22.0 },
          { name: "Whiting", grams: 16.0 },
          { name: "Cobalt Carbonate", grams: 1.5 },
          { name: "Red Iron Oxide", grams: 3.0 },
          { name: "Ball Clay", grams: 14.0 },
        ],
      },
      {
        name: "Wet Slate",
        hex: "#5D7B93",
        percentage: 28,
        recipe: [
          { name: "Nepheline Syenite", grams: 32.0 },
          { name: "Silica (Flint)", grams: 20.0 },
          { name: "Whiting", grams: 14.0 },
          { name: "Cobalt Carbonate", grams: 0.8 },
          { name: "Rutile", grams: 3.0 },
          { name: "EPK Kaolin", grams: 12.0 },
        ],
      },
      {
        name: "Soft Sky",
        hex: "#8CAFCE",
        percentage: 26,
        recipe: [
          { name: "Custer Feldspar", grams: 36.0 },
          { name: "Silica (Flint)", grams: 24.0 },
          { name: "Whiting", grams: 18.0 },
          { name: "Cobalt Carbonate", grams: 0.3 },
          { name: "Tin Oxide", grams: 4.0 },
        ],
      },
      {
        name: "Mist",
        hex: "#BDC3C7",
        percentage: 16,
        recipe: [
          { name: "Custer Feldspar", grams: 38.0 },
          { name: "Silica (Flint)", grams: 26.0 },
          { name: "Whiting", grams: 18.0 },
          { name: "Zircopax", grams: 6.0 },
          { name: "Tin Oxide", grams: 2.0 },
        ],
      },
    ],
  },
  {
    name: "Studio Clay",
    gradient: "linear-gradient(135deg, #8B6F47 0%, #C4A472 35%, #D9C4A0 65%, #EDE2D0 100%)",
    swatches: [
      {
        name: "Raw Umber",
        hex: "#8B6F47",
        percentage: 32,
        recipe: [
          { name: "Custer Feldspar", grams: 30.0 },
          { name: "Silica (Flint)", grams: 20.0 },
          { name: "Whiting", grams: 14.0 },
          { name: "Red Iron Oxide", grams: 5.0 },
          { name: "Redart", grams: 20.0 },
          { name: "Ball Clay", grams: 11.0 },
        ],
      },
      {
        name: "Warm Ochre",
        hex: "#C4A472",
        percentage: 28,
        recipe: [
          { name: "Custer Feldspar", grams: 34.0 },
          { name: "Silica (Flint)", grams: 22.0 },
          { name: "Whiting", grams: 16.0 },
          { name: "Yellow Ochre", grams: 6.0 },
          { name: "Ball Clay", grams: 14.0 },
        ],
      },
      {
        name: "Bisque Tone",
        hex: "#D9C4A0",
        percentage: 24,
        recipe: [
          { name: "Custer Feldspar", grams: 36.0 },
          { name: "Silica (Flint)", grams: 24.0 },
          { name: "Whiting", grams: 18.0 },
          { name: "Rutile", grams: 2.0 },
          { name: "EPK Kaolin", grams: 12.0 },
        ],
      },
    ],
  },
  {
    name: "Mossy Stone",
    gradient: "linear-gradient(135deg, #2D4A2D 0%, #5C7A45 35%, #8FA67A 65%, #C5D5A8 100%)",
    swatches: [
      {
        name: "Deep Moss",
        hex: "#2D4A2D",
        percentage: 30,
        recipe: [
          { name: "Nepheline Syenite", grams: 28.0 },
          { name: "Silica (Flint)", grams: 22.0 },
          { name: "Whiting", grams: 14.0 },
          { name: "Copper Carbonate", grams: 3.5 },
          { name: "Red Iron Oxide", grams: 2.0 },
          { name: "Ball Clay", grams: 16.0 },
        ],
      },
      {
        name: "Forest Floor",
        hex: "#5C7A45",
        percentage: 28,
        recipe: [
          { name: "Custer Feldspar", grams: 32.0 },
          { name: "Silica (Flint)", grams: 20.0 },
          { name: "Whiting", grams: 16.0 },
          { name: "Copper Carbonate", grams: 2.5 },
          { name: "Rutile", grams: 3.0 },
          { name: "EPK Kaolin", grams: 14.0 },
        ],
      },
      {
        name: "Sage",
        hex: "#8FA67A",
        percentage: 26,
        recipe: [
          { name: "Custer Feldspar", grams: 36.0 },
          { name: "Silica (Flint)", grams: 24.0 },
          { name: "Whiting", grams: 18.0 },
          { name: "Copper Carbonate", grams: 1.0 },
          { name: "Tin Oxide", grams: 4.0 },
        ],
      },
      {
        name: "Lichen",
        hex: "#C5D5A8",
        percentage: 16,
        recipe: [
          { name: "Custer Feldspar", grams: 38.0 },
          { name: "Silica (Flint)", grams: 26.0 },
          { name: "Whiting", grams: 18.0 },
          { name: "Chrome Oxide", grams: 0.5 },
          { name: "Zircopax", grams: 6.0 },
        ],
      },
    ],
  },
];
