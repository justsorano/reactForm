import React,{useState} from 'react'
import PropsTypes from  'prop-types'
import ClearBase from './ClearBase'


function Form({Adder,Cleaner}){
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
   <div className="Form__container">
      <form onSubmit={sumbitHandler} className='Form__content'>
      <div className='form__main'>
      <label className='Form__label'>User Name:</label>
      <input className='Form__input' value={name} onChange={event => Name(event)} required ></input>
      </div>
      <div className='form__container'>
      <label className='Form__label'>User Age:</label>
      <input className='Form__input' type="number" value={age} onChange={ event => Age(event)} required></input>
      </div>
      <div className='Form__btns'>
      <button className=' Form__btn btn' type="submit">Submit</button>

      </div>
   </form>
   <ClearBase Cleaner={Cleaner}/>
   </div>
)
}

Form.propTypes = {
   Adder: PropsTypes.func.isRequired,
   Cleaner: PropsTypes.func.isRequired,
}
export default Form