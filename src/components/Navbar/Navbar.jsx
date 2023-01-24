import useScreenSize from "../../hooks/useScreenSize";
import "./Navbar.css";

const Navbar = () => {

  const { width } = useScreenSize();

  return (

    <nav id="navbar">

      {width < 720

        ?

        <div className="app__navbar-phone">

          <h1>MICHELLE</h1>

          <div className="app__navbar-list-container">

            <ul className="app__navbar-list">

              {/* <a href="#">
                <li>HOME</li>
              </a> */}
              <a href="#sobremi">
                <li>SOBRE MÍ</li>
              </a>
              <a href="#services">
                <li>SERVICIOS</li>
              </a>

            </ul>

            <ul className="app__navbar-list">

              <a href="#app__carrusel">
                <li>GALERIA</li>
              </a>
              <a href="#footer">
                <li>CONTACTO</li>
              </a>
              {/* <a href="#">
                <li>BLOG</li>
              </a> */}
            </ul>

          </div>



        </div>

        :

        <div  className="app__navbar">

          <ul>

            {/* <a href="#" className="link-navbar">
              <li>HOME</li>
            </a> */}
            <a href="#sobremi" className="link-navbar">
              <li>SOBRE MÍ</li>
            </a>
            <a href="#services" className="link-navbar">
              <li>SERVICIOS</li>
            </a>

          </ul>

          <h1>MICHELLE</h1>

          <ul>
            <a href="#app__carrusel" className="link-navbar">
              <li>GALERIA</li>
            </a>
            <a href="#footer" className="link-navbar">
              <li>CONTACTO</li>
            </a>
            {/* <a href="#" className="link-navbar">
              <li>BLOG</li>
            </a> */}
          </ul>

        </div>}

    </nav>

  );

};

export default Navbar;