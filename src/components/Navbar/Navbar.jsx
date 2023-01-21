import useScreenSize from "../../hooks/useScreenSize";
import "./Navbar.css";

const Navbar = () => {

  const { width } = useScreenSize();

  return (

    <nav>

      {width < 720

        ?

        <div className="app__navbar-phone">

          <h1>MICHELLE</h1>

          <div className="app__navbar-list-container">

            <ul className="app__navbar-list">

              <a href="#">
                <li>HOME</li>
              </a>
              <a href="#">
                <li>SOBRE MÍ</li>
              </a>
              <a href="#">
                <li>SERVICIOS</li>
              </a>

            </ul>

            <ul className="app__navbar-list">

              <a href="#">
                <li>GALERIA</li>
              </a>
              <a href="#">
                <li>CONTACTO</li>
              </a>
              <a href="#">
                <li>BLOG</li>
              </a>
            </ul>

          </div>



        </div>

        :

        <div className="app__navbar">

          <ul>

            <a href="#">
              <li>HOME</li>
            </a>
            <a href="#">
              <li>SOBRE MÍ</li>
            </a>
            <a href="#">
              <li>SERVICIOS</li>
            </a>

          </ul>

          <h1>MICHELLE</h1>

          <ul>
            <a href="#">
              <li>GALERIA</li>
            </a>
            <a href="#">
              <li>CONTACTO</li>
            </a>
            <a href="#">
              <li>BLOG</li>
            </a>
          </ul>

        </div>}

    </nav>

  );

};

export default Navbar;