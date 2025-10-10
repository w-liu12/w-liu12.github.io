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
        <a href="https://www.figma.com/proto/AurGrmZy8NN7bz7RCkyfh1/Kai-Wen-Liu-Resume?page-id=124%3A2&node-id=539-126&viewport=747%2C264%2C0.17&t=P7RrnQEgqVrxkKF9-1&scaling=scale-down&content-scaling=fixed" target="_blank">
          Resume
        </a>
      </nav>
    </>
  );
}

export default Header;
