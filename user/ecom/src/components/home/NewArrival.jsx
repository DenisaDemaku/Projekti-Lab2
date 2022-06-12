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
          <div className="section-title text-center mb-55"><h2>New Arrival &nbsp;

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
          <img className="center" src="https://www.pocketnurse.com/media/catalog/product/cache/732bb65516f08b6978c23ab82b950117/0/5/05-76-0242-17in.jpg" />   
          <Card.Body> 
          <p className="product-name-on-card">DynaRide Transport Wheelchair </p>
          <p className="product-price-on-card">Price : 232€</p>
               
          </Card.Body>
          </Card>
          </div>
          <div>
          <Card className="image-box card">
          <img className="center" src="https://www.pocketnurse.com/media/catalog/product/cache/732bb65516f08b6978c23ab82b950117/1/2/12-81-3609_1.jpg" />   
          <Card.Body> 
          <p className="product-name-on-card">Airway Management Trainer with Stand, Pediatric </p>
          <p className="product-price-on-card">Price : 473€</p>
               
          </Card.Body>
          </Card>
          </div>
          <div>
          <Card className="image-box card">
          <img className="center" src="https://www.pocketnurse.com/media/catalog/product/cache/732bb65516f08b6978c23ab82b950117/1/1/11-81-3961.jpg" />   
          <Card.Body> 
          <p className="product-name-on-card">Arterial Puncture Training Arm Model, BT CSPA </p>
          <p className="product-price-on-card">Price : 72.50€</p>
               
          </Card.Body>
          </Card>
          </div>
          <div>
          <Card className="image-box card">
          <img className="center" src="https://www.pocketnurse.com/media/catalog/product/cache/732bb65516f08b6978c23ab82b950117/0/4/04-71-2519_1.jpg" />   
          <Card.Body> 
          <p className="product-name-on-card">Patient Service Console </p>
          <p className="product-price-on-card">Price : 370€</p>
               
          </Card.Body>
          </Card>
          </div>
          <div>
          <Card className="image-box card">
          <img className="center" src="https://www.pocketnurse.com/media/catalog/product/cache/732bb65516f08b6978c23ab82b950117/0/8/08-50-1320.jpg" />   
          <Card.Body> 
          <p className="product-name-on-card">Clinton Mobile Instrument Stand 5 Legs </p>
          <p className="product-price-on-card">Price : 172€</p>
               
          </Card.Body>
          </Card>
          </div>
          <div>
          <Card className="image-box card">
          <img className="center" src="https://www.pocketnurse.com/media/catalog/product/cache/732bb65516f08b6978c23ab82b950117/0/8/08-56-4409_1.jpg" />   
          <Card.Body> 
          <p className="product-name-on-card">Baumgartner Needle Holder 5" Straight</p>
          <p className="product-price-on-card">Price : 7.20€</p>
               
          </Card.Body>
          </Card>
          </div>
          <div>
          <Card className="image-box card">
          <img className="center" src="https://www.pocketnurse.com/media/catalog/product/cache/732bb65516f08b6978c23ab82b950117/0/9/09-31-9976_1.jpg" />   
          <Card.Body> 
          <p className="product-name-on-card">Understanding Alzheimer's Chart</p>
          <p className="product-price-on-card">Price : 20€</p>
               
          </Card.Body>
          </Card>
          </div>
          <div>
          <Card className="image-box card">
          <img className="center" src="https://www.pocketnurse.com/media/catalog/product/cache/732bb65516f08b6978c23ab82b950117/0/9/09-31-9766_2.jpg" />   
          <Card.Body> 
          <p className="product-name-on-card">Respiratory System Chart </p>
          <p className="product-price-on-card">Price : 27€</p>
               
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
