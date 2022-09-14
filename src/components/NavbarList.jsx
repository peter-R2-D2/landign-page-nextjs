import { Container, Navbar, Nav } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faBagShopping } from "@fortawesome/free-solid-svg-icons"
import Group from '../assets/group/Group'
import Vector from "../assets/vector/Vector"

export default function NavbarList() {
  return (
    <Navbar variant="dark">
      <Container>
        <Navbar.Brand>
          <Vector  width='40.6' height='47.54' />
          <Group width='111.62' height='24.24' />
        </Navbar.Brand>

        <Nav>
          <Nav.Link className="mr-5 text-white">Home</Nav.Link>
          <Nav.Link className="mr-5 text-white">Our team</Nav.Link>
          <Nav.Link className="mr-5 text-white">About</Nav.Link>
          <Nav.Link className="mr-5 text-white">Contact</Nav.Link>
          <Nav.Link className="mr-5 text-white">Shop</Nav.Link>
          <Nav.Link>|</Nav.Link>
          <Nav.Link>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </Nav.Link>
          <Nav.Link className="bg-nav-icon d-flex justify-content-center aling-items-center">
            <FontAwesomeIcon icon={faBagShopping} />
          </Nav.Link>
        </Nav>
      </Container>

    </Navbar>
  )
}
