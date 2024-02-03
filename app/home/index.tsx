import { Greetings } from "@/components/Greetings";
import { ArrowDownIcon } from "@heroicons/react/24/outline";

export function Home() {
  return (
    <section className="flex h-full flex-col items-center justify-center">
      <Greetings />

      <button className="mb-8 mt-auto transition-transform hover:-translate-y-1">
        <ArrowDownIcon
          className="h-5 w-5 
          stroke-slate-500 
          transition-colors
          ease-in-out
          hover:stroke-blackBackground
          active:stroke-accentColor
          dark:stroke-slate-400
          dark:hover:stroke-white dark:active:stroke-accentColor"
          stroke="black"
        />
      </button>
    </section>
  );
}
