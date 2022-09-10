import { Container, Navbar, Nav } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faBagShopping } from "@fortawesome/free-solid-svg-icons"


export default function NavbarList() {
  return (
    <Navbar variant="dark">
      <Container>
        <Navbar.Brand>AnemalSoul</Navbar.Brand>

        <Nav>
          <Nav.Link>Home</Nav.Link>
          <Nav.Link>Our team</Nav.Link>
          <Nav.Link>About</Nav.Link>
          <Nav.Link>Contact</Nav.Link>
          <Nav.Link>Shop</Nav.Link>
          <Nav.Link>|</Nav.Link>
          <Nav.Link>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </Nav.Link>
          <Nav.Link>
            <FontAwesomeIcon icon={faBagShopping} />
          </Nav.Link>
        </Nav>
      </Container>

    </Navbar>
  )
}
