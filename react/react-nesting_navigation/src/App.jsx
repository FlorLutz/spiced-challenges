import "./App.css";
import Header from "./Components/Header";
import Nav from "./Components/Nav";
import Link from "./Components/Link";
import Logo from "./Components/Logo";
import Avatar from "./Components/Avatar";
import logo from "./assets/logo.jpg";
import avatar from "./assets/avatar.jpg";

export default function App() {
  return (
    <>
      <Header>
        <Logo href="#" logo={logo} />
        <Nav>
          <Link className="navigation__link" href="#home">
            Home
          </Link>
          <Link className="navigation__link" href="#about">
            About
          </Link>
          <Link className="navigation__link" href="#impressum">
            Impressum
          </Link>
        </Nav>
        <Avatar avatar={avatar} />
      </Header>
      <main>content goes here…</main>
    </>
  );
}
