const date = new Date();
const year = date.getFullYear();

export default function Footer() {
  return (
    <footer className="footer">
      <p>© Copyright {year}</p>
    </footer>
  );
}
