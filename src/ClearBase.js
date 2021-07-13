import React from 'react'
import PropTypes from 'prop-types'


function ClearBase({Cleaner}){
   return(
      <div className="DataBase__clear clear" >
         <form className='clear__content'>
            <button className='btn' type='submit' onClick={() => Cleaner()}>Clear Base</button>
         </form>
      </div>
   )
}
ClearBase.propTypes = {
   Cleaner: PropTypes.func.isRequired
}
export default ClearBase