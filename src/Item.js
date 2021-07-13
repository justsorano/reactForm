import React from 'react'



function Item({person,index}){
   const styles = {
      container:{
         display:"flex",
         margin:'25px 25px',
         flexDirection:'row',
         justifyContent:'center',
      },
      item:{
         margin:'0 25px',
         border:'5px solid black',
         padding:'10px 25px'
      }
      }
   return(
      <div className="container" style={styles.container}>
      <div style={styles.item}>#.{index+1}</div>
      <div style={styles.item}>Person name: {person.name} </div>
      <div style={styles.item}>Person Age: {person.age}</div>
      </div>
   )
}

export default Item