import { HoverEffect } from "../ui/card-hover-effect";

export function Features() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Augmented Reality (AR) Integration",
    description:
      " Users can virtually try on recommended outfits and accessories to see how they look in real-time Customization Options: Adjust sizes, colors, and styles to better match user preferences."
,
    link: "",
  },
  {
    title: "Shopping Integration",
    description:
      "Product Links: Direct links to purchase recommended clothing and beauty products. Discounts and Deals: Integration with affiliate programs to offer users discounts on recommended items."
,
    link: "",
  },
  {
    title: "AI-Powered Style Suggestions",
    description:
      "Photo Analysis: Users upload photos, and the AI analyzes their current style.Outfit Recommendations: Based on body type, skin tone, and personal preferences, the AI suggests outfits, including clothing, accessories, and shoes.",
    link: "",
  },
  {
    title: "Beauty and Grooming Advice",
    description:
      "Skincare Recommendations: Personalized skincare routines based on skin type and concerns.Makeup Tutorials: Step-by-step guides and product recommendations tailored to the user’s features and skin tone. Hair Styling Tips: Suggestions for haircuts, colors, and styles that suit the user’s face shape and hair type.",
    link: "https://meta.com",
  },
  {
    title: "Seasonal and Occasion-Based Suggestions",
    description:
      "Event-Specific Outfits: Suggestions for different occasions like parties, interviews, or casual outings.Seasonal Trends: Updates on seasonal fashion trends and how to incorporate them into personal style.",

    link: "https://amazon.com",
  },
  {
    title: "Feedback and Improvement:",
    description: "User Ratings: Users rate outfits and styles suggested by the AI, which helps the system learn and improve its recommendations.Community Feedback: A platform where users can share their looks and get feedback from the community.",
    link: "",
},
];
