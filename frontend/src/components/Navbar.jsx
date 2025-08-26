import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="header">
      <div className="left-links">
        <Link to="/">Elijah Reed</Link>
      </div>
      <nav className="right-links">
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};