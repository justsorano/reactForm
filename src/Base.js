import React from 'react'
import Item from './Item'


function Base({people}){

   
   return (
      <div className='Base__content'>
         <h2>Data Base</h2>
         {people.map((person,idx) =>{
            return <Item person={person} index={idx} key={idx}/>
         })}
      </div>
   )
}
export default Base