import { ThemeToggle } from "@/components/theme-toggle";

export default function HomePage() {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center gap-8 p-8">
      <div className="flex flex-col items-center gap-4 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">
          SearchSaga
        </h1>
        <p className="text-xl text-muted">Connecting the Dots</p>
        <p className="max-w-md text-lg text-muted">
          An infinite-scroll knowledge experience where every topic is told as
          an evolution story and visually connected to everything else.
        </p>
      </div>
      <ThemeToggle />
    </main>
  );
}
