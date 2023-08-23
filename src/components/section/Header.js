import React from "react";
import { Container, Button, Nav } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useMediaQuery } from "react-responsive";
import breakpointConstants from "../../constants/breakpointConstants";

const Header = () => {
  const isMobile = useMediaQuery({ maxWidth: breakpointConstants.MD });
  const expand = isMobile ? false : true;
  return (
    <header>
      {!isMobile && (
        <Navbar className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="#home">{`Logo ${process.env.REACT_APP_SITENAME}`}</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Collapse className="justify-content-end">
              {/* <Navbar.Text>
                Signed in as: <a href="#login">Mark Otto</a>
                </Navbar.Text> */}
              <Button className="text-white me-1" size="sm">
                Login
              </Button>
              <Button className="text-white" size="sm">
                Sing up
              </Button>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      )}
      <Navbar expand={expand} bg="primary" data-bs-theme="dark">
        <Container>
          {isMobile && <Navbar.Brand href="#home">{`Logo ${process.env.REACT_APP_SITENAME}`}</Navbar.Brand>}
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                Menu
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <div className={`justify-content-between d-flex w-100 ${isMobile ? "flex-column": ""}`}>
                <Nav>
                  <Nav.Link href="#home">Quienes somos</Nav.Link>
                  <Nav.Link href="#link">Mesa directiva</Nav.Link>
                  <Nav.Link href="#link">Amarte en México</Nav.Link>
                  <Nav.Link href="#link">Afiliate</Nav.Link>
                  <Nav.Link href="#link">Directorio</Nav.Link>
                  <Nav.Link href="#link">Educación</Nav.Link>
                  <Nav.Link href="#link">Galeria</Nav.Link>
                  <Nav.Link href="#link">Blog</Nav.Link>
                </Nav>
                <Nav>
                  <Nav.Link href="#link">Bolsa de trabajo</Nav.Link>
                  <Nav.Link href="#link">Contactanos</Nav.Link>
                  {isMobile && (
                    <>
                      <hr />
                      <Button className="text-white mb-1" size="sm">
                        Login
                      </Button>
                      <Button className="text-white" size="sm">
                        Sing up
                      </Button>
                    </>
                  )}
                </Nav>
              </div>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
