import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <main id="main" className="flex min-h-[90svh] items-end pt-36 pb-20 sm:pb-28">
      <div className="container-x">
        <p className="t-eyebrow text-stone">Error 404</p>
        <h1 className="t-display mt-8 max-w-[10ch]">
          Not in the <em className="text-cedar">plans.</em>
        </h1>
        <p className="t-lede mt-10 max-w-lg text-stone">
          The page you&rsquo;re looking for has moved or never existed. The
          work is still here.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Button href="/">Back to home</Button>
          <Button href="/work" variant="outline">
            View our work
          </Button>
        </div>
      </div>
    </main>
  );
}
