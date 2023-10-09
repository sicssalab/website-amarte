import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import {WrapperHeaderBasic} from "mystique-web-components/dist/components";
import imagenMain from "../assets/profile-cover.jpg";
import imagenSection from "../assets/default.jpg";
import ProductList from "../components/section/ProductList/ProductList";
import galleryMock from "../mocks/galleryMock";
const GalleryPage = () => {
  
    return (
    <>
      <WrapperHeaderBasic
        srcImage={imagenMain}
        alt="imagen header galería"
        title="Galería de Amarte"
      />
      <div className="section-white">
        <Container>
          <Row>
            <Col>
              <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lacus vel facilisis volutpat est velit egestas dui id ornare. Mi
                tempus imperdiet nulla malesuada pellentesque elit eget gravida.
                Nulla porttitor massa id neque aliquam. Nunc id cursus metus
                aliquam eleifend mi in. At quis risus sed vulputate odio ut.
                Blandit massa enim nec dui nunc mattis. Cras fermentum odio eu
                feugiat. Tellus at urna condimentum mattis pellentesque id.
                Faucibus pulvinar elementum integer enim neque volutpat ac.
                Proin sed libero enim sed faucibus turpis in eu. Mauris pharetra
                et ultrices neque ornare aenean euismod.{" "}
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <section className="section-secondary">
      <ProductList
        title="Galería"
        items={galleryMock}
      />
      </section>
    </>
  );
};

export default GalleryPage;
