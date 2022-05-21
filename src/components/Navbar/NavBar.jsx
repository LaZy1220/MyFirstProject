import s from './Navbar.module.css'
const NavBar = () => {
  return (
    <nav className={s.nav}>
      <ul>
        <li><a href="profile">Profile</a></li>
        <li><a href="dialogs">Message</a></li>
        <li><a href="news">News</a></li>
        <li><a href="music">Music</a></li>
        <p><a href="settings">Settings</a></p>
      </ul>
    </nav>
  )
}
export default NavBar