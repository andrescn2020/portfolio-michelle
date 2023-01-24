import "./Aboutme.css";
import AboutmeImage from "/assets/Aboutme.jpg";

const Aboutme = () => {

    return (

        <div id="sobremi" className="app__aboutme">

            <div className="app__aboutme-first-column">
                <h2>Meet the creative soul behind the lens, Michelle.</h2>
                <h3>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente facere accusamus, ducimus eaque enim voluptatum,</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente facere accusamus, ducimus eaque enim voluptatum, vel voluptatem veniam illum magni possimus et totam ad dolorum voluptatibus, commodi nam ipsum recusandae!</p>
                {/* <div className="vermas-container">
                    <span className="vermas">Sobre Mí</span>
                    <a href="https://www.instagram.com/_michek_/" target="_blank">
                        <FiChevronRight className="icon" />
                    </a>
                </div> */}
            </div>

            <div className="app__aboutme-second-column">
                <img src={AboutmeImage} alt="Sobre Mí" />
            </div>

        </div>

    );

};

export default Aboutme;