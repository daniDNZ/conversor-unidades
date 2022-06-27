import { ReactComponent as ArrowsLight } from '../svg/arrowsLight.svg'
import { ReactComponent as Fav } from '../svg/fav.svg'

const ConvertCard = () => {
  return (
    <>
      <div className='card'>
        <h1 className='card__title'>convert</h1>
        <div className='card__main'>
          <div className='card__flex-item'>
            <select name='selectUnit' id='select-unit' className='card__input'>
              <option value='km-miles'>km → miles</option>
              <option value='miles-km'>miles → km</option>
              <option value='meters-feet'> m → feet</option>
              <option value='feet-meters'> feet → m</option>
              <option value='cm-inch'> cm → inch</option>
              <option value='inch-cm'> inch → cm</option>
            </select>
            <button className='card__icon'>
              <ArrowsLight />
            </button>
          </div>
          <div className='card__flex-item'>
            <input type='number' className='card__input card__input--num' />
            <span className='card__unit'>km</span>
          </div>
        </div>
        <div className='card__result result'>
          <div className='card__flex-item result__flex-item'>
            <button className='card__icon'>
              <Fav />
            </button>
            <span>62.34</span>
          </div>
          <span>miles</span>
        </div>
      </div>
    </>
  )
}

export default ConvertCard
