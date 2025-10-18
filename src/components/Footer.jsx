export default function Footer() {
  return (
    <footer className="mt-10 border-t border-accent/40">
      <div className="section py-8 flex items-center justify-between">
        <span className="text-ink/70">© {new Date().getFullYear()} Zhaabeer</span>
        <a href="#" className="no-underline text-ink hover:text-secondary">Back to top ↑</a>
      </div>
    </footer>
  );
}
