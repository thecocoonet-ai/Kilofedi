export const metadata = { title: "Privacy Policy — Kilofedi" };

export default function Privacy() {
  return (
    <main className="min-h-screen bg-paper text-ink">
      <div className="mx-auto max-w-2xl px-6 py-24">
      <a href="/" className="text-sm text-clay hover:text-indigo">
        ← Back home
      </a>
      <h1 className="mt-6 font-display text-3xl">Privacy Policy</h1>
      <p className="mt-4 text-sm text-clay">Last updated: {new Date().getFullYear()}</p>

      <div className="mt-8 space-y-6 text-ink/80">
        <p>
          Kilofedi (&quot;we&quot;, &quot;us&quot;) collects only the
          information you choose to share through the contact form on this
          site: your name, email address, and the details of your message.
        </p>
        <p>
          We use this information solely to respond to your enquiry. We do
          not sell or share it with third parties, and we retain it only for
          as long as needed to handle the conversation and keep basic
          business records.
        </p>
        <p>
          This site does not use advertising or third-party tracking
          cookies. Basic, privacy-respecting analytics may be used to
          understand overall traffic; this data is aggregated and not tied
          to your identity.
        </p>
        <p>
          To request that we delete data you&apos;ve sent us, email{" "}
          <a href="mailto:studio@kilofedi.com" className="underline underline-offset-4">
            studio@kilofedi.com
          </a>
          .
        </p>
        <p className="text-sm text-clay">
          This is placeholder policy text — replace with a policy reviewed
          for your actual data practices and jurisdiction before launch.
        </p>
      </div>
      </div>
    </main>
  );
}
