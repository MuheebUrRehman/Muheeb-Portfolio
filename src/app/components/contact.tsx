import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
  return (
    <section className="contact" id="contact-section">
      <div className="contact-info">
        <h1>Contact Me</h1>
        <span>
          <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
          muhiburrehman94@gmail.com
        </span>
        <span>
          <FontAwesomeIcon icon={faPhone} className="contact-icon" />
          647-270-2934
        </span>
        <span>
          <FontAwesomeIcon icon={faLinkedin} className="contact-icon" />
          linkedin.com/in/muheeb-ur-rehman/
        </span>
        <a href="/aMuheebCV-webdev.pdf" target="_blank">
          <button>resume</button>
        </a>
      </div>
      <form action="">
        <input type="text" placeholder="your name" />
        <input type="email" placeholder="your email" />
        <textarea placeholder="message"></textarea>
        <button type="submit" className="contact-submit">
          submit
        </button>
      </form>
    </section>
  );
}
