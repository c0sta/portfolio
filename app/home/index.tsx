import { Button, Greetings } from "@/components";
import { ArrowDownIcon } from "@heroicons/react/24/outline";
import { forwardRef } from "react";

interface HomeProps {
  contentRef: React.MutableRefObject<HTMLDivElement | null>;
}
export const Home = forwardRef<HTMLElement, HomeProps>(
  ({ contentRef }, ref) => {
    return (
      <section
        ref={ref}
        className="flex h-screen flex-col items-center justify-center"
      >
        <Greetings />

        <div className="flex h-[10vh] items-center">
          <Button
            color="primary"
            variant="icon"
            className="h-[2.5rem] w-[2.5rem] animate-bounce rounded-full transition-all duration-300 hover:bg-accentColorLight"
            onClick={() => {
              contentRef.current?.scrollIntoView({ behavior: "smooth" });
            }}
            icon={
              <ArrowDownIcon
                className="h-5 w-5 stroke-slate-500 transition-colors ease-in-out
              group-hover/button:stroke-accentColor dark:stroke-slate-400 dark:group-hover/button:stroke-accentColor"
                stroke="black"
              />
            }
          />
        </div>
      </section>
    );
  },
);

Home.displayName = "Home";
