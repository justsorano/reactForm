import React from 'react'



function Item({person,index}){



   return(
      <div className="item__content" >
      <div  className="item__element">#.{index+1}</div>
      <div  className="item__element">Person name: {person.name} </div>
      <div  className="item__element">Person Age: {person.age}</div>
      </div>
   )
}

export default Item