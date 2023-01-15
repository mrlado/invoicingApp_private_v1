import React, { useEffect, useState } from 'react'
import Select from 'react-select';
import { Link } from 'react-router-dom';




const ItemDetails = (props) => {




  return (
   <>
   <td>
		<input 
        type="text" 
        className="form-control" 
        value={props.choosenProduct}/>
	</td>
   
   </>
  )
}

export default ItemDetails