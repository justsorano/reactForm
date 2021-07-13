import React,{useState} from 'react'
import Form from './Form'
import Base from './Base'

function App() {
  (function (){
    return localStorage.getItem("people") ?
    console.log('есть') :
    localStorage.setItem('people',JSON.stringify([]));
})()

const styles = {
  container:{
    display:"flex",
    margin:'25px 25px',
    flexDirection:'column',
    justifyContent:'center',
    textAlign:'center',
  }}

  const [people,setPeople] = useState(localStorage.getItem('people'))
  const [local,setLocal] = useState(JSON.parse(people))

  
  function addPeople(name,age){
    setLocal(
      local.push({name,age})
    )
    setLocal([
      ...local
    ])
  localStorage.setItem('people',JSON.stringify(local))
  }
  
  return (
    <div className='container' style={styles.container}>
      <h1>React form</h1>
      <Form Adder={addPeople}/>
      <Base people={local}/>

    </div>

  )
}

export default App;
