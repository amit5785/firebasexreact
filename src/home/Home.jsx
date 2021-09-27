import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Carousel, CarouselItem } from 'react-bootstrap';
import img1 from './img-1.jpg'
import img2 from './img-2.jpg'
const Home=() =>{
  return (
    <>
      <div className='container' >
        <div className="row" >
          <div className='col col-lg-4' ></div>
          <div className='col col-lg-8' >
            <div className='row' >
              <div className='col col-lg-2' ></div>
              <div className='col col-lg-8' >
              <Carousel variant="dark">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h5>First slide label</h5>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img2}
      alt="Second slide"
    />
    <Carousel.Caption>
      <h5>Second slide label</h5>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img1}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h5>Third slide label</h5>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
              </div>
              <div className='col col-lg-2' ></div>
            </div>
            <div className='row' >
              <div className='col col-lg-2' ></div>
              <div className='col col-lg-8' ></div>
              <div className='col col-lg-2' ></div>
            </div>
            <div className='row' >
              <div className='col col-lg-3' ></div>
              <div className='col col-lg-6' ></div>
              <div className='col col-lg-3' ></div>
            </div>
          </div>
         </div>
      </div>
    </>
  );
}

export default Home
