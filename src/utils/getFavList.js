// Get favList from localStorage if exists
const getFavList = () => {
  let favList
  window.localStorage.getItem('favList') !== null
    ? favList = JSON.parse(window.localStorage.getItem('favList'))
    : favList = []

  return favList
}

export default getFavList
