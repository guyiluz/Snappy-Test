/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Shipping.css';
import { Form,Button,Message } from 'semantic-ui-react'

class Shipping extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        shipping:{
      firstName:"",
      lastName:"", 
      city:"", 
      state:"",
      floor:"", 
      zipCode:"", 
      email:"", 
      specialNotes:"", 
      phoneNumber:"", 
      apartment:"",  
      address1:"",
      address2:""

        },
      valid:{
        error:false,
        errorMsg:"",
        success:false
      
      }
        
        };
      
    }
  

     handleSubmit = (event)=> {
      event.preventDefault();
      let {shipping,valid}=this.state
      let{firstName,lastName,email,phoneNumber,conutry,
        state,city,address1,address2,
        floor,zipCode,apartment,specialNotes}=this.state.shipping    

 

            // Using Yaddress 
            let Yaddress={}
let line1 =[]
let line2 =[]
line1[0]=shipping.address1
line1[1]=shipping.address2
line2[0]=shipping.city
line2[1]=shipping.state
line2[2]=shipping.zipCode

      //added  proxyUrl for cross-origin requests
const proxyUrl = 'https://guyi-coreapi.herokuapp.com/'
const url =`https://www.yaddress.net/api/Address?AddressLine1=${line1}&AddressLine2=${line2}`
  
fetch(proxyUrl + url)
      .then((resp) => resp.json()) 
      .then((data)=> {
     
    if(!data.ErrorCode==0){
      this.setState({ valid: { ...this.state.valid, error:true,
        errorMsg:data.ErrorMessage  } });
        return false
    }else{
      console.log(shipping)
      // making the shipping data obj and sending it to the server
      const shippingData={
        firstName:firstName,
        lastName:lastName,
        state:data.State,
        adress:data.AddressLine1,
        city:data.City,
        zipCode:data.Zip,
        apartment:apartment,
        floor:floor,
        email:email,
        phoneNumber:phoneNumber,
        specialNotes:specialNotes
      }
 
      console.log(shippingData)
       fetch("https://snappyser.herokuapp.com/api",{
         method: 'post',
         headers: {
             'Accept': 'application/json',
             'Content-Type': 'application/json'
         }, 
         body:JSON.stringify(shippingData)
 
     }).then(()=>{
this.setState({
  valid:{
    success:true
  }
})


     })
       
    }
 
  
  }) 
  
    
  }



    // handling onchange event 
    change = e=> {
      this.setState({ shipping: { ...this.state.shipping,  [e.target.name]: e.target.value  } });
      
    }
  
      
      render() {

    console.log(this.props.firstNamErr)
      
     

        let{firstName,lastName,email,phoneNumber,conutry,
          state,city,address1,address2,
          floor,zipCode,apartment,specialNotes}=this.state
        
   
// redring a msg if address is not valid
         let errMsg=""
        if(this.state.valid.error){    
          errMsg= <Message 
          header='please fix the following'
          content= {this.state.valid.errorMsg}
        />
        }

        let secMsg=""
        if(this.state.valid.success){    
          secMsg= <Message positive>
          <Message.Header>thank you for using Snappy</Message.Header>
          <p> Your gift is on its way:)</p>
        </Message>
        }
        
          return (
            <div className={s.root}>
            <div className={s.container}>
    <div className={s.form}>
    <Form onSubmit={this.handleSubmit} className={s.flexForm} >
          <Form.Group widths='equal' >
            <Form.Input value={firstName}  label='First name*' placeholder='First name'  name="firstName" onChange={e=>this.change(e)} error={this.props.firstNamErr}/>
            <Form.Input value={lastName} label='Last name*' placeholder='Last name' name="lastName"  onChange={e=>this.change(e)} error={this.props.lastNameErr}/>
            <Form.Input value={email}  label='Email*' placeholder='Email' type='email' name="email"  onChange={e=>this.change(e)}  error={this.props.emailErr} />
      <Form.Input value={phoneNumber}  label='Phone number*' type='number' placeholder='Phone number' name="phoneNumber" onChange={e=>this.change(e)}
    
        
        
        
         />
            </Form.Group>
            <h4>Address</h4>
            <Form.Group widths='equal' >
          
          <Form.Input  value={state} label='State'  placeholder='State' name="state"  onChange={e=>this.change(e)}/>
          <Form.Input  value={city} label='City*'  placeholder='City' name="city"  onChange={e=>this.change(e)}/>
          <Form.Input  value={address1} label='Address Line 1*'  placeholder='Street address, P.O. box, company name, c/o' name="address1"  onChange={e=>this.change(e)} />
          <Form.Input  value={address2} label='Address Line 2*'  placeholder='Building, Suite , Unit' name="address2"  onChange={e=>this.change(e)}/>
          </Form.Group>
          <Form.Group >
            <Form.Input value={floor}  label='Floor' type='number' placeholder='floor' name="floor" onChange={e=>this.change(e)} />
            <Form.Input value={zipCode}  label='Zip code' type='number' placeholder='zip code' name="zipCode" onChange={e=>this.change(e)} />
            <Form.Input value={apartment}  label='Aartment'  placeholder='apartment' name="apartment" onChange={e=>this.change(e)} />
            </Form.Group>

      <Form.Group widths='equal' >
            <Form.Field label='Special notes' value={specialNotes} control='textarea' rows='2'  name="specialNotes" onChange={e=>this.change(e)}/>
          </Form.Group>
          
          <Button type='submit'>Submit</Button>
          {errMsg}
          {secMsg}
          </Form>
        
  
  
    
          </div>
  
            </div>  
            </div>  
            
          )
      }
  }
  

  

export default withStyles(s)(Shipping);
