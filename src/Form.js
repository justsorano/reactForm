import React,{useState} from 'react'
import PropsTypes from  'prop-types'



function Form({Adder}){
   const styles = {
   container:{
         display:"flex",
         margin:'25px 25px',
         flexDirection:'row',
         justifyContent:'center',
      }
}
const [name,setName] = useState('')
const [age,setAge] = useState('')

function Name(event){
   setName(
      event.target.value
   )
}
function Age(event){
   setAge(
      event.target.value
   )
}
function sumbitHandler(event){
      event.preventDefault();
   Adder(name.trim(),age.trim())

}
return (
   <form onSubmit={sumbitHandler} style={styles.container}>
      <label>User Name
      <input value={name} onChange={event => Name(event)} required ></input>
      </label>
      <label>User Age 
      <input type="number" value={age} onChange={ event => Age(event)} required></input>
      </label>
      <button type="submit">Submit</button>
   </form>
)
}

Form.propTypes = {
   Adder: PropsTypes.func.isRequired,
   
}
export default Form