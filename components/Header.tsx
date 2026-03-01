"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="shrink-0 cursor-pointer">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                T
              </div>
            </Link>
          </div>

          <nav className="hidden md:flex space-x-8">
            <NavLink href="/">Início</NavLink>
            <NavLink href="servicos">Serviços</NavLink>
            <NavLink href="contato">Contato</NavLink>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://wa.me/5511940848284"
              className="flex items-center px-5 py-2.5 text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20"
            >
              <Phone className="w-4 h-4 mr-2" />
              Solicitar Orçamento
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <MobileNavLink href="/" onClick={() => setIsMobileMenuOpen(false)}>
              Início
            </MobileNavLink>
            <MobileNavLink
              href="servicos"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Serviços
            </MobileNavLink>
            <MobileNavLink
              href="contato"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contato
            </MobileNavLink>

            <div className="pt-4 mt-4 border-t border-gray-100">
              <a
                href="https://wa.me/5511940848284"
                className="block w-full text-center px-4 py-3 text-white bg-blue-600 font-bold rounded-lg"
              >
                Solicitar Orçamento via WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="text-gray-600 hover:text-blue-600 font-medium transition-colors text-sm uppercase tracking-wide"
    >
      {children}
    </Link>
  );
}

function MobileNavLink({
  href,
  onClick,
  children,
}: {
  href: string;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
    >
      {children}
    </Link>
  );
}
