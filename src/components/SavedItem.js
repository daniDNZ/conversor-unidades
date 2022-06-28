import { ReactComponent as Close } from '../svg/close.svg'

const SavedItem = ({ inputValue, unit, result, resultUnit, id }) => {
  return (
    <>
      <div className='saved-item'>
        <span className='saved-item__content'>
          {`${inputValue} ${unit} → ${result} ${resultUnit}`}
        </span>
        <button className='saved-item__close' data-index={id}>
          <Close />
        </button>
      </div>
    </>
  )
}

export default SavedItem
