import React, { useEffect, useState } from "react";
import { Container, Button, Nav, NavDropdown } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useMediaQuery } from "react-responsive";
import breakpointConstants from "../../constants/breakpointConstants";
import { useDispatch, useGlobalState } from "../../store/StoreProvider";
import authAction from "../../actions/authAction";
import { useNavigate, Link, useLocation } from "react-router-dom";
import localstorageConstants from "../../constants/localstorageConstants";
import languageUtils from "../../utils/languageUtils";
import pagesContants from "../../constants/pagesContants";
import { useIntl } from "react-intl";

const Header = () => {
  const isMobile = useMediaQuery({ maxWidth: breakpointConstants.MD });
  const expand = isMobile ? false : true;
  const [showOffCanvas, setShowOffCanvas] = useState (false)
  const navigate = useNavigate();
  const location = useLocation();
  const [hasActiveLink, setHasActiveLink] = useState(false);

  const dispatch = useDispatch();
  const { auth, locale } = useGlobalState();
  const intl = useIntl();

  const handleClose = () => setShowOffCanvas(false);
  const handleShow = () => setShowOffCanvas(true);
  const handleLogout = () => {
    window.localStorage.removeItem(localstorageConstants.AUTH);
    authAction.logout(dispatch);

    const location = {
      pathname: `${languageUtils.linksLocale(locale)}`,
    };
    navigate(location);
  };

  useEffect(() => {
    let auxActive = 0;
    if(location.pathname.toLowerCase().startsWith(`${languageUtils.linksLocale(locale)}${pagesContants.aboutUSES}`))
      auxActive = 1;
    else if(location.pathname.toLowerCase().startsWith(`${languageUtils.linksLocale(locale)}${pagesContants.mesaDirectivaES}`))
      auxActive = 2;
    else if(location.pathname.toLowerCase().startsWith(`${languageUtils.linksLocale(locale)}${pagesContants.amarteMexicoES}`))
      auxActive = 3;
    else if(location.pathname.toLowerCase().startsWith(`${languageUtils.linksLocale(locale)}${pagesContants.afiliateES}`))
      auxActive = 4;
    else if(location.pathname.toLowerCase().startsWith(`${languageUtils.linksLocale(locale)}${pagesContants.directoriosES}`))
      auxActive = 5;
    else if(location.pathname.toLowerCase().startsWith(`${languageUtils.linksLocale(locale)}${pagesContants.educationES}`))
      auxActive = 6;
    else if(location.pathname.toLowerCase().startsWith(`${languageUtils.linksLocale(locale)}${pagesContants.galeriaES}`))
      auxActive = 7;
    else if(location.pathname.toLowerCase().startsWith(`${languageUtils.linksLocale(locale)}${pagesContants.blogES}`))
      auxActive = 8;
    else if(location.pathname.toLowerCase().startsWith(`${languageUtils.linksLocale(locale)}${pagesContants.bolsaTrabajoES}`))
      auxActive = 9;
    else if(location.pathname.toLowerCase().startsWith(`${languageUtils.linksLocale(locale)}${pagesContants.contactoES}`))
      auxActive = 10;

    setHasActiveLink(auxActive);
    handleClose();
  },[locale, location]);

  return (
    <header>
      {!isMobile && (
        <Navbar className="bg-body-tertiary">
          <Container>
            <Navbar.Brand
              as={Link}
              to={`${languageUtils.linksLocale(locale)}`}
            >{`Logo ${process.env.REACT_APP_SITENAME}`}</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Collapse className="justify-content-end">
              {auth.complete && (
                <>
                  <NavDropdown
                    title={`${intl.formatMessage({ id: "login.wellcome" })} ${
                      auth.username
                    }`}
                    id="basic-nav-dropdown"
                  >
                    <NavDropdown.Item href="#action/3.1">
                      Action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Something
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={handleLogout}>
                      {intl.formatMessage({ id: "login.logout" })}
                    </NavDropdown.Item>
                  </NavDropdown>
                </>
              )}
              {!auth.complete && (
                <>
                  <Button
                    className="text-white me-1"
                    size="sm"
                    as={Link}
                    to={`${languageUtils.linksLocale(locale)}${
                      pagesContants.login
                    }`}
                  >
                    {intl.formatMessage({ id: "login.login" })}
                  </Button>
                  <Button
                    className="text-white"
                    size="sm"
                    as={Link}
                    to={`${languageUtils.linksLocale(locale)}${
                      pagesContants.register
                    }`}
                  >
                    {intl.formatMessage({ id: "login.singup" })}
                  </Button>
                </>
              )}
            </Navbar.Collapse>
          </Container>
        </Navbar>
      )}
      {/* <Navbar expand={expand} bg="primary" data-bs-theme="dark"> */}
      <Navbar expand={expand} className="border-bottom">
        <Container>
          {isMobile && (
            <Navbar.Brand
              as={Link}
              to={`${languageUtils.linksLocale(locale)}`}
            >{`Logo ${process.env.REACT_APP_SITENAME}`}</Navbar.Brand>
          )}
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} onClick={handleShow}/>
          <Navbar.Offcanvas show={showOffCanvas} onHide={handleClose}
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
              <div
                className={`justify-content-between d-flex w-100 ${
                  isMobile ? "flex-column" : ""
                }`}
              >
                <Nav>
                  <Nav.Link active={hasActiveLink === 1}
                    as={Link}
                    to={`${languageUtils.linksLocale(locale)}${
                      pagesContants.aboutUSES
                    }`}
                  >
                    {intl.formatMessage({ id: "websiteTextLink.aboutUS" })}
                  </Nav.Link>
                  <Nav.Link
                  active={hasActiveLink === 2}
                    as={Link}
                    to={`${languageUtils.linksLocale(locale)}${
                      pagesContants.mesaDirectivaES
                    }`}
                  >
                    {intl.formatMessage({
                      id: "websiteTextLink.mesaDirectiva",
                    })}
                  </Nav.Link>
                  <Nav.Link
                  active={hasActiveLink === 3}
                    as={Link}
                    to={`${languageUtils.linksLocale(locale)}${
                      pagesContants.amarteMexicoES
                    }`}
                  >
                    {intl.formatMessage({ id: "websiteTextLink.amarteMexico" })}
                  </Nav.Link>
                  <Nav.Link
                  active={hasActiveLink === 4}
                    as={Link}
                    to={`${languageUtils.linksLocale(locale)}${
                      pagesContants.afiliateES
                    }`}
                  >
                    {intl.formatMessage({ id: "websiteTextLink.afiliate" })}
                  </Nav.Link>
                  <Nav.Link
                  active={hasActiveLink === 5}
                    as={Link}
                    to={`${languageUtils.linksLocale(locale)}${
                      pagesContants.directoriosES
                    }`}
                  >
                    {intl.formatMessage({ id: "websiteTextLink.directorios" })}
                  </Nav.Link>
                  <Nav.Link
                  active={hasActiveLink === 6}
                    as={Link}
                    to={`${languageUtils.linksLocale(locale)}${
                      pagesContants.educationES
                    }`}
                  >
                    {intl.formatMessage({ id: "websiteTextLink.education" })}
                  </Nav.Link>
                  <Nav.Link
                  active={hasActiveLink === 7}
                    as={Link}
                    to={`${languageUtils.linksLocale(locale)}${
                      pagesContants.galeriaES
                    }`}
                  >
                    {intl.formatMessage({ id: "websiteTextLink.galeria" })}
                  </Nav.Link>
                  <Nav.Link
                  active={hasActiveLink === 8}
                    as={Link}
                    to={`${languageUtils.linksLocale(locale)}${
                      pagesContants.blogES
                    }`}
                  >
                    {intl.formatMessage({ id: "websiteTextLink.blog" })}
                  </Nav.Link>
                </Nav>
                <Nav>
                  <Nav.Link
                  active={hasActiveLink === 9}
                    as={Link}
                    to={`${languageUtils.linksLocale(locale)}${
                      pagesContants.bolsaTrabajoES
                    }`}
                  >
                    {intl.formatMessage({ id: "websiteTextLink.bolsaTrabajo" })}
                  </Nav.Link>
                  <Nav.Link
                  active={hasActiveLink === 10}
                    as={Link}
                    to={`${languageUtils.linksLocale(locale)}${
                      pagesContants.contactoES
                    }`}
                  >
                    {intl.formatMessage({ id: "websiteTextLink.contacto" })}
                  </Nav.Link>
                  {isMobile && (
                    <>
                      <hr />
                      <Button
                        as={Link}
                        to={`${languageUtils.linksLocale(locale)}${
                          pagesContants.login
                        }`}
                        className="text-white mb-1"
                        size="sm"
                      >
                        {intl.formatMessage({ id: "login.login" })}
                      </Button>
                      <Button
                        className="text-white"
                        size="sm"
                        as={Link}
                        to={`${languageUtils.linksLocale(locale)}${
                          pagesContants.register
                        }`}
                      >
                        {intl.formatMessage({ id: "login.singup" })}
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
