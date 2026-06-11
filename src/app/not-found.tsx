import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-6xl flex-col items-center px-4 py-32 text-center sm:px-6">
      <p className="font-heading text-7xl font-bold text-fjord">404</p>
      <h1 className="mt-4 text-3xl font-bold sm:text-4xl">
        Du er kørt forkert
      </h1>
      <p className="mt-4 max-w-md leading-relaxed text-mist">
        Siden findes ikke — måske er kæden hoppet af linket. Kør tilbage til
        forsiden, så hjælper vi dig videre.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-fjord px-7 py-3.5 font-semibold text-white transition-colors hover:bg-fjord-deep"
      >
        Til forsiden
      </Link>
    </div>
  );
}
