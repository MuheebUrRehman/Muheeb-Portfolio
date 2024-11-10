export default function Navbar() {
  return (
    <nav>
      <a href="#home-section" className="logo">
        <img src="/logomuheeb.png" alt="" />
      </a>
      <ul className="pages">
        <li>
          <a href="#home-section">Home</a>
        </li>
        <li>
          <a href="#about-section">About</a>
        </li>
        <li>
          <a href="#project-section">Projects</a>
        </li>
        <li>
          <a href="#contact-section">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
