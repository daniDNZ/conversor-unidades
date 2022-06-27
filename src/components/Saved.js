import SavedItem from './SavedItem'

const Saved = () => {
  return (
    <>
      <div className='saved'>
        <h2 className='saved__title'>saved</h2>
        <div className='saved__container'>
          <SavedItem />
          <SavedItem />
          <SavedItem />
        </div>
      </div>
    </>
  )
}

export default Saved
