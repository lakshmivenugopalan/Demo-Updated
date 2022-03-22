
import React, { Component } from 'react';

import CreatableSelect from 'react-select/creatable';
import './s2.css'

function Search1() {
return(

<div className="search-main">
    <div className="search-item">
    <div><img src='Images/search2.png'className="s2"/></div>
<div>
    <CreatableSelect
        isClearable
        isMulti
        placeholder="Type something and press enter..."
      />
</div>

</div>
<div className="search-items">
<div className="place">
<div><img src='Images/arrow1.png'className='arrow'/></div>
<div className='text'>USA ,Florida</div> 

</div>

<div className="place">
<div><img src='Images/suitcase.png'className='suit'/></div>
<div className='text'>Full Time</div>
</div>

<div className="place">
<div><img src='Images/t1.png'className='suit'/></div><div className='text'>6500-8500 $</div> 

</div>
</div>
<div className="end">
<div className="searchButton">
 <div className='job'>Find Job</div> 
    </div></div>

</div>

)

}
export default Search1