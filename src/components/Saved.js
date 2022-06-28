import { useEffect } from 'react'
import SavedItem from './SavedItem'

const Saved = ({ favList, setFavList }) => {
  // Delete button click event
  const handleDelete = e => {
    // Get index stored in dataset
    const index = e.target.dataset.index
    // Get List
    const list = JSON.parse(window.localStorage.getItem('favList'))
    // Remove the item from the array
    list.splice(index, 1)
    // Store list
    window.localStorage.setItem('favList', JSON.stringify(list))
    // Update state
    setFavList(list)
  }

  useEffect(() => {
    // Get delete buttons
    const itemsList = document.querySelectorAll('.saved-item__close')

    // Listeners
    itemsList.forEach(item => {
      item.addEventListener('click', handleDelete)
    })

    return () => {
      itemsList.forEach(item => {
        item.removeEventListener('click', handleDelete)
      })
    }
  }, [favList])

  return (
    <>
      <div className='saved'>
        <h2 className='saved__title'>saved</h2>
        <div className='saved__container'>
          {
            favList.map((item, index) => {
              return <SavedItem inputValue={item.inputValue} unit={item.unit} result={item.result} resultUnit={item.resultUnit} key={index} id={index} />
            })
          }
        </div>
      </div>
    </>
  )
}

export default Saved
