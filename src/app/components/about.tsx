export default function About() {
  return (
    <section className="about" id="about-section">
      <div className="about-pic">
        <img src="/about-pic.png" alt="" />
      </div>
      <div className="about-info">
        <h1>About me</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam magni,
          aspernatur a, temporibus illo eaque facere dicta laudantium ex,
          molestiae facilis rem quis accusantium ratione omnis harum dolore
          officia rerum.
        </p>
        <div className="about-tab">
          <ul>
            <li>
              <a href="">education</a>
            </li>
            <li>
              <a href="">skills</a>
            </li>
            <li>
              <a href="">certification</a>
            </li>
          </ul>
          <div id="edu-content">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit qui
              maiores excepturi et enim necessitatibus rem amet deleniti,
              exercitationem, hic distinctio pariatur quaerat minima illo
              expedita beatae assumenda mollitia voluptatem.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
