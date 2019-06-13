import React from 'react';



const Search=({onInputChange})=>{
	return(
	<div className="center">
	
		<input className="f4 pa2 w-20 ma3" type="text" onChange={onInputChange}/>
		<input className="f4 pa2 w-20 ma3" type="text" onChange={onInputChange}/>
		<button className="f5 grow no-underline br-pill ph3 pv2 mb2 dib red bg-grey">Submit</button>
	</div>
		
	);
}

export default Search;
