import logoImg from "./logo.png"
import "./logo.scss"

const logo = () => {
  return (
    <a className="logo" href='/'>
      <img className="logoIcon" src={logoImg} alt='logo kanechi sneackers' width={40} height={40}/>
      <span className="logoTextLarge">kanechi sneackers</span>
      <span className="logoTextLight">Shop the best sneakers</span>
    </a>
  )
}

export default logo