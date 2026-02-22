import Image from "next/image";

export default function Home() {
  return (
    <>
      <header>
        <nav className="">
          <ul className="flex flex-row items-center justify-evenly my-6">
            <li>Serviços</li>
            <li>Quem somos</li>
            <li>Atuação</li>
            <li>Contato</li>
          </ul>
        </nav>
      </header>
      <main>
        <p>Há 32 anos </p>
      </main>
      <footer></footer>
    </>
  );
}
