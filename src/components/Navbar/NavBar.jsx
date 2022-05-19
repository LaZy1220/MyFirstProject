import s from './Navbar.module.css'
const NavBar = () => {
  return (
    <nav className={s.nav}>
      <ul>
        <li><a href="#s">Profile</a></li>
        <li><a href="#s">Message</a></li>
        <li><a href="#s">News</a></li>
        <li><a href="#s">Music</a></li>
        <p><a href="#s">Setting</a></p>
      </ul>
    </nav>
  )
}
export default NavBar