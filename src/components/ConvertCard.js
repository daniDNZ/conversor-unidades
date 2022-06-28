// import { useState } from 'react'
import { useState } from 'react'
import { ReactComponent as ArrowsLight } from '../svg/arrowsLight.svg'
import { ReactComponent as Fav } from '../svg/fav.svg'
import getFavList from '../utils/getFavList'

const ConvertCard = ({ favList, setFavList }) => {
  const [varState, setVarState] = useState({ unit: 'km', resultUnit: 'miles', inputValue: 0, result: 0 })

  let unit = varState.unit
  let resultUnit = varState.resultUnit
  let inputValue = varState.inputValue
  let result = varState.result

  // Calculate result
  const calcUnit = () => {
    const resultDOM = document.querySelector('#resultNum')

    switch (unit) {
      case 'km':
        result = inputValue * 0.62137
        break
      case 'miles':
        result = inputValue / 0.62137
        break
      case 'm':
        result = inputValue * 3.28
        break
      case 'feet':
        result = inputValue / 3.28
        break
      case 'cm':
        result = inputValue / 2.54
        break
      case 'inch':
        result = inputValue * 2.54
        break

      default:
        break
    }

    // Result rounded to 2
    result = Math.round((result + Number.EPSILON) * 100) / 100
    resultDOM.textContent = result
  }

  // Change card units
  const changeUnits = () => {
    console.log(inputValue)
    // Unit span
    const unitSpanDOM = document.querySelector('#selectedUnit')

    // Result Unit
    const unitResultDOM = document.querySelector('#resultUnit')

    // Set input unit
    unitSpanDOM.textContent = unit

    // Set result unit
    switch (unit) {
      case 'km':
        resultUnit = 'miles'
        break
      case 'miles':
        resultUnit = 'km'
        break
      case 'm':
        resultUnit = 'feet'
        break
      case 'feet':
        resultUnit = 'm'
        break
      case 'cm':
        resultUnit = 'inch'
        break
      case 'inch':
        resultUnit = 'cm'
        break
      default:
        break
    }
    unitResultDOM.textContent = resultUnit

    // Recalculate the result
    calcUnit()
  }

  // Input onChange event
  const handleSelect = e => {
    // Unit selected
    unit = e.target.value
    changeUnits()
  }

  // Input onChange event
  const handleInput = e => {
    // User input value
    inputValue = e.target.value
    calcUnit()
  }

  // Fav button onClick event
  const handleFav = e => {
    const oldList = getFavList()
    const newItem = { inputValue, unit, result, resultUnit }

    // Limit of favs
    if (oldList.length < 8) {
      // Add the new fav
      const newList = [...oldList, newItem]

      // Save variables
      setVarState({ unit, resultUnit, inputValue, result })

      // Set list state
      setFavList(newList)

      // Store the list
      window.localStorage.setItem('favList', JSON.stringify(newList))
    }
  }

  return (
    <>
      <div className='card'>
        <h1 className='card__title'>convert</h1>
        <div className='card__main'>
          <div className='card__flex-item'>
            <select name='selectUnit' id='selectUnit' className='card__input' onChange={handleSelect}>
              <option value='km'> km → miles</option>
              <option value='miles'> miles → km</option>
              <option value='m'> m → feet</option>
              <option value='feet'> feet → m</option>
              <option value='cm'> cm → inch</option>
              <option value='inch'> inch → cm</option>
            </select>
            <button className='card__icon'>
              <ArrowsLight />
            </button>
          </div>
          <div className='card__flex-item'>
            <input type='number' id='userInput' className='card__input card__input--num' placeholder='0' onChange={handleInput} />
            <span id='selectedUnit' className='card__unit'>km</span>
          </div>
        </div>
        <div className='card__result result'>
          <div className='card__flex-item result__flex-item'>
            <button className='card__icon' onClick={handleFav}>
              <Fav />
            </button>
            <span id='resultNum' className='result__num'>0.0</span>
          </div>
          <span id='resultUnit' className='result__unit'>miles</span>
        </div>
      </div>
    </>
  )
}

export default ConvertCard
