import React, { Component, Fragment } from 'react'
import {Container,Row,Col,Card} from 'react-bootstrap'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

class NewArrival extends Component {

  constructor(props){
    super(props);
    this.next=this.next.bind(this);
    this.previous=this.previous.bind(this)
}
next(){
    this.slider.slickNext();
}
previous(){
    this.slider.slickPrev();
}



     render() {
          var settings = {
               dots: false,
               infinite: true,
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
          <div className="section-title text-center mb-55"><h2>NEW ARRIVAL &nbsp;

          <a className="btn btn-sm ml-2 site-btn" onClick={this.previous} ><i className="fa fa-angle-left"></i></a>
&nbsp;
<a className="btn btn-sm ml-2 site-btn" onClick={this.next} ><i className="fa fa-angle-right"></i></a>

          </h2>
          <p>Some Of Our Exclusive Collection, You May Like</p>
          </div>

               <Row>

               <Slider ref={c=>(this.slider=c)} {...settings}>
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
          <img className="center" src="https://www.pocketnurse.com/media/catalog/product/cache/46c67a7e014cd6344be7c367252caa28/0/6/06-93-2911.jpg" />   
          <Card.Body> 
          <p className="product-name-on-card">Fluticason/Salmeterl Disc Inhaler 100/50</p>
          <p className="product-price-on-card">Price : $40</p>
          </Card.Body>
          </Card>
          </div>
          <div>
          <Card className="image-box card">
          <img className="center" src="https://www.pocketnurse.com/media/catalog/product/cache/46c67a7e014cd6344be7c367252caa28/0/2/02-70-5212.jpg" />   
        <Card.Body> 
          <p className="product-name-on-card">Portable Standard Ophthalmoscope</p>
          <p className="product-price-on-card">Price : $152</p>
          </Card.Body>
          </Card>
          </div>
          <div>
          <Card className="image-box card">
          <img className="center" src="https://www.pocketnurse.com/media/catalog/product/cache/46c67a7e014cd6344be7c367252caa28/0/7/07-71-0800_1.jpg" />   
        <Card.Body> 
          <p className="product-name-on-card">Oxygen Concentrator 5L</p>
          <p className="product-price-on-card">Price : $1200</p>
          </Card.Body>
          </Card>
          </div>
          <div>
          <Card className="image-box card">
          <img className="center" src="https://www.pocketnurse.com/media/catalog/product/cache/46c67a7e014cd6344be7c367252caa28/0/2/02-24-0840.jpg" />   
        <Card.Body> 
          <p className="product-name-on-card">Vital Signs Patient Monitor with Stand</p>
          <p className="product-price-on-card">Price : $2830</p>
          </Card.Body>
          </Card>
          </div>
          <div>
          <Card className="image-box card">
          <img className="center" src="https://www.pocketnurse.com/media/catalog/product/cache/46c67a7e014cd6344be7c367252caa28/0/2/02-24-2640_1.jpg" />   
        <Card.Body> 
          <p className="product-name-on-card">Probe Covers for tymPRO+ Thermometer</p>
          <p className="product-price-on-card">Price : $300</p>
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