import React from 'react';
import './Header.css';
const Header = function(props){
return(
<div className="header shadow">
	{props.heading}
</div>
);
}
export default Header;



