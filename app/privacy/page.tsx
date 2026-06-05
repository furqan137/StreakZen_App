export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-6 py-32">
        <h1 className="text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
          Privacy Policy
        </h1>

        <p className="text-gray-400 mb-10">
          Last Updated: June 2026
        </p>

        <div className="space-y-8 text-gray-300 leading-8">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              Introduction
            </h2>
            <p>
              At Qyvenix, we respect your privacy and are committed to protecting
              your personal information. This Privacy Policy explains how
              StreakZen collects, uses, and safeguards your information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              Information We Collect
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Name and profile information.</li>
              <li>Email address (if provided).</li>
              <li>Habit tracking and goal data.</li>
              <li>App usage analytics and diagnostics.</li>
              <li>Device information for performance optimization.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              How We Use Information
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide and improve app functionality.</li>
              <li>Track habits, challenges, and progress.</li>
              <li>Personalize user experience.</li>
              <li>Fix bugs and improve performance.</li>
              <li>Send important service notifications.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              Data Security
            </h2>
            <p>
              We implement industry-standard security measures to protect your
              information from unauthorized access, disclosure, or misuse.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              Third-Party Services
            </h2>
            <p>
              StreakZen may use trusted third-party services such as analytics,
              cloud storage, and authentication providers to enhance the user
              experience.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              Your Rights
            </h2>
            <p>
              You may request access, correction, or deletion of your personal
              data at any time by contacting us.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              Contact Us
            </h2>
            <p>
              Email: support@qyvenix.com
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}