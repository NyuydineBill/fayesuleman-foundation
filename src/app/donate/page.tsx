"use client";

import { useState } from "react";
import PageHero, { Breadcrumb, SectionLabel } from "@/components/PageHero";
import { pillars, donateAmounts, currencies } from "@/lib/data";

export default function DonatePage() {
  const [amount, setAmount] = useState(50);
  const [customAmount, setCustomAmount] = useState("");
  const [frequency, setFrequency] = useState<"once" | "monthly">("once");
  const [currency, setCurrency] = useState("USD");
  const [selectedPillar, setSelectedPillar] = useState("general");

  const activeAmount = customAmount ? parseInt(customAmount) || 0 : amount;

  const impactMessages: Record<number, string> = {
    10: "Provides a week of school meals for 2 children",
    25: "Supplies a hygiene kit for a displaced family",
    50: "Covers one month of bursary support for a student",
    100: "Funds a health screening camp for 20 people",
  };

  return (
    <>
      <PageHero
        title="Your gift changes lives"
        subtitle="Every donation, no matter the size, reaches communities in Cameroon and across Africa through our field programmes."
        image="https://images.unsplash.com/photo-1532629345422-7515f3d4bb93?w=1600&q=80"
        caption="FSF Donor Programme · 2025"
      />
      <Breadcrumb items={[{ label: "Donate" }]} />

      <section className="py-10 lg:py-14">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-8">
            {/* Donation form */}
            <div className="lg:col-span-3">
              {/* Frequency toggle */}
              <div className="flex mb-8 border border-border">
                {(["once", "monthly"] as const).map((freq) => (
                  <button
                    key={freq}
                    onClick={() => setFrequency(freq)}
                    className={`flex-1 py-3.5 text-sm font-bold tracking-wide transition-colors ${
                      frequency === freq
                        ? "bg-navy text-white"
                        : "bg-white text-navy hover:bg-cream"
                    }`}
                  >
                    {freq === "once" ? "One-time" : "Monthly"}
                  </button>
                ))}
              </div>

              {/* Currency */}
              <div className="mb-6">
                <label className="text-xs font-bold tracking-wider uppercase text-navy/70 mb-2 block">
                  Currency
                </label>
                <div className="flex gap-2 flex-wrap">
                  {currencies.map((c) => (
                    <button
                      key={c}
                      onClick={() => setCurrency(c)}
                      className={`px-4 py-2 text-sm font-semibold border transition-colors ${
                        currency === c
                          ? "border-navy bg-navy text-white"
                          : "border-border text-navy hover:border-navy/40"
                      }`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>

              {/* Amount presets */}
              <div className="mb-6">
                <label className="text-xs font-bold tracking-wider uppercase text-navy/70 mb-2 block">
                  Select amount
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {donateAmounts.map((a) => (
                    <button
                      key={a}
                      onClick={() => { setAmount(a); setCustomAmount(""); }}
                      className={`py-4 text-lg font-serif font-medium border transition-all ${
                        amount === a && !customAmount
                          ? "border-gold bg-gold/10 text-navy shadow-sm"
                          : "border-border text-navy hover:border-gold/50 bg-white"
                      }`}
                    >
                      ${a}
                    </button>
                  ))}
                </div>
              </div>

              {/* Custom amount */}
              <div className="mb-8">
                <label htmlFor="custom-amount" className="text-xs font-bold tracking-wider uppercase text-navy/70 mb-2 block">
                  Or enter custom amount
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted font-semibold">$</span>
                  <input
                    id="custom-amount"
                    type="number"
                    min="1"
                    placeholder="Custom amount"
                    value={customAmount}
                    onChange={(e) => setCustomAmount(e.target.value)}
                    className="w-full pl-9 pr-4 py-3.5 border border-border bg-white text-navy focus:outline-none focus:border-gold transition-colors"
                  />
                </div>
              </div>

              {/* Pillar selection */}
              <div className="mb-8">
                <label className="text-xs font-bold tracking-wider uppercase text-navy/70 mb-2 block">
                  Direct your gift (optional)
                </label>
                <select
                  value={selectedPillar}
                  onChange={(e) => setSelectedPillar(e.target.value)}
                  className="w-full px-4 py-3.5 border border-border text-navy bg-white focus:outline-none focus:border-gold transition-colors"
                >
                  <option value="general">Where needed most</option>
                  {pillars.map((p) => (
                    <option key={p.id} value={p.id}>{p.title}</option>
                  ))}
                </select>
              </div>

              {/* Impact message */}
              {impactMessages[activeAmount] && (
                <div className="bg-cream p-5 mb-8 border-l-4 border-gold">
                  <p className="text-sm text-navy leading-relaxed">
                    <span className="font-bold">${activeAmount} {currency}</span>
                    {". "}
                    {impactMessages[activeAmount]}
                  </p>
                </div>
              )}

              {/* Payment methods */}
              <div className="space-y-3">
                <button className="w-full py-4 bg-gold text-navy font-bold tracking-wide hover:bg-gold/90 active:scale-[0.99] transition-all shadow-sm hover:shadow">
                  Donate with Card (Stripe)
                </button>
                <button className="w-full py-4 border-2 border-navy text-navy font-bold tracking-wide hover:bg-navy hover:text-white active:scale-[0.99] transition-all">
                  Donate with PayPal
                </button>
                <button className="w-full py-4 border border-border text-navy font-semibold hover:bg-cream active:scale-[0.99] transition-all">
                  Mobile Money (MTN / Orange)
                </button>
              </div>

              <p className="text-xs text-muted mt-4 text-center leading-relaxed">
                Secure payment · Automatic email receipt · Tax-deductible where applicable
              </p>
            </div>

            {/* Sidebar info */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-navy text-white p-8">
                <SectionLabel>Why give to FSF?</SectionLabel>
                <ul className="space-y-4 mt-4">
                  {[
                    "82% of every donation goes directly to programmes",
                    "Named board, audited financials, full transparency",
                    "Community-led programmes with measurable outcomes",
                    "Multiple payment options for global donors",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-white/85 leading-relaxed">
                      <svg className="w-5 h-5 text-gold shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border border-border p-8 bg-white">
                <h3 className="font-serif text-xl text-navy mb-3">Corporate or grant giving?</h3>
                <p className="text-sm text-muted leading-relaxed mb-4">
                  For institutional donations, wire transfers, and grant inquiries,
                  please contact our partnerships team.
                </p>
                <a href="mailto:partnerships@fayesuleimanfoundation.org" className="text-sm font-semibold text-sky hover:text-navy transition-colors break-all">
                  partnerships@fayesuleimanfoundation.org
                </a>
              </div>

              <div className="border border-border p-8 bg-white">
                <h3 className="font-serif text-xl text-navy mb-3">Bank transfer</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Wire transfer details for large and institutional donations are
                  available on our transparency page.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
