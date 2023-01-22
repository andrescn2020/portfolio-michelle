import "./Footer.css";
import { AiOutlineInstagram, AiFillFacebook, AiFillTwitterCircle } from "react-icons/ai";

const Footer = () => {

  return (

    <footer className="app__footer">

      <div className="app__footer-first-row">

        <div>
          <h3>Services</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        </div>
        <div className="separator"></div>
        <div>
          <h3>Portfolio</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        </div>
        <div className="separator"></div>
        <div>
          <h3>Podcast</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        </div>
        <div className="separator"></div>
        <div>
          <h3>Get in Touch</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        </div>

      </div>

      <div className="app__footer-second-row"></div>

      <div className="app__footer-third-row">

        <div className="items">
          <h4>HOME</h4>
          <h4>MICHELLE</h4>
        </div>

        <div className="copyright">
          <h4>COPYRIGHT 2023</h4>
        </div>

        <div className="links">
          <a href="#">
          <AiOutlineInstagram className="icon"/>
          </a>
          <a href="#">
            <AiFillFacebook className="icon" />
          </a>
          <a href="#">
            <AiFillTwitterCircle className="icon"/>
          </a>
        </div>

      </div>

    </footer>

  );

};

export default Footer;