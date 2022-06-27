import { ReactComponent as Arrows } from '../svg/arrows.svg'

const Header = () => {
  return (
    <>
      <header className='header'>
        <div className='header__container'>
          <div className='icon-container'>
            <Arrows />
          </div>
          <a href={process.env.PUBLIC_URL} className='header__a'>unit converter</a>
        </div>
      </header>
    </>
  )
}

export default Header
