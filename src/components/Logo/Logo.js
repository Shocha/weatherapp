import React from 'react';
import Tilt from 'react-tilt';
import iconfinder_Cloudy_3553106 from './iconfinder_Cloudy_3553106.png';



const Logo=()=>{
	return(
	<div>
	<Tilt className="Tilt" options={{ max : 25 }} style={{ height: 250, width: 250 }} >
 		<div className="Tilt-inner"> <img alt='logo' src={iconfinder_Cloudy_3553106}/></div>
	</Tilt>
	</div>
	);
}

export default Logo;
