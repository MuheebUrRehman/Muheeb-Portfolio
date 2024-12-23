import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <div className="nav-main">
        <Link href="#home-section">
          <Image src="/logomuheeb.png" alt="" height={120} width={300} />
        </Link>
        <ul className="pages">
          <li>
            <Link href="#home-section">Home</Link>
          </li>
          <li>
            <Link href="#about-section">About</Link>
          </li>
          <li>
            <Link href="#project-section">Projects</Link>
          </li>
          <li>
            <Link href="#contact-section">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
