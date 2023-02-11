import './assets/CSS/normalize.css'
import './assets/CSS/styles.css'
import Pdf from '../src/assets/curriculum.pdf'

function App () {
return (
    <div className="App">
      {/* <!-- Mobile menu button --> */}
      <div className="visuallyHidden" id="home"></div>
        <div className="menuButton" id="menuButton" tabIndex="0">
          <div className="linesContainer">
            <span className=""> </span>
          </div>
        </div>
        {/* <!-- Side menu --> */}
        <aside className="sideMenu sideMenuShow" id="sideMenu">
          <p className="logo translate1">Dp</p>
          <nav>
            <ul className="navBar">
              <li className="homeNav">
                <a className="navItem" href="#home">
                  <i className="lni lni-home"> </i>
                  <span className="navItemName translate40"> HOME </span>
                </a>
              </li>
              <li className="aboutNav">
                <a className="navItem" href="#about">
                  <i className="lni lni-user"> </i>
                  <span className="navItemName translate41"> ABOUT </span>
                </a>
              </li>
              <li className="skillsNav">
                <a className="navItem" href="#skills">
                  <i className="lni lni-code-alt"> </i>
                  <span className="navItemName translate42"> SKILLS </span>
                </a>
              </li>
              <li className="worksNav">
                <a className="navItem" href="#works">
                  <i className="lni lni-briefcase"> </i>
                  <span className="navItemName translate43"> WORKS </span>
                </a>
              </li>
              <li className="contactNav">
                <a className="navItem" href="#contact">
                  <i className="lni lni-phone"> </i>
                  <span className="navItemName translate44"> CONTACT </span>
                </a>
              </li>
              <li className="contactNav">
                <a className="navItem ukraine" href="#ukr">
                  <i className="fas fa-globe"> </i>

                  <span className="navItemName translate45"> UKRAINIAN </span>
                </a>
              </li>
              <li className="contactNav">
                <a className="navItem englang"  id = "england" href="#eng">
                  <i className="fas fa-globe-europe"> </i>

                  <span className="navItemName translate46"> ENGLISH </span>
                </a>
              </li>
              <li className="contactNav">
                <a className="navItem poland" href="#pl">
                  <i className="fas fa-globe-americas"> </i>

                  <span className="navItemName translate47"> POLISH </span>
                </a>
              </li>
            </ul>
          </nav>
          <div className="scrollDown" id="scrollDown">
            <span className="navItemName scrollDownText"> </span>
          </div>
        </aside>
        {/* <!--Beginning of the wrapper --> */}
        <div className="outerWrapper">
          <div className="innerWrapper">
            {/* <!-- Header --> */}
            <header>
              <div className="heroImageContainer">
                <img
                  alt="Dmytro Pishchenkov."
                  src="assets\images\me.png"
                />
              </div>
              <div className="heroDescription">
                <p className="greeting translate2">HI THERE! I'M</p>
                <h1 className="myName translate22">DMYTRO PISHCHENKOV</h1>
                <p className="smallBio translate3">
                  A Front-End Developer that helps people create a variety of
                  web applications and sites
                </p>
                <div className="socialsResume">
                  <a
                    alt="Dmytro Pishchenkov`s resumé"
                    className="resumeLink"
                    href={Pdf}
                    rel="noopener noreferrer"
                    target='_blank'                    
                  >
                    Resumé
                  </a>
                  <ul className="socialsList">
                    <li>
                      <a
                        href="https://www.linkedin.com/in/dmytro-pishchenkov-543a52232/?locale=en_US"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <i
                          aria-label="Link to Dmytro`s LinkedIn page."
                          className="lni lni-linkedin-original"
                        ></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://github.com/DemetrPI"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <i
                          aria-label="Link to Dmytro`s GitHub page."
                          className="lni lni-github-original"
                        ></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </header>
            {/* <!-- Beginning of Main --> */}
            <main>
              {/* <!-- About Section --> */}
              <section className="aboutSection" id="about">
                <div className="sectionHead">
                  <span className="translate49"> SOME INFO </span>
                  <h2 className="translate23">ABOUT ME</h2>
                </div>
                <article className="aboutContainer sectionContainer">
                  <p className="translate4">
                    I have been learning new skills and professions all my life,
                    I was a lawyer but decided to change my life and chose the
                    freedom that IT gives. Received a certificate for successful
                    completion of the University of Michigan specialization
                    "Python for everybody" on Coursera educational platform. Now
                    I`m finishing specializations: Front-End Developer and
                    Back-End Developer Professional Certificate taught by Meta.
                    For me, coding is an exciting process of gaining new
                    knowledge and skills, and I'm excited to work with other
                    great programmers and learn a lot more!
                  </p>
                </article>
              </section>
              {/* <!-- Skills Section --> */}
              <section className="skillsSection" id="skills">
                <div className="sectionHead">
                  <span className="translate50"> CHECK OUT MY </span>
                  <h2 className="translate24">SKILLS</h2>
                </div>
                <div className="skillsContainer sectionContainer">
                  <ul className="skillsGrid">
                    <li>
                      <div className="itemContainer">
                        <img src="assets/images/html.svg" alt ="HTML" />
                        <p className="translate5">HTML</p>
                      </div>
                    </li>
                    <li>
                      <div className="itemContainer">
                        <img src="assets\images\css.svg" alt= "CSS "/>
                        <p className="translate6">CSS</p>
                      </div>
                    </li>
                    <li>
                      <div className="itemContainer">
                        <img src="assets\images\sass.svg" alt = "sass"/>
                        <p className="translate7">SASS</p>
                      </div>
                    </li>
                    <li>
                      <div className="itemContainer">
                        <img src="assets\images\javascript.svg"  alt = "JS"/>
                        <p className="translate8">Javascript</p>
                      </div>
                    </li>
                    <li>
                      <div className="itemContainer">
                        <img src="assets/images/django.svg"  alt = "django"/>
                        <p className="translate9">Django</p>
                      </div>
                    </li>
                    <li>
                      <div className="itemContainer">
                        <img src="assets\images\react.svg" alt ="react"/>
                        <p className="translate10">React</p>
                      </div>
                    </li>
                    <li>
                      <div className="itemContainer">
                        <img alt="Api" src="assets/images/Bootstrap_logo.svg" />
                        <p className="translate11">Bootstrap</p>
                      </div>
                    </li>
                    <li>
                      <div className="itemContainer">
                        <img src="assets\images\git.svg"  alt = "git"/>
                        <p className="translate12">Git</p>
                      </div>
                    </li>
                    <li>
                      <div className="itemContainer">
                        <img src="assets/images/Python-logo.svg"  alt = "python"/>
                        <p className="translate13">Python</p>
                      </div>
                    </li>
                    <li>
                      <div className="itemContainer">
                        <img src="assets\images\vscode.svg"  alt = "VScode"/>
                        <p className="translate14">VS Code</p>
                      </div>
                    </li>
                    <li>
                      <div className="itemContainer">
                        <img src="assets/images/Tailwind_CSS_Logo.svg"  alt = "Tailwind"/>
                        <p className="translate15">Tailwind</p>
                      </div>
                    </li>
                    <li>
                      <div className="itemContainer">
                        <img src="assets/images/React-Bootstrap.png" alt = "react-bootstrap"/>
                        <p className="translate16">React-Bootstrap</p>
                      </div>
                    </li>
                    <li>
                      <div className="itemContainer">
                        <img src="assets/images/sqlite-icon.svg" alt = "SQL" />
                        <p className="translate17">SQLite</p>
                      </div>
                    </li>
                    <li>
                      <div className="itemContainer">
                        <img src="assets\images\network.svg"  alt = "networks"/>
                        <p className="translate18">Networks</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </section>
              {/* <!-- Works Section --> */}
              <section className="worksSection" id="works">
                <div className="sectionHead">
                  <span className="translate51"> TAKE A LOOK AT MY </span>
                  <h2 className="translate25">PROJECTS</h2>
                </div>
                <div className="worksContainer sectionContainer">
                  <article className="workBox">
                    <div className="workImageContainer">
                      <img
                        alt="Hair-Day-Salon"
                        src="assets/images/HairDaySalon.png"
                      />
                    </div>
                    <div className="workDescribeContainer">
                      <h3 className="translate27">HairDay Beauty salon</h3>
                      <h4 className="translate31">Technologies Used:</h4>
                      <span className="techStack translate52">
                        HTML, CSS, JS, Python, Tailwind
                      </span>
                      <ul>
                        <li className="translate33">
                          Built in three languages (Ukrainian, Spanish, English)
                        </li>
                        <li className="translate34">
                          Translation was made using Python BeautifulSoup
                          library
                        </li>
                        <li className="translate35">
                          Translations are saved in separete JS file
                        </li>
                      </ul>
                      <div className="workLinks">
                        <a
                          className="liveLink"
                          href="https://demetrpi.github.io/Hair-Day-Salon/"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          Live
                        </a>
                        <a
                          className="repoLink"
                          href="https://github.com/DemetrPI/Hair-Day-Salon"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          Repo
                        </a>
                      </div>
                    </div>
                  </article>
                  <article className="workBox">
                    <div className="workImageContainer">
                      <img
                        alt="Yastvo vegetarian cafe"
                        src="assets/images/Yastvo.png"
                      />
                    </div>
                    <div className="workDescribeContainer">
                      <h3 className="translate28">
                        Yastvo vegetarian cafe in Yalta (temporary occupied with
                        russia Ukrainian Crimea)
                      </h3>
                      <h4 className="translate32">Technologies Used:</h4>
                      <span className="techStack translate53">
                        Python, Django, HTML, CSS, SQLite
                      </span>
                      <ul>
                        <li className="translate36">
                          The project was made for a real small business
                        </li>
                        <li className="translate37">
                          It is written in Python Django framework, using HTML
                          and CSS
                        </li>
                        <li className="translate38">
                          Site has been made in three languages: Ukrainian,
                          English, Polish (no russians allowed!), including
                          database, payment services and adding dishes to menu
                          directly from the website has been implemented
                        </li>
                      </ul>
                      <div className="workLinks">
                        <a
                          className="liveLink"
                          href="#"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          Live
                        </a>
                        <a
                          className="repoLink"
                          href="https://github.com/DemetrPI/Yastvo"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          Repo
                        </a>
                      </div>
                    </div>
                  </article>
                </div>
              </section>
              {/* <!-- Contact Section --> */}
              <section className="contactSection" id="contact">
                <div className="sectionHead">
                  <span className="translate54"> SAY HELLO </span>
                  <h2 className="translate26">CONTACT</h2>
                </div>
                <div className="contactContainer sectionContainer">
                  <h3 className="translate29">Get in Touch</h3>
                  <div className="contactTypes">
                    <div className="flexContainer">
                      <div className="typeBox">
                        <i className="lni lni-envelope"> </i>
                        <a href="mailto:demetriy.78@gmail.com">
                          demetriy.78@gmail.com
                        </a>
                        <p className="translate19">Email Me</p>
                      </div>
                    </div>
                    <div className="flexContainer">
                      <div className="typeBox">
                        <i className="lni lni-calendar"> </i>
                        <a
                          href="https://calendly.com/demetriy-78/30min"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          Calendly
                        </a>
                        <p className="translate20">Schedule a Meeting</p>
                      </div>
                    </div>
                  </div>
                  <div className="contactFormContainer">
                    <h3 className="translate30">Contact Form</h3>
                    <form
                      action="https://formspree.io/f/xeqwajpz"
                      id="contactForm"
                      method="POST"
                    >
                      <label className="srOnly" htmlFor="nameInput">
                        {" "}
                      </label>
                      <input
                        className="nameInput"
                        id="nameInput"
                        name="nameInput"
                        placeholder="Your Name*"
                        required=""
                        type="text"
                      />
                      <label className="srOnly" htmlFor="emailInput">
                        {" "}
                      </label>
                      <input
                        className="emailInput"
                        id="emailInput"
                        name="emailInput"
                        placeholder="Your Email*"
                        required=""
                        type="email"
                      />
                      <label className="srOnly" htmlFor="subjectInput">
                        {" "}
                      </label>
                      <input
                        className="subjectInput"
                        id="subjectInput"
                        name="subjectInput"
                        placeholder="Subject*"
                        required=""
                        type="text"
                      />
                      <label className="srOnly" htmlFor="messageInput">
                        {" "}
                      </label>
                      <textarea
                        className="messageInput"
                        id="messageInput"
                        name="messageInput"
                        placeholder="Your Message*"
                        required=""
                      ></textarea>
                    </form>
                    <button
                      className="formSend"
                      form="contactForm"
                      rel="noopener noreferrer"
                      target="_blank"
                      type="submit"
                    >
                      SEND
                    </button>
                  </div>
                </div>
              </section>
            </main>
            {/* <!-- End of Main --> */}
          </div>
          {/* <!-- Footer --> */}
          <footer>
            <p className="translate21">© Dmytro Pishchenkov 2022</p>
          </footer>
        </div>
        {/* <!-- End of the wrapper --> */}
    
      </div>
  );
}


export default App;
