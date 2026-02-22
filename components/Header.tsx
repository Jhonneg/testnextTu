import Link from "next/link";

export default function Header() {
  return (
    <header className="py-5 bg-blue-600 text-white h-">
      <nav>
        {/* <Image  alt="Logo"/> */}
        <ul className="flex flex-row items-center justify-evenly">
          <Link href="servicos">
            <li className="hover:underline">Serviços</li>
          </Link>
          <Link href="contato">
            <li className="hover:underline">Contato</li>
          </Link>
          <Link href="atuacao">
            <li className="hover:underline">Atuação</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}
