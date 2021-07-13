import React from 'react'
import Item from './Item'


function Base({people}){

   
   return (
      <div className='DataBase__content'>
         {people.map((person,idx) =>{
            return <Item className='DataBase__item item' person={person} index={idx} key={idx}/>
         })}
      </div>
   )
}
export default Base