import React from 'react'
import Item from './Item'
import PropsTypes from 'prop-types'

function Base({people}){

   
   return (

      <div className='DataBase__content'>
         {people.map((person,idx) =>{
            return <Item className='DataBase__item item' person={person} index={idx} key={idx}/>
         })}
      </div>
   )
}
Base.propTypes = {
   people:  PropsTypes.array.isRequired
}
export default Base