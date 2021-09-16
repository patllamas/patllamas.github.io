import Projects from "./Projects";

Projects.defaultProps = {
  icon2: '',
}

function App() {
  return (
    <div className="App">
      <div id='wallpaper' className="wallpaper" data-image='.images/vlad-tchompalov-dHjV9czPNHs-unsplash.jpg'></div>
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
          <h1 className="name">Hi, I'm Patrick</h1>
          <p className="job">Web Developer</p>
          <hr className="hr" />
          <div className="languages"></div>
          <div className="description">
            <p>
              Aspiring web developer with a background in information systems. 
              Familiar with React JS, Django, Python, JavaScript, HTML, and CSS.
              Enjoys self-improvement in all shapes and forms.
            </p>
          </div>
          <div className="contact">
            <a className="button" href="https://www.linkedin.com/in/patllamas/">
              Let's Connect
            </a>
          </div>
          <ul className="social">
          <li>
              <a href='mailto:pat.llamas@outlook.com'>
                <i className="fas fa-at"></i>
              </a>
            </li>
            <li>
              <a href='https://www.linkedin.com/in/patllamas/'>
                <i className="fab fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a href='https://github.com/patllamas/'>
                <i className="fab fa-github"></i>
              </a>
            </li>


          </ul>
        </main>
      </div>
      <div className='CardGroup'>
          <Projects 
            title="Zerazal Photography"
            link="https://github.com/patllamas/Marium-Photography#readme" 
            jobtitle="Front End Developer"
            languages={[<i style={{fontSize: 1.2 + "rem"}} class="fab fa-react"></i>, " ",<i style={{fontSize: 1.2 + "rem"}} class="fab fa-html5"></i>," ",<i style={{fontSize: 1.2 + "rem"}} class="fab fa-css3-alt"></i>," ", <i style={{fontSize: 1.2 + "rem"}} class="fab fa-js-square"></i>]}
            image={require(`../src/images/zerazal.png`).default} 
          />
          <Projects
            title="Lord Fairfax Pet Motel"
            link="https://github.com/patllamas/lordfairfax#lord-fairfax-pet-motel"
            jobtitle="Full Stack Developer"
            languages={[<i style={{fontSize: 1.2 + "rem"}} class="fab fa-python"></i>, " ",<i style={{fontSize: 1.2 + "rem"}} class="fab fa-html5"></i>," ",<i style={{fontSize: 1.2 + "rem"}} class="fab fa-css3-alt"></i>," ", <i style={{fontSize: 1.2 + "rem"}} class="fab fa-js-square"></i>]}
            image={require(`../src/images/lord_fairfax.png`).default}
          />
          <Projects
            title="coolbot"
            link='https://github.com/patllamas/coolbot/tree/main#coolbot'
            jobtitle="Software Developer"
            languages={[" ", <i style={{fontSize: 1.2 + "rem"}} class="fab fa-js-square"></i>," ", <i style={{fontSize: 1.2 + "rem"}} class="fab fa-discord"></i>]}
            image={require(`../src/images/coolbot.png`).default}
          />
        </div>
        <p style={{textAlign: 'center'}}>Page by Pat 2021 <i class="fab fa-connectdevelop fa-spin" /> </p>
    </div>
  );
}

export default App;
