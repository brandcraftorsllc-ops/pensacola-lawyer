import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main" className="section not-found">
      <div className="container">
        <p className="eyebrow">404</p>
        <h1>Page not found</h1>
        <p>The page you are looking for may have moved or is no longer available.</p>
        <Link className="button button-gold" href="/">
          Return Home <span aria-hidden="true">→</span>
        </Link>
      </div>
    </main>
  );
}
