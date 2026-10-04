import './App.css'

function App() {
  return (
    <div className="portfolio">

      {/* NAVBAR */}
      <nav className="navbar">
        <h2 className="logo">KK</h2>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#certifications">Certifications</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>


      {/* HERO */}
      <section id="home" className="hero-section">
        <div className="hero-content">

          <p className="hello">Hello, I'm</p>

          <h1>Kambala Krishnaveni</h1>

          <h2>Python Full Stack Developer</h2>

          <p className="hero-description">
            Aspiring Python Full Stack Engineer dedicated to developing
            secure, high-performance web applications and scalable
            server-side solutions.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-btn">
              View My Projects
            </a>

            <a href="#contact" className="secondary-btn">
              Contact Me
            </a>
          </div>

        </div>
      </section>


      {/* ABOUT */}
      <section id="about" className="about-section">
        <div className="section-container">

          <p className="section-label">ABOUT ME</p>

          <p className="about-text">
            I am an aspiring Python Full Stack Developer with a strong
            foundation in Python programming, Object-Oriented Programming,
            data structures, and problem solving. I am passionate about
            developing efficient and user-friendly web applications.
          </p>

          <p className="about-text">
            I have hands-on knowledge of frontend technologies including
            HTML, CSS, and JavaScript, along with backend development
            using Python.
          </p>

          <p className="about-text">
            I work with databases like SQL, focusing on creating
            efficient, secure, and reliable applications.
          </p>

        </div>
      </section>


      {/* SKILLS */}
      <section id="skills" className="skills-section">
        <div className="section-container">

          <p className="section-label">MY SKILLS</p>

          <div className="skills-grid">

            <div className="skill-card">
              <h3>Frontend</h3>
              <p>HTML</p>
              <p>CSS</p>
              <p>JavaScript</p>
            </div>

            <div className="skill-card">
              <h3>Backend</h3>
              <p>Python</p>
            </div>

            <div className="skill-card">
              <h3>Databases</h3>
              <p>SQL</p>
            </div>

            <div className="skill-card">
              <h3>Tools</h3>
              <p>Git & GitHub</p>
              <p>VS Code</p>
            </div>

          </div>

        </div>
      </section>


      {/* PROJECTS */}
      <section id="projects" className="projects-section">
        <div className="section-container">

          <p className="section-label">MY PROJECTS</p>

          <h2>Projects</h2>

          <div className="projects-grid">


            {/* PROJECT 1 */}
            <div className="project-card">

              <span className="project-status">
                Completed
              </span>

              <h3>
                Diabetes Prediction Using Health Indicators
                and Classification Algorithm
              </h3>

              <p>
                Developed a machine learning model to predict the
                likelihood of diabetes using health indicators such
                as glucose level, BMI, age, skin thickness, and insulin.
                Applied classification algorithms to analyze healthcare
                data and generate predictions.
              </p>

              <div className="tech-list">
                <span>Python</span>
                <span>Machine Learning</span>
                <span>Classification</span>
              </div>

            </div>


            {/* PROJECT 2 */}
            <div className="project-card">

              <span className="project-status">
                Completed
              </span>

              <h3>
                Hybrid CNN-ResNet50-Transformer Framework
                for Crop Disease Detection
              </h3>

              <p>
                Developed an AI-based crop disease detection system
                using CNN, ResNet-50, and Transformer models. Worked
                with the PlantVillage dataset for accurate plant
                disease classification. Used Python, HTML, and CSS
                to develop and support the disease prediction system.
              </p>

              <div className="tech-list">
                <span>Python</span>
                <span>CNN</span>
                <span>ResNet-50</span>
                <span>Transformer</span>
                <span>HTML</span>
                <span>CSS</span>
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* EDUCATION */}
      <section id="education" className="education-section">
        <div className="section-container">

          <p className="section-label">MY JOURNEY</p>

          <h2>Education</h2>

          <div className="education-card">

            <h3>Bachelor of Technology (B.Tech)</h3>

            <h4>Information Technology (IT)</h4>

            <p>Vignan's Nirula Institute of Technology and Science for Women</p>

            <p>Guntur, Andhra Pradesh</p>

            <p>CGPA: 8.2</p>

          </div>

        </div>
      </section>


      {/* CERTIFICATIONS */}
      <section id="certifications" className="certifications-section">
  <div className="section-container">

    <p className="section-label">CERTIFICATIONS</p>

    <h2>Certifications</h2>

    <div className="certifications-grid">

      <div className="certificate-card">
        <h3>HackerRank Certification in Python</h3>

        <p>
          Certification demonstrating knowledge and practical
          understanding of Python programming.
        </p>

        <span>HackerRank</span>
      </div>

      <div className="certificate-card">
        <h3>Python, CSS and HTML</h3>

        <p>
          Completed training covering Python programming and
          fundamental web technologies including HTML and CSS.
        </p>

        <span>Udemy</span>
      </div>

    </div>

  </div>
</section>


      {/* CTA + CONTACT */}
<section id="contact" className="contact-section">
  <div className="section-container">

    <p className="section-label">LET'S CONNECT</p>

    <h2>Ready to Build Something Great?</h2>

    <p className="contact-text">
      I am immediately available for full-time opportunities and
      open to relocating and working in shifts.
    </p>

    <p className="contact-text">
      Let's connect to build secure, scalable, and high-performance
      applications together!
    </p>

    <div className="contact-buttons">

     <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=krishnavenikambala09@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className="primary-btn"
>
  Email Me
</a>

      <a
        href="https://www.linkedin.com/in/krishnaveni-kambala-237ba4315"
        target="_blank"
        rel="noopener noreferrer"
        className="secondary-btn"
      >
        LinkedIn
      </a>

      <a
        href="https://github.com/kambalakrishnaveni"
        target="_blank"
        rel="noopener noreferrer"
        className="secondary-btn"
      >
        GitHub
      </a>

    </div>

  </div>
</section>


      {/* FOOTER */}
      <footer className="footer">
        <p>
          © 2026 Kambala Krishnaveni. All Rights Reserved.
        </p>
      </footer>

    </div>
  )
}

export default App