import Header from "@/components/Header";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <section className="w-full h-80 bg-cover bg-center bg-no-repeat bg-[url('/example.webp')]">
          <div className="flex items-center justify-center h-full text-white">
            <p className="text-2xl md:text-5xl">
              Mais de 32 anos de experiência em limpeza e pintura de faixadas
            </p>
          </div>
        </section>
      </main>
      <footer></footer>
    </>
  );
}
