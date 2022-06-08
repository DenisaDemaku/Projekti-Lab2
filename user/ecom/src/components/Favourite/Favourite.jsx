import React, { Component, Fragment } from 'react'
import {Container,Row,Col,Card,Button} from 'react-bootstrap'

class Favourite extends Component {
     render() {
          return (
               <Fragment>
                   <Container className="text-center" fluid={true}>
          <div className="section-title text-center mb-55"><h2> MY FAVOURITE ITEMS</h2>
          <p>Some Of Our Exclusive Collection, You May Like</p>
          </div>

     <Row>
          <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
          <Card className="image-box card w-100">
          <img className="center" src="https://www.pocketnurse.com/media/catalog/product/cache/46c67a7e014cd6344be7c367252caa28/0/2/02-24-1835.jpg" />   
          <Card.Body> 
          <p className="product-name-on-card">TymPRO+ Tympanic Thermometer</p>
          <p className="product-price-on-card">Price : 42.99</p>
          
            <Button className="btn btn-sm"> <i className="fa fa-trash-alt"></i> Remove </Button>   
          </Card.Body>
          </Card>          
          </Col>


          <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
          <Card className="image-box card w-100">
          <img className="center" src="https://www.pocketnurse.com/media/catalog/product/cache/46c67a7e014cd6344be7c367252caa28/0/6/06-82-5155.jpg" />   
          <Card.Body> 
          <p className="product-name-on-card">Needle 22G x 1" Regular Bevel Sterile</p>
          <p className="product-price-on-card">Price : 1.20€</p>
          <Button className="btn btn-sm"> <i className="fa fa-trash-alt"></i> Remove </Button> 
               
          </Card.Body>
          </Card>          
          </Col>



          <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
          <Card className="image-box card w-100">
          <img className="center" src="https://www.pocketnurse.com/media/catalog/product/cache/732bb65516f08b6978c23ab82b950117/1/1/11-81-3890.jpg" />   
          <Card.Body> 
          <p className="product-name-on-card">Life/form® Complete Child CriSis Mankin with IV Arm </p>
          <p className="product-price-on-card">Price : 180€</p>
          <Button className="btn btn-sm"> <i className="fa fa-trash-alt"></i> Remove </Button> 
               
          </Card.Body>
          </Card>          
          </Col>



          <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
          <Card className="image-box card w-100">
          <img className="center" src="https://www.pocketnurse.com/media/catalog/product/cache/732bb65516f08b6978c23ab82b950117/0/1/01-37-3000.jpg" />   
          <Card.Body> 
          <p className="product-name-on-card">Pocket Nurse® Pre-Filled IV Therapy Tote </p>
          <p className="product-price-on-card">Price : 40€</p>
               
          <Button className="btn btn-sm"> <i className="fa fa-trash-alt"></i> Remove </Button> 
               
          </Card.Body>
          </Card>          
          </Col>

 
 

     </Row>
                   </Container>
              </Fragment>
          )
     }
}

export default Favourite
