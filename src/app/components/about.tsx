import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section className="about" id="about-section">
      <div className="about-main">
        <Image src="/about-pic.png" alt="" width={400} height={400} />
        <div className="about-info">
          <h1>About me</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam magni,
            aspernatur a, temporibus illo eaque facere dicta laudantium ex,
            molestiae facilis rem quis accusantium ratione omnis harum dolore
            officia rerum.
          </p>
          <div className="about-tab">
            <ul className="heading">
              <li>
                <Link href="">education</Link>
              </li>
              <li>
                <Link href="">skills</Link>
              </li>
              <li>
                <Link href="">certification</Link>
              </li>
            </ul>
            <ul className="edu-content">
              <li>DAE(CIT)</li>
              <li>Intermediate(pre-enginnering)</li>
              <li>matriculation(science)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
