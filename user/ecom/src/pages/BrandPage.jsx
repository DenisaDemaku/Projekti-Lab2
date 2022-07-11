import React, { Component, Fragment } from 'react'
import axios from 'axios';
import { Card } from 'react-bootstrap';

const BrandCard = (props) => {
    return <div className="d-flex">
        {props.brands.map((brand) => (
             <Card className="card-small">
             <Card.Img variant="top" style={{width: '120px', height: '120px'}} src={brand.imageCDN} />
             <Card.Body>
               <Card.Title>{brand.title}</Card.Title>
               <Card.Text>
                {brand.description}
               </Card.Text>
             </Card.Body>
           </Card>
        ))}
    </div>
}

class BrandPage extends Component {
    constructor({match}){
        super(); 
        this.state={
            BrandData:[],
            isLoading:"",
            mainDiv: "d-none",
        }
   }

   componentDidMount(){
        window.scroll(0,0)

        axios.get('http://localhost:5005/brands').then(response =>{
             this.setState({BrandData:response.data,isLoading:"d-none",
             mainDiv:""});         
        }).catch(error=>{

        });
   }

     render() {
          return (
              <Fragment> 
                <BrandCard brands={this.state.BrandData} />
             </Fragment>
          )
     }
}

export default BrandPage
