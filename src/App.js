import React,{useState} from 'react'
import Form from './Form'
import Base from './Base'

function App() {
  (function (){
    return localStorage.getItem("people") ?
    console.log('есть') :
    localStorage.setItem('people',JSON.stringify([]));
})()


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
  function ClearBase(){
    localStorage.setItem('people',JSON.stringify([]))
  }
  return (
    <div className='container' >
      <div className='wrapper'>
        <header className='header'>
        <h1>React form</h1>
        </header>
        <section className='Form'>
        <Form Adder={addPeople} Cleaner={ClearBase}/>
        </section>
      <section className='DataBase'>
      <h2 className="DataBase__header">Data Base</h2>
      <Base people={local}/>
      </section>
      </div>
    </div>

  )
}

export default App;
