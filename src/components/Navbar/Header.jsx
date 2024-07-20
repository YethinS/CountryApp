import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Styles from './header.module.scss'

function Header() {
  return (
    <Navbar  bg="light" data-bs-theme="light" sticky="top">
      <Container className={Styles.header}>
        <Navbar.Brand className={Styles.navCountry}>Countries</Navbar.Brand>
        <Nav >
          <Nav.Link className={Styles.navText}>All</Nav.Link>
          <Nav.Link className={Styles.navText}>Asia</Nav.Link>
          <Nav.Link className={Styles.navText}>Europe</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
