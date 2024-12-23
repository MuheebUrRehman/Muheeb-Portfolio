import Link from "next/link";
import Image from "next/image";

export default function Project() {
  return (
    <section className="project" id="project-section">
      <div className="project-main">
        <h1>Projects</h1>
        <div className="project-slider">
          <Link href="" target="_blank">
            <Image src="" alt="" />
          </Link>
        </div>
        <div className="buttons">
          <Link
            href="https://vercel.com/muheeb-ur-rehmans-projects"
            target="_blank"
          >
            <button>Vercel</button>
          </Link>
          <Link href="https://github.com/MuheebUrRehman/" target="_blank">
            <button>Github</button>
          </Link>
          <Link href="/aMuheebCV-webdev.pdf" target="_blank">
            <button>Resume</button>
          </Link>
        </div>
      </div>
    </section>
  );
}
