import "./Services.css";
import ImageOne from "/assets/ServicesUno.jpg";
import ImageDos from "/assets/ServicesDos.jpg";
import ImageTres from "/assets/ServicesTres.jpg";

const Services = () => {

  return (

    <div className="app__services">

      <h1>SERVICES</h1>

      <div className="app__services-containers">

        <div className="app__services-container">
          <img src={ImageOne} alt="BOUDOIR" />
          <h3>BOUDOIR</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam sapiente aut fugiat dolorem! Autem sunt error illum nemo architecto perspiciatis.</p>
          <h5>LOREM IPSUM</h5>
          <div></div>
        </div>

        <div className="app__services-container">
          <img src={ImageDos} alt="EDITORIAL" />
          <h3>EDITORIAL</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam sapiente aut fugiat dolorem! Autem sunt error illum nemo architecto perspiciatis.</p>
          <h5>LOREM IPSUM</h5>
          <div></div>
        </div>

        <div className="app__services-container">
          <img src={ImageTres} alt="PORTRAITS" />
          <h3>PORTRAITS</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam sapiente aut fugiat dolorem! Autem sunt error illum nemo architecto perspiciatis.</p>
          <h5>LOREM IPSUM</h5>
          <div></div>
        </div>


      </div>


    </div>

  );

};

export default Services;