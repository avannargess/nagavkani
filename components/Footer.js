export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <p>© {new Date().getFullYear()} N. A. Gavkani — <em>Dragon & Daffodil</em></p>
        <p className="small">
          © {new Date().getFullYear()} N. A. Gavkani All Rights Reserved ·{" "}
          <a
            href="https://vercel.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vercel deployment recommended
          </a>
        </p>
      </div>
    </footer>
  );
}

