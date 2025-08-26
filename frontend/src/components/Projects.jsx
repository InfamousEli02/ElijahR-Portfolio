export default function Projects() {
  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="project-container">

        {/*project 1 */}
        <div className="project-card">
            <div className="image">
              <img src="\public\images\PokeInput_Screenshot.PNG" 
              width="100" height="100" alt="A screenshot of the PokeInput DB webpage" />
            </div>
            <div className="project-text">
              <h3>PokeInput DB webpage</h3>
              <p>An interactive Pokémon information web application created to allow users to access simple
              Pokémon data, using Node.js, HTML, CSS, JavaScript and Vite</p>
            </div>
          <div className="project-buttons">
            <a href="https://github.com/InfamousEli02/ElijahR_Pokemon_Number_Project" target="_blank" rel="noopener noreferrer" className="github-link-button">
              View on GitHub
            </a>
            <a href="https://pokeinputwebapp.netlify.app/" target="_blank" rel="noopener noreferrer" className="live-link-button">
              Live
            </a>
          </div>
        </div>

        {/*project 2 */}
        <div className="project-card">
          <div className="image">
            <img src="\public\images\KnightsofJS_Screenshot.PNG" width="100" height="100" alt="A screenshot of the portfolio webpage" />
          </div>
          <div className="project-text">
            <h3>Knights of JavaScript</h3>
            <p>A TKH assignment, We were tasked with taking the starter code, and replicating the same logic for Player 2's code along with checking for errors or bugs. 
              This was done using HTML, CSS, and JavaScript.</p>
          </div>
          <div className="project-buttons">
            <a href="https://github.com/InfamousEli02/ElijahR_KnightsOfjavaScript" target="_blank" rel="noopener noreferrer" className="github-link-button">
              View on GitHub
            </a>
          </div>
        </div>

        {/*project 3 */}
        <div className="project-card">
          <div className="image">
            <img src="\public\images\IntrotoPrisma_Screenshot.PNG" width="100" height="100" alt="A screenshot of the Intro_to_Prisma Assignment" />
          </div>
          <div className="project-text">
            <h3>Intro to Prisma</h3>
            <p>We were tasked with following along with a guided exercise as a resource to create our own models 
              and seed new data from them. For my project, I created a "Company" model, a "Customer" model, and a "Product" model, each 
              with a One-to-Many or One-to-One relationship.</p>
          </div>
          <div className="project-buttons">
            <a href="https://github.com/InfamousEli02/ElijahR_intro_to_prisma" target="_blank" rel="noopener noreferrer" className="github-link-button">
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};