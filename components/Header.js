import Link from 'next/link';

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <div className="brand">
          <Link href="/">
            N. A. Gavkani
          </Link>
          <p className="tagline">Dragon & Daffodil — YA Fantasy</p>
        </div>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/books">Books</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}

