import React, { Component, Fragment } from 'react'
import { Container,Row,Col, Form,Button } from 'react-bootstrap'
import validation from '../../validation/validation';
import axios from 'axios' 
import AppURL from '../../api/AppURL';

export class Contact extends Component {

     constructor(){
          super();
          this.state={
               name:"",
               email:"",
               message:""
          }
     }

          nameOnChange =(event)=>{
               let name = event.target.value;
               // alert(name);
               this.setState({name:name})
          }

          emailOnChange =(event)=>{
               let email = event.target.value;
               // alert(email);
               this.setState({email:email})
          }

          messageOnChange =(event)=>{
               let message = event.target.value;
               // alert(message);
               this.setState({message:message})
          }

          onFormSubmit =(event)=>{
             
               let name = this.state.name;
               let email = this.state.email;
               let message = this.state.message;

               if(message.length==0){
                    alert("Please write your message");
               }
               else if(name.length==0){
                    alert("Please write down our name");
               }
               else if(email.length==0){
                    alert("Please write down our Email");
               }
               else if(!(validation.NameRegx).test(name)){
                    alert("Invaid Name");
               }
               else{

     let MyFormData = new FormData();
     MyFormData.append("name",name)
     MyFormData.append("email",email)
     MyFormData.append("message",message)

     axios.post(AppURL.PostContact,MyFormData).then(function (response) {
               if(response.status==200 && response.data==1){
                    alert("Message Send Successfully");
               }
               else{
               alert("error"); 
               }
          })
          .catch(function (error) {
          alert(error);
          });
               }

               event.preventDefault();

          }


     render() {
          return (
               <Fragment>
               <Container>
                    <Row className="p-2">
            <Col className="shadow-sm bg-white mt-2" md={12} lg={12} sm={12} xs={12}>
     
                    <Row className="text-center">
             <Col className="d-flex justify-content-center" md={6} lg={6} sm={12} xs={12}>
             <Form onSubmit={this.onFormSubmit} className="onboardForm">
          <h4 className="section-title-login">CONTACT WITH US </h4>
          <h6 className="section-sub-title">Please Contact With Us </h6>
        
          <input onChange={this.nameOnChange} className="form-control m-2" type="text" placeholder="Enter Your Name" />

           <input onChange={this.emailOnChange} className="form-control m-2" type="email" placeholder="Enter Email" />

           <Form.Control onChange={this.messageOnChange} className="form-control m-2" as="textarea" rows={3} placeholder="Message" />
          
           <Button type="submit" className="btn btn-block m-2 site-btn-login"> Send </Button>
    
     </Form>
     
     
                         </Col>
     
            <Col className="p-0 Desktop m-0" md={6} lg={6} sm={6} xs={6}>
                 <br></br><br></br>
           <p className="section-title-contact">
            Rr.Fadil Hoxha L.Kalabria Obj.EXDC, Prishtinë
Email: medicalsupplies@gmail.com
           </p>

           <iframe src="https://www.google.com/maps/d/u/0/viewer?mid=1_1pH-6o8u3UeIzGtvBZZkPDjnu3NqoIX&ll=42.54827900995879%2C21.095989500000005&z=9" width="550" height="450" styles="border:0;" allowfullscreen="" loading="lazy"></iframe>

                         </Col>
                    </Row>
     
     
     
     
     
     
                         </Col>
                    </Row>
               </Container>
          </Fragment>
          )
     }
}

export default Contact
