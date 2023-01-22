import "./Journal.css";
import ImageOne from "/assets/ServicesUno.jpg";
import ImageDos from "/assets/ServicesDos.jpg";
import ImageTres from "/assets/ServicesTres.jpg";

const Journal = () => {

    return (
  
      <div className="app__journal">

      <h1>LATEST JOURNAL ENTRIES</h1>

      <div className="app__journal-containers">

        <div className="app__journal-container">
          <img src={ImageOne} alt="BOUDOIR" />
          <h3>BOUDOIR</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam sapiente aut fugiat dolorem! Autem sunt error illum nemo architecto perspiciatis.</p>
        </div>

        <div className="app__journal-container">
          <img src={ImageDos} alt="EDITORIAL" />
          <h3>EDITORIAL</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam sapiente aut fugiat dolorem! Autem sunt error illum nemo architecto perspiciatis.</p>
        </div>

        <div className="app__journal-container">
          <img src={ImageTres} alt="PORTRAITS" />
          <h3>PORTRAITS</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam sapiente aut fugiat dolorem! Autem sunt error illum nemo architecto perspiciatis.</p>
        </div>


      </div>


    </div>
  
    );
  
  };
  
  export default Journal;