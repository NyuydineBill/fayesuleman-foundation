import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Donate",
  description: "Donate to the Faye Suleiman Foundation. Secure online giving via Stripe, PayPal, or Mobile Money.",
};

export default function DonateLayout({ children }: { children: React.ReactNode }) {
  return children;
}
