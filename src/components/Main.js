import { useState } from 'react'
import getFavList from '../utils/getFavList'
import ConvertCard from './ConvertCard'
import Saved from './Saved'

const Main = () => {
  const [favList, setFavList] = useState(getFavList())

  return (
    <>
      <main className='main'>
        <ConvertCard favList={favList} setFavList={setFavList} />
        <Saved favList={favList} setFavList={setFavList} />
      </main>
    </>
  )
}

export default Main
