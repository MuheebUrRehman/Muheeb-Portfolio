import Image from "next/image";
import Link from "next/link";

export default function Carosel() {
  return (
    <section className="carosel">
      <div className="carosel-main">
        <div className="text">
          <h3>
            Hi there! I’m <span>Muheeb</span>,
          </h3>
          <h1>Creative front-end web developer</h1>
          <p>
            crafting sleek, user-friendly websites with a touch of elegance.
          </p>
          <Link href="#contact-section">
            <button>Contact me</button>
          </Link>
        </div>
        <Image src="/carosel-pic.png" alt="" width={400} height={400} />
      </div>
    </section>
  );
}
