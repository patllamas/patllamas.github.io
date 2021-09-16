import Projects from "./Projects";

function App() {
  return (
    <div className="App">
      <div id='wallpaper' className="wallpaper" data-image='.\images\hitoshi-namura-MyiYvI-EKis-unsplash.jpg'></div>
      <div className="content">
        <aside className="side">
          <figure id='picture' className="picture">
            <div className="picture-shadow"></div>
            <img
              id="pictureImage"
              className="picture-image"
              src={require("./images/pat.png").default}
              alt="Patrick Llamas"
              width="320"
              height="320"
            />
          </figure>
        </aside>
        <main className="about">
          <h1 className="name">Hey, I'm Patrick Llamas</h1>
          <p className="job">Web Developer</p>
          <hr className="hr" />
          <div className="description">
            <p>I build websites and possess a passion for music and games</p>
          </div>
          <div className="contact">
            <a className="button" href="mailto:pat.llamas@outlook.com">
              Let's talk
            </a>
          </div>
          <ul className="social">
            <li>
              <a href='https://github.com/patllamas/'>
                <i className="fab fa-github"></i>
              </a>
            </li>
            <li>
              <a href='https://www.linkedin.com/in/patllamas/'>
                <i className="fab fa-linkedin"></i>
              </a>
            </li>
          </ul>
        </main>
      </div>
      <div className='CardGroup'>
          <Projects 
            title="Zerazal Photography" 
            jobtitle="Front End Developer" 
            image={require(`../src/images/zerazal.png`).default} 
          />
          <Projects
            title="Lord Fairfax Pet Motel"
            jobtitle="Full Stack Developer"
            image={require(`../src/images/lord_fairfax.png`).default}
          />
          <Projects
            title="Lord Fairfax Pet Motel"
            jobtitle="Full Stack Developer"
            image={require(`../src/images/coolbot.png`).default}
          />
        </div>
    </div>
  );
}

export default App;
