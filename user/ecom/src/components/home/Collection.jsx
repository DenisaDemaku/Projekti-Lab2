import React, { Component, Fragment } from 'react'
import {Container,Row,Col,Card} from 'react-bootstrap'

class Collection extends Component {
     render() {
          return (
              <Fragment>
                   <Container className="text-center" fluid={true}>
          <div className="section-title text-center mb-55"><h2> PRODUCT COLLECTION</h2>
          <p>Some Of Our Exclusive Collection, You May Like</p>
          </div>

     <Row>
          <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
          <Card className="image-box card w-100">
          <img className="center w-75" src="https://www.pocketnurse.com/media/catalog/product/cache/732bb65516f08b6978c23ab82b950117/0/8/08-82-1903.jpg" />   
          <Card.Body> 
          <p className="product-name-on-card">Practice Suture Kit with Demo Sutures </p>
          <p className="product-price-on-card">Price : 70€</p>
               
          </Card.Body>
          </Card>          
          </Col>


          <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
          <Card className="image-box card w-100">
          <img className="center w-75" src="https://www.pocketnurse.com/media/catalog/product/cache/732bb65516f08b6978c23ab82b950117/0/2/02-24-413_1.jpg" />   
          <Card.Body> 
          <p className="product-name-on-card">Digital Thermometer Kit </p>
          <p className="product-price-on-card">Price : 16€</p>
               
          </Card.Body>
          </Card>          
          </Col>



          <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
          <Card className="image-box card w-100">
          <img className="center w-75" src="https://www.pocketnurse.com/media/catalog/product/cache/732bb65516f08b6978c23ab82b950117/0/2/02-20-6005_1.jpg" />   
          <Card.Body> 
          <p className="product-name-on-card">Advantage Manual Blood Pressure Kit</p>
          <p className="product-price-on-card">Price : 30€</p>
               
          </Card.Body>
          </Card>          
          </Col>



          <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
          <Card className="image-box card w-100">
          <img className="center w-75" src="https://www.pocketnurse.com/media/catalog/product/cache/732bb65516f08b6978c23ab82b950117/0/2/02-43-1300.jpg" />   
          <Card.Body> 
          <p className="product-name-on-card">ECG Placement Trainer </p>
          <p className="product-price-on-card">Price : 750€</p>
               
          </Card.Body>
          </Card>          
          </Col>


          <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
          <Card className="image-box card w-100">
          <img className="center w-75" src="https://www.pocketnurse.com/media/catalog/product/cache/732bb65516f08b6978c23ab82b950117/0/2/02-80-3400.jpg" />   
          <Card.Body> 
          <p className="product-name-on-card">3B Scientific SimScope® without WiFi </p>
          <p className="product-price-on-card">Price : 220€</p>
               
          </Card.Body>
          </Card>          
          </Col>



          <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
          <Card className="image-box card w-100">
          <img className="center w-75" src="https://www.pocketnurse.com/media/catalog/product/cache/732bb65516f08b6978c23ab82b950117/1/0/10-81-708.jpg" />   
          <Card.Body> 
          <p className="product-name-on-card">Heart Model </p>
          <p className="product-price-on-card">Price : 80€</p>
               
          </Card.Body>
          </Card>          
          </Col>



          <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
          <Card className="image-box card w-100">
          <img className="center w-75" src="https://www.pocketnurse.com/media/catalog/product/cache/732bb65516f08b6978c23ab82b950117/1/1/11-81-3616.jpg" />   
          <Card.Body> 
          <p className="product-name-on-card">Life/form® Complete Child CRiSis Manikin </p>
          <p className="product-price-on-card">Price : 174€</p>
               
          </Card.Body>
          </Card>          
          </Col>



          <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
          <Card className="image-box card w-100">
          <img className="center w-75" src="https://www.pocketnurse.com/media/catalog/product/cache/732bb65516f08b6978c23ab82b950117/0/7/07-71-0800_1.jpg" />   
          <Card.Body> 
          <p className="product-name-on-card">Oxygen Concentrator 5L</p>
          <p className="product-price-on-card">Price : 780€</p>
               
          </Card.Body>
          </Card>          
          </Col>
 

     </Row>
                   </Container>
              </Fragment>
          )
     }
}

export default Collection
