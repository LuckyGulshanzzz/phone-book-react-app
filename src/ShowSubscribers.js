import React, { Component } from 'react';
import Header from './Header';
import './ShowSubscribers.css';
import {Link} from 'react-router-dom';
class ShowSubscribers extends Component{
render(){
return(
<div>
  <Header heading="Phone Book"/>
    <div className="component-body-container">
      <Link to="/add"><button className="custom-btn add-btn">Add</button></Link>
      <div className="grid-container heading-container">
        <span className="grid-item name-heading">Name</span>
        <span className="grid-item phone-heading">Phone</span>
      </div>
      {
      this.props.subscribersList.map(sub => {
      return <div className= "grid-container" key ={sub.id}>
        <span className="grid-item">{sub.name}</span>
        <span className="grid-item">{sub.phone}</span>
        <span className="grid-container">
          <button className="custom-btn delete-btn">Delete</button>
        </span></div>
        })
        }
      </div>
    </div>
    );
    }
    }
    export default ShowSubscribers;