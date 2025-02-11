import "../css/Header.css";
import wendyPurple from "../img/wendy-purple.svg";
import { HashLink } from 'react-router-hash-link';


function Header() {

  return (
    <>
      <nav>
        <a href="/">Home</a>
        <HashLink to="/about">About</HashLink>
        <a href="/">
          <img className="header-logo" src={wendyPurple} />
        </a>
        <HashLink smooth to="/home#projects">Projects</HashLink>
        <a href="https://wendy-liu-resume.tiiny.site" target="_blank">
          Resume
        </a>
      </nav>
    </>
  );
}

export default Header;
