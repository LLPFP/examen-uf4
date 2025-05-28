import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { CiStopwatch } from "react-icons/ci";
import { HiArrowsUpDown } from "react-icons/hi2";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center pt-20 mb-20  text-center">
        <section className="flex flex-col items-center justify-center px-4 md:px-8">
          <h1 className="text-3xl font-bold md:text-4xl lg:text-6xl max-w-4xl text-center">
            Information you need during on-call emergencies
          </h1>
          <p className="text-lg mt-4 max-w-2xl md:text-xl mt-6 text-center">
            Quickly link new on-call tickets to similar past incidents and their
            solutions. All directly in Slack the moment an incident happens.
          </p>
          <Button className="mt-8 bg-white text-black px-6 py-3 text-sm md:text-base">
            Get Started <ChevronRight className="ml-2" />
          </Button>
          <Image
            src="/images/imgSection1.png"
            alt="Imagen Content Overview"
            className="w-full max-w-8xl mt-10 shadow-lg"
            width={1200}
            height={600}
          />
        </section>

        <section className="flex flex-col items-center justify-center mt-20 pt-10">
          <h2 className="text-5xl font-bold md:text-6xl lg:text-7xl max-w-5xl text-center">
            Quick Solutions, less stress
          </h2>

          <div className="flex flex-col md:flex-row items-center md:items-start justify-center mt-15 space-y-6 md:space-y-0 md:space-x-6">
            <div className="flex flex-col text-left max-w-md p-8 rounded-lg shadow-lg">
              <CiStopwatch className="w-16 h-16 text-white mb-6 border-2 border-gray-800 rounded p-3 mx-auto md:mx-0" />

              <h3 className="text-3xl font-bold mt-5 mb-5 text-center md:text-left">
                Fix emergencies fast
              </h3>
              <p className="text-lg mt-3 mb-5 text-center md:text-left">
                Save 20-30 minutes per on-call ticket - no more searching for
                relevant issues and runbooks
              </p>
            </div>
            <div className="flex flex-col text-left max-w-md p-8 rounded-lg shadow-lg">
              <HiArrowsUpDown className="w-16 h-16 text-white mb-6 border-2 border-gray-800 rounded p-3 mx-auto md:mx-0" />

              <h3 className="text-3xl font-bold mt-5 mb-5 text-center md:text-left">
                Universally compatible
              </h3>
              <p className="text-lg mt-3 mb-5 text-center md:text-left">
                Works with PagerDuty, Jira, or custom Slack alerts—Pandem
                integrates with any system
              </p>
            </div>
            <div className="flex flex-col text-left max-w-md p-8 rounded-lg shadow-lg">
              <CiStopwatch className="w-16 h-16 text-white mb-6 border-2 border-gray-800 rounded p-3 mx-auto md:mx-0" />

              <h3 className="text-3xl font-bold mt-5 mb-5 text-center md:text-left">
                Secure for your org
              </h3>
              <p className="text-lg mt-3 mb-5 text-center md:text-left">
                We keep your data safe by taking top security measures.
              </p>
            </div>
          </div>
        </section>

        <section className="flex flex-col items-center justify-center pt-20 mt-20 px-4 md:px-8">
          <h2 className="text-3xl font-bold md:text-5xl lg:text-6xl max-w-4xl text-center">
            Instant setup, no custom code
          </h2>
          <p className="text-lg mt-4 max-w-2xl md:text-xl mt-10 text-center">
            Invite the bot, pick a channel, and you&apos;re set—no custom code
            needed, and no vendor lock-in.
          </p>

          <Image
            src="/images/imgSection1.png"
            alt="Imagen Content Overview"
            className="w-full max-w-3xl mt-12 shadow-lg"
            width={1200}
            height={600}
          ></Image>
        </section>

        <section className="flex flex-col items-center justify-center pt-20 mt-20 mb-15">
          <h1 className="text-5xl font-bold md:text-5xl lg:text-6xl max-w-4xl">
            Get in touch
          </h1>
          <p className="text-xl mt-4 max-w-2xl mt-10">
            Request a demo, or hop on a call
          </p>
          <Button className="mt-10 bg-white text-black ">
            Get Started <ChevronRight></ChevronRight>
          </Button>
        </section>
      </main>
    </>
  );
}
