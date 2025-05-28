import { Header } from "@/misComponentes/Header";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center pt-20  text-center text-white bg-black">
        <section className="flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl max-w-4xl">
            Information you need during on-call emergencies
          </h1>
          <p className="text-xl mt-4 max-w-2xl ">
            Quickly link new on-call tickets to similar past incidents and their
            solutions. All directly in Slack the moment an incident happens.
          </p>
          <Button className="mt-10 bg-white text-black ">
            Get Started <ChevronRight></ChevronRight>
          </Button>
        </section>

        <section className="flex flex-col items-center justify-center">
          <img></img>
        </section>
      </main>
    </>
  );
}
