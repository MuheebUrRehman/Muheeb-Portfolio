import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

export default function Contact() {
  return (
    <section className="contact" id="contact-section">
      <div className="contact-main">
        <div className="contact-info">
          <h1>Contact Me</h1>
          <div>
            <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
            muhiburrehman94@gmail.com
          </div>
          <div>
            <FontAwesomeIcon icon={faPhone} className="contact-icon" />
            647-270-2934
          </div>
          <div>
            <FontAwesomeIcon icon={faLinkedin} className="contact-icon" />
            linkedin.com/in/muheeb-ur-rehman/
          </div>
          <Link href="/aMuheebCV-webdev.pdf" target="_blank">
            <button>Resume</button>
          </Link>
        </div>
        <form action="">
          <input type="text" placeholder="your name" />
          <input type="email" placeholder="your email" />
          <textarea placeholder="message"></textarea>
          <div>
            <Link href="">
              <button>Submit</button>
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
}
