import { Header } from "@/misComponentes/Header";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { CiStopwatch } from "react-icons/ci";
import { HiArrowsUpDown } from "react-icons/hi2";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center pt-20  text-center">
        <section className="flex flex-col items-center justify-center pt-20 ">
          <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl max-w-4xl">
            Information you need during on-call emergencies
          </h1>
          <p className="text-xl mt-4 max-w-2xl mt-10">
            Quickly link new on-call tickets to similar past incidents and their
            solutions. All directly in Slack the moment an incident happens.
          </p>
          <Button className="mt-10 bg-white text-black ">
            Get Started <ChevronRight></ChevronRight>
          </Button>
          <Image
            src="/images/imgSection1.png"
            alt="Imagen Content Overview"
            className="w-full max-w-7xl mt-12 shadow-lg"
            width={1200}
            height={600}
          ></Image>
        </section>

        <section className="flex flex-col items-center justify-center mt-20 pt-10">
          <h2 className="text-3xl font-bold md:text-5xl lg:text-5xl max-w-4xl">
            Quick Solutions, less stress
          </h2>

          <div className="flex flex-row items-start justify-center mt-15 space-x-2">
            <div className="flex flex-col text-left max-w-md p-8 rounded-lg shadow-lg border">
              <CiStopwatch className="w-16 h-16 text-white mb-6 border border-gray-800 rounded p-3 max-w-3xl" />

              <h3 className="text-3xl font-bold mt-5 mb-5">
                Fix emergencies fast
              </h3>
              <p className="text-lg mt-3 mb-5">
                Save 20-30 minutes per on-call ticket - no more searching for
                relevant issues and runbooks
              </p>
            </div>
            <div className="flex flex-col text-left max-w-md p-8 rounded-lg shadow-lg border">
              <HiArrowsUpDown className="w-16 h-16 text-white mb-6 border border-gray-800 rounded p-3 max-w-3xl" />

              <h3 className="text-3xl font-bold mt-5 mb-5">
                Fix emergencies fast
              </h3>
              <p className="text-lg mt-3 mb-5">
                Save 20-30 minutes per on-call ticket - no more searching for
                relevant issues and runbooks
              </p>
            </div>
            <div className="flex flex-col text-left max-w-md p-8 rounded-lg shadow-lg border">
              <CiStopwatch className="w-16 h-16 text-white mb-6 border border-gray-800 rounded p-3 max-w-3xl" />

              <h3 className="text-3xl font-bold mt-5 mb-5">
                Fix emergencies fast
              </h3>
              <p className="text-lg mt-3 mb-5">
                Save 20-30 minutes per on-call ticket - no more searching for
                relevant issues and runbooks
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
