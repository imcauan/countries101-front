import { Logo } from "@/components/landing/logo";

export function Header() {
  return (
    <section className="py-4 px-4 lg:py-8 flex justify-center w-full relative">
      <div className="container max-w-5xl">
        <div className="flex justify-between border dark:border-white/15 rounded-full p-2 md:pr-2 items-center">
          <Logo />
        </div>
      </div>
    </section>
  );
}
