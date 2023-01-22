import React from "react";
import {
  MDBCarousel,
  MDBCarouselItem,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import "./Testimonials.css";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

const Testimonials = () => {

  return (

    <div className="app__testimonials">

      <h1>TESTIMONIALS</h1>

      <MDBContainer id="app__testimonials" className="py-5">
        <MDBCarousel showControls dark>
          <MDBCarouselInner>
            <MDBCarouselItem className="active text-center">
              <MDBRow className="d-flex justify-content-center">
                <MDBCol lg="8">
                  <h3 className="mb-4">Maria Kate</h3>
                  <p className="text-muted h5">
                    <MDBIcon fas icon="quote-left" className="pe-2" />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                    et deleniti nesciunt sint eligendi reprehenderit reiciendis,
                    quibusdam illo, beatae quia fugit consequatur laudantium velit
                    magnam error. Consectetur distinctio fugit doloremque.
                  </p>
                </MDBCol>
              </MDBRow>
            </MDBCarouselItem>

            <MDBCarouselItem className="text-center">
              <MDBRow className="d-flex justify-content-center">
                <MDBCol lg="8">
                  <h3 className="mb-3">John Doe</h3>
                  <p className="text-muted h5">
                    <MDBIcon fas icon="quote-left" className="pe-2" />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                    et deleniti nesciunt sint eligendi reprehenderit reiciendis.
                  </p>
                </MDBCol>
              </MDBRow>
            </MDBCarouselItem>

            <MDBCarouselItem className="text-center">
              <MDBRow className="d-flex justify-content-center">
                <MDBCol lg="8">
                  <h3 className="mb-3">Anna Deynah</h3>
                  <p className="text-muted h5">
                    <MDBIcon fas icon="quote-left" className="pe-2" />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                    et deleniti nesciunt sint eligendi reprehenderit reiciendis,
                    quibusdam illo, beatae quia fugit consequatur laudantium velit
                    magnam error. Consectetur distinctio fugit doloremque.
                  </p>
                </MDBCol>
              </MDBRow>
            </MDBCarouselItem>
          </MDBCarouselInner>
        </MDBCarousel>
      </MDBContainer>


    </div>


  );

};

export default Testimonials;