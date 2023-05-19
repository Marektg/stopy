import React from 'react'
import stopy from './stopy'

function NowyStop() {
  return (
      <div>
          <h1>Wybierz stop 
              {stopy.map(stop => (
              <button>{stop.symbol }</button>
         ))}</h1>
          
      </div>
  )
}

export default NowyStop