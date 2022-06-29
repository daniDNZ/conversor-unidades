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
    // Unit span
    const unitSpanDOM = document.querySelector('#selectedUnit')

    // Result Unit
    const unitResultDOM = document.querySelector('#resultUnit')

    // Set input unit
    unitSpanDOM.textContent = unit

    switch (unit) {
      case 'km':
        resultUnit = 'miles'
        result = inputValue * 0.62137
        break
      case 'miles':
        resultUnit = 'km'
        result = inputValue / 0.62137
        break
      case 'm':
        resultUnit = 'feet'
        result = inputValue * 3.28
        break
      case 'feet':
        resultUnit = 'm'
        result = inputValue / 3.28
        break
      case 'cm':
        resultUnit = 'inch'
        result = inputValue / 2.54
        break
      case 'inch':
        resultUnit = 'cm'
        result = inputValue * 2.54
        break

      default:
        break
    }

    unitResultDOM.textContent = resultUnit

    // Result rounded to 2
    result = Math.round((result + Number.EPSILON) * 100) / 100
    resultDOM.textContent = result
  }

  // Input onChange event
  const handleSelect = e => {
    // Unit selected
    unit = e.target.value
    calcUnit()
  }

  // Input onChange event
  const handleInput = e => {
    // User input value
    inputValue = e.target.value
    calcUnit()
  }

  // Clean form
  const cleanForm = () => {
    const inputDOM = document.querySelector('#userInput')
    inputDOM.value = ''
    inputValue = 0
    calcUnit()
  }

  // Fav button onClick event
  const handleFav = e => {
    const oldList = getFavList()
    const newItem = { inputValue, unit, result, resultUnit }

    // Limit of favs
    if (oldList.length < 8) {
      console.log(result, inputValue)
      // Add the new fav
      const newList = [...oldList, newItem]

      // Clean form and set values to 0
      cleanForm()

      // Save variables
      setVarState({ unit, resultUnit, inputValue, result })

      // Set list state
      setFavList(newList)

      // Store the list
      window.localStorage.setItem('favList', JSON.stringify(newList))
    } else {
      // Save variables
      setVarState({ unit, resultUnit, inputValue, result })

      // Display the alert of 'max 8 favs'
      const cardAlertDOM = document.querySelector('.card__alert')
      cardAlertDOM.classList.add('card__alert--visible')

      // Hide the alert after 2s
      setTimeout(function () {
        cardAlertDOM.classList.remove('card__alert--visible')
      }, 2000)
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
            <span className='card__alert'>Máx. 8 favoritos</span>
            <span id='resultNum' className='result__num'>0.0</span>
          </div>
          <span id='resultUnit' className='result__unit'>miles</span>
        </div>
      </div>
    </>
  )
}

export default ConvertCard
