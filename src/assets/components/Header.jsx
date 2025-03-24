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
        <a href="https://www.figma.com/proto/AurGrmZy8NN7bz7RCkyfh1/Kai-Wen-Liu-Resume?page-id=124%3A2&node-id=124-11&viewport=225%2C287%2C0.67&t=XkDDYGPf7xEwdO0M-1&scaling=min-zoom&content-scaling=fixed" target="_blank">
          Resume
        </a>
      </nav>
    </>
  );
}

export default Header;
