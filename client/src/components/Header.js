import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header>
      <h1>Header</h1>
      <nav>
        <ul className='menu'>
          <li className='menu-item'><Link to="/">Home</Link></li>
          <li className='menu-item'><Link to="/about">About</Link></li>
          <li className='menu-item'><Link to="/skills">Skills</Link></li>
          <li className='menu-item'><Link to="/blogs">Blogs</Link></li>
          <li className='menu-item'><Link to="/projects">Projects</Link></li>
          <li className='menu-item'><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
