export default function Home() {
  const faqs = [
    {
      q: "How does GPS verification work?",
      a: "Our mobile companion uses your device GPS to confirm you've completed an outdoor activity — a walk, run, or any movement you set. No GPS signal, no unlock."
    },
    {
      q: "Which apps and sites can I block?",
      a: "Block any social media, news, or entertainment site — Instagram, TikTok, Twitter, Reddit, YouTube, and more. You define the blocklist."
    },
    {
      q: "What happens if I try to cheat the system?",
      a: "The blocker runs at the network/device level. Spoofing GPS or using a VPN triggers a lockout cooldown, keeping you honest."
    }
  ];

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6 border border-[#58a6ff]/20">
          Productivity · GPS-Verified
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
          Earn Your Social Media.<br />
          <span className="text-[#58a6ff]">Go Outside First.</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          DoomScroll Blocker locks Instagram, TikTok, Reddit, and more until you complete a GPS-verified outdoor activity. Real movement. Real unlock.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold text-base px-8 py-3 rounded-lg transition-colors duration-150"
        >
          Start Blocking — $4.99/mo
        </a>
        <p className="mt-3 text-xs text-[#8b949e]">Cancel anytime. Mobile app included.</p>
      </section>

      {/* Features strip */}
      <section className="max-w-3xl mx-auto px-6 pb-16 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
        {[
          { icon: "📍", title: "GPS Verified", desc: "Activity confirmed by real location data" },
          { icon: "🔒", title: "Device-Level Block", desc: "No workarounds — blocked at the network layer" },
          { icon: "🏃", title: "Custom Goals", desc: "Set distance, duration, or step targets" }
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-3xl mb-2">{f.icon}</div>
            <div className="font-semibold text-white mb-1">{f.title}</div>
            <div className="text-sm text-[#8b949e]">{f.desc}</div>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-16">
        <div className="bg-[#161b22] border border-[#58a6ff]/40 rounded-2xl p-8 text-center shadow-lg">
          <div className="text-xs font-semibold uppercase tracking-widest text-[#58a6ff] mb-3">Pro Plan</div>
          <div className="text-5xl font-extrabold text-white mb-1">$4.99</div>
          <div className="text-sm text-[#8b949e] mb-6">per month · billed monthly</div>
          <ul className="text-sm text-[#c9d1d9] space-y-2 mb-8 text-left">
            {[
              "Unlimited app & site blocking",
              "GPS-verified activity unlock",
              "iOS & Android companion app",
              "Custom blocklists & schedules",
              "Streak tracking & insights",
              "Priority support"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors duration-150"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="font-semibold text-white mb-2">{faq.q}</div>
              <div className="text-sm text-[#8b949e]">{faq.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#8b949e] pb-8">
        © {new Date().getFullYear()} DoomScroll Blocker. All rights reserved.
      </footer>
    </main>
  );
}
