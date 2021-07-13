import React from 'react'
import PropsTypes from 'prop-types'


function Item({person,index}){



   return(
      <div className="item__content" >
      <div  className="item__element">#.{index+1}</div>
      <div  className="item__element">Person Name: {person.name} </div>
      <div  className="item__element">Person Age: {person.age}</div>
      </div>
   )
}
Item.propTypes = {
   person: PropsTypes.object.isRequired,
   index:  PropsTypes.number.isRequired
}
export default Item