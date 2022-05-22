import React, { Component, Fragment } from 'react'
import {Container,Row,Col,Card} from 'react-bootstrap'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

class NewArrival extends Component {
     render() {
          var settings = {
               dots: false,
               infinite: false,
               speed: 500,
               autoplay: true,
               autoplaySpeed:3000,
               slidesToShow: 4,
               slidesToScroll: 1,
               initialSlide: 0,
               arrows: false,
               responsive: [
                 {
                   breakpoint: 1024,
                   settings: {
                     slidesToShow: 4,
                     slidesToScroll: 1,
                     infinite: true,
                     dots: true
                   }
                 },
                 {
                   breakpoint: 600,
                   settings: {
                     slidesToShow: 2,
                     slidesToScroll: 1,
                     initialSlide: 2
                   }
                 },
                 {
                   breakpoint: 480,
                   settings: {
                     slidesToShow: 1,
                     slidesToScroll: 1
                   }
                 }
               ]
             };


          return ( 
               <Fragment>
          <Container className="text-center" fluid={true}>
          <div className="section-title text-center mb-55"><h2>NEW ARRIVAL</h2>
          <p>Some Of Our Exclusive Collection, You May Like</p>
          </div>

               <Row>

               <Slider {...settings}>
          <div>
          <Card className="image-box card">
          <img className="center" src="https://www.pocketnurse.com/media/catalog/product/cache/46c67a7e014cd6344be7c367252caa28/0/3/03-47-2452-med_5.jpg" />   
          <Card.Body> 
          <p className="product-name-on-card">Latex Exam Gloves, Pairs</p>
          <p className="product-price-on-card">Price : $1.04</p>

          </Card.Body>
          </Card>
          </div>
          <div>
          <Card className="image-box card">
          <img className="center" src="https://www.pocketnurse.com/media/catalog/product/cache/46c67a7e014cd6344be7c367252caa28/0/3/03-04-8539_1.jpg" />   
          <Card.Body> 
          <p className="product-name-on-card">Fortera 360 Hand Sanitizer, 8 oz.</p>
          <p className="product-price-on-card">Price : $1.84</p>

          </Card.Body>
          </Card>
          </div>
          <div>
          <Card className="image-box card">
          <img className="center" src="https://www.pocketnurse.com/media/catalog/product/cache/46c67a7e014cd6344be7c367252caa28/0/3/03-75-301_2.jpg" />   
          <Card.Body> 
          <p className="product-name-on-card">Isolation Gown Blue</p>
          <p className="product-price-on-card">Price : $120</p>
          </Card.Body>
          </Card>
          </div>
          <div>
          <Card className="image-box card">
          <img className="center" src="https://rukminim1.flixcart.com/image/800/960/jw0zr0w0/watch/c/u/r/ls2811-limestone-original-imafgrxqf8qvecjd.jpeg?q=50" />   
          <Card.Body> 
          <p className="product-name-on-card">Isolation Gown Blue</p>
          <p className="product-price-on-card">Price : $120</p>
          </Card.Body>
          </Card>
          </div>
          <div>
          <Card className="image-box card">
          <img className="center" src="https://rukminim1.flixcart.com/image/800/960/jcxoya80/watch/z/n/h/skmei-sports-multifunctional-dual-time-digital-blue-dial-men-s-original-imaffykneyfryvqh.jpeg?q=50" />   
        <Card.Body> 
          <p className="product-name-on-card">Isolation Gown Blue</p>
          <p className="product-price-on-card">Price : $120</p>
          </Card.Body>
          </Card>
          </div>
          <div>
          <Card className="image-box card">
          <img className="center" src="https://rukminim1.flixcart.com/image/800/960/jcxoya80/watch/z/n/h/skmei-sports-multifunctional-dual-time-digital-blue-dial-men-s-original-imaffykneyfryvqh.jpeg?q=50" />   
        <Card.Body> 
          <p className="product-name-on-card">Isolation Gown Blue</p>
          <p className="product-price-on-card">Price : $120</p>
          </Card.Body>
          </Card>
          </div>
          <div>
          <Card className="image-box card">
          <img className="center" src="https://rukminim1.flixcart.com/image/800/960/jcxoya80/watch/z/n/h/skmei-sports-multifunctional-dual-time-digital-blue-dial-men-s-original-imaffykneyfryvqh.jpeg?q=50" />   
        <Card.Body> 
          <p className="product-name-on-card">Isolation Gown Blue</p>
          <p className="product-price-on-card">Price : $120</p>
          </Card.Body>
          </Card>
          </div>
          <div>
          <Card className="image-box card">
          <img className="center" src="https://rukminim1.flixcart.com/image/800/960/jcxoya80/watch/z/n/h/skmei-sports-multifunctional-dual-time-digital-blue-dial-men-s-original-imaffykneyfryvqh.jpeg?q=50" />   
        <Card.Body> 
          <p className="product-name-on-card">Isolation Gown Blue</p>
          <p className="product-price-on-card">Price : $120</p>
          </Card.Body>
          </Card>
          </div>
        </Slider>

               </Row>


                    </Container>

               </Fragment>
          )
     }
}

export default NewArrival