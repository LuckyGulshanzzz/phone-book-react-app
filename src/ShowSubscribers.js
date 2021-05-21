import React, { Component } from 'react';
import Header from './Header';
import './ShowSubscribers.css';
class ShowSubscribers extends Component{
constructor(){
super();
this.state = {
subscribersListToShow: []
}
}
componentDidMount(){
let newSubscriber = {
id:1,
name: "Gulshan",
phone: "9696996665"
}
let subscribersList = this.state.subscribersListToShow;
subscribersList.push(newSubscriber);
this.setState({subscribersListToShow:subscribersList});
}
render(){
return(
<div>
  <Header heading="Phone Book"/>
    <div className="component-body-container">
      <button className="custom-btn add-btn">Add</button>
      <div className="grid-container heading-container">
        <span className="grid-item name-heading">Name</span>
        <span className="grid-item phone-heading">Phone</span>
      </div>
      {
      this.state.subscribersListToShow.map(sub => {
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