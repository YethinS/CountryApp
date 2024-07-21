import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Styles from './header.module.scss'
import { useDispatch } from "react-redux";
import { countryListAsia, countryListEurope } from "../../features/countries/countryList";

function Header() {
  const dispatch = useDispatch()
  const handleAsiaRegion = () => {
    console.log('Clicked')
    dispatch(countryListAsia())
  }

  const handleEuropeRegion = () => {
    dispatch(countryListEurope())
  }
  return (
    <Navbar  bg="light" data-bs-theme="light" sticky="top">
      <Container className={Styles.header}>
        <Navbar.Brand className={Styles.navCountry}>Countries</Navbar.Brand>
        <Nav >
          <Nav.Link className={Styles.navText}>All</Nav.Link>
          <Nav.Link className={Styles.navText} onClick={handleAsiaRegion}>Asia</Nav.Link>
          <Nav.Link className={Styles.navText} onClick={handleEuropeRegion}>Europe</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
