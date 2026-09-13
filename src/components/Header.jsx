import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="px-8 md:px-16 pt-8 pb-6 border-b border-[#DDE3DE]">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/">
          <img src="/rg_logo.svg" alt="Reisigalerii" className="h-32" />
        </Link>
        <nav className="hidden md:flex gap-8 text-sm text-[#16261F]/70">
          <Link to="/">Sihtkohad</Link>
          <span>Viimase hetke pakkumised</span>
          <span>Meist</span>
        </nav>
      </div>
    </header>
  );
}
