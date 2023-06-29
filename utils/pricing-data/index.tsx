import { StaticImageData } from "next/image";
import check from "../../public/pricing/check-circle-blue.svg";

interface Feature {
  icon: StaticImageData;
  text: string;
}

interface Plan {
    id: number;
  title: string;
  price: string;
  description: string;
  features: Feature[];
}

export const plans: Plan[] = [
  {
    id: 0,
    title: "Basic",
    price: "FREE",
    description: "Free plan for all users",
    features: [
      {
        icon: check,
        text: "Unlimited URL Shortening",
      },
      {
        icon: check,
        text: "Basic Link Analytics",
      },
      {
        icon: check,
        text: "Customizable Short Links",
      },
      {
        icon: check,
        text: "Standard Support",
      },
      {
        icon: check,
        text: "Ad-supported",
      },
    ],
  },
  {
    id: 1,
    title: "Professional",
    price: "$15/month",
    description: "Ideal for business creators",
    features: [
      {
        icon: check,
        text: "Enhanced Link Analytics",
      },
      {
        icon: check,
        text: "Custom Branded Domains",
      },
      {
        icon: check,
        text: "Advanced Link Customization",
      },
      {
        icon: check,
        text: "Priority Support",
      },
      {
        icon: check,
        text: "Ad-free Experiencee",
      },
    ],
  },
  {
    id: 2,
    title: "Teams",
    price: "$25/month",
    description: "Share with up to 10 users",
    features: [
      {
        icon: check,
        text: "Team Collaboration",
      },
      {
        icon: check,
        text: "User Roles and Permissions",
      },
      {
        icon: check,
        text: "Enhanced Security",
      },
      {
        icon: check,
        text: "API Access",
      },
      {
        icon: check,
        text: "Dedicated Account Manager",
      },
    ],
  },
];
