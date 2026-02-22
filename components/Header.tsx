import Link from "next/link";

export default function Header() {
  return (
    <header>
      <nav className="my-9 bg-blue-600 text-white">
        {/* <Image  alt="Logo"/> */}
        <ul className="flex flex-row items-center justify-evenly">
          <Link href="servicos">
            <li>Serviços</li>
          </Link>
          <Link href="quem-somos">
            <li>Quem somos</li>
          </Link>
          <Link href="atuacao">
            <li>Atuação</li>
          </Link>
          <Link href="contato">
            <li>Contato</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}
