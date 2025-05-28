import { Header } from "@/misComponentes/Header";

export default function Docs() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center pt-20  text-center">
        <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl max-w-4xl">
          Docs
        </h1>
      </main>
    </>
  );
}
