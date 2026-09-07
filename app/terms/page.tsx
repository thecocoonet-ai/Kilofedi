export const metadata = { title: "Terms & Conditions — Kilofedi" };

export default function Terms() {
  return (
    <main className="min-h-screen bg-paper text-ink">
      <div className="mx-auto max-w-2xl px-6 py-24">
      <a href="/" className="text-sm text-clay hover:text-indigo">
        ← Back home
      </a>
      <h1 className="mt-6 font-display text-3xl">Terms &amp; Conditions</h1>
      <p className="mt-4 text-sm text-clay">Last updated: {new Date().getFullYear()}</p>

      <div className="mt-8 space-y-6 text-ink/80">
        <p>
          These terms cover use of the kilofedi.com website. Engagement
          terms for actual project work (scope, timeline, payment, IP
          ownership) are set out separately in each client&apos;s signed
          proposal or contract.
        </p>
        <p>
          Content on this site — text, layout, and design — belongs to
          Kilofedi unless otherwise noted, and may not be reproduced without
          permission.
        </p>
        <p>
          We aim to keep this site accurate but make no guarantees about
          completeness. We may update these terms as the studio grows;
          material changes will be reflected in the &quot;last updated&quot;
          date above.
        </p>
        <p className="text-sm text-clay">
          This is placeholder legal text — replace with terms reviewed by
          counsel before launch.
        </p>
      </div>
      </div>
    </main>
  );
}
