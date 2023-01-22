import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import "bootstrap/dist/css/bootstrap.min.css";
import "./Testimonials.css";

const Testimonials = () => {

  return (

    <div className="app__testimonials-container">

    <h1>TESTIMONIALS</h1>

      <Carousel className="app__testimonials">

        <Carousel.Item className="app__carrusel-item">
          <img
            className="d-block"
            src="https://i.pinimg.com/236x/ce/59/83/ce59837dd46efcaa5549a75bf2b1e443.jpg"
            alt="First slide"
            style={{ opacity: "0" }}
          />
          <Carousel.Caption className="app__testimonials-text">
            <h3>Ana Laura</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit expedita perferendis voluptatibus officiis assumenda molestias, beatae quaerat eligendi atque ipsum dolor vitae nemo. Voluptatem aut sed earum temporibus cum expedita.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="app__carrusel-item">
          <img
            className="d-block"
            src="https://i.pinimg.com/236x/ce/59/83/ce59837dd46efcaa5549a75bf2b1e443.jpg"
            alt="Second slide"
            style={{ opacity: "0" }}
          />

          <Carousel.Caption className="app__testimonials-text">
            <h3>Richard</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus, suscipit recusandae? Expedita dicta, earum eveniet saepe soluta aut error natus quia, ex voluptas nisi, sunt necessitatibus maxime vel dolores fugiat.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="app__carrusel-item">
          <img
            className="d-block"
            src="https://i.pinimg.com/236x/ce/59/83/ce59837dd46efcaa5549a75bf2b1e443.jpg"
            alt="Third slide"
            style={{ opacity: "0" }}
          />

          <Carousel.Caption className="app__testimonials-text">
            <h3>Leonardo</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores eius vero veritatis. Voluptas adipisci placeat odit at totam id voluptates unde quod quasi nihil debitis est, possimus, nesciunt consequatur perspiciatis!
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

    </div>



  );

};

export default Testimonials;