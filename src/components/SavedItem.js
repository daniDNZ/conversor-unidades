import { ReactComponent as Close } from '../svg/close.svg'

const SavedItem = () => {
  return (
    <>
      <div className='saved-item'>
        <span className='saved-item__content'>
          100 miles → 160km
        </span>
        <button className='saved-item__close'>
          <Close />
        </button>
      </div>
    </>
  )
}

export default SavedItem
