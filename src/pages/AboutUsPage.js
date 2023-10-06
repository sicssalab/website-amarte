import { Container, Row, Col, Button } from "react-bootstrap";
import {WrapperHeaderBasic, WrapperRowScaleImage} from "mystique-web-components/dist/components";
const AboutUsPage = () => {
  return (
    <>
      <WrapperHeaderBasic
        srcImage={require("../assets/profile-cover.jpg")}
        alt="imagen header nosotros"
        title="Acerca de nosotros"
      />
      <div className="section-secondary">
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
          <div className="mt-4">
            <Row>
              <Col md={6}>
                <h2>Nuestra Misión</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris tempus quam varius velit cursus aliquet. Proin volutpat
                  leo a risus auctor, id gravida enim molestie. Vestibulum
                  egestas ac eros ut placerat. Proin eu iaculis ante, at aliquam
                  eros. Maecenas a ipsum non ligula sodales tincidunt nec ut
                  leo. Aliquam cursus metus ut facilisis fringilla. Cras
                  tincidunt, ante nec malesuada ultricies, elit mi efficitur
                  felis, et pulvinar sapien ligula non turpis. Cras blandit
                  placerat porttitor. Aliquam in massa porta, condimentum metus
                  pellentesque, hendrerit odio. In rutrum, purus vel commodo
                  consectetur, nisl turpis fermentum dui, a imperdiet urna arcu
                  ac arcu.
                </p>
              </Col>
              <Col md={6}>
                <h2>Nuestra Visión</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Lacus vel facilisis volutpat est velit egestas dui id ornare.
                  Mi tempus imperdiet nulla malesuada pellentesque elit eget
                  gravida. Nulla porttitor massa id neque aliquam. Nunc id
                  cursus metus aliquam eleifend mi in. At quis risus sed
                  vulputate odio ut. Blandit massa enim nec dui nunc mattis.
                  Cras fermentum odio eu feugiat. Tellus at urna condimentum
                  mattis pellentesque id.
                </p>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
      <div className="section-white">
        <Container>
          <Row>
            <Col xs={12}>
              <h2>Objetivo</h2>
              <p className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lacus vel facilisis volutpat est velit egestas dui id ornare. Mi
                tempus imperdiet nulla malesuada pellentesque elit eget gravida.
                Nulla porttitor massa id neque aliquam. Nunc id cursus metus
                aliquam eleifend mi in. At quis risus sed vulputate odio ut.
                Blandit massa enim nec dui nunc mattis.
              </p>
            </Col>
            <Col xs={12}>
              <h2>Valores</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lacus vel facilisis volutpat est velit egestas dui id ornare. Mi
                tempus imperdiet nulla malesuada pellentesque elit eget gravida.
                Nulla porttitor massa id neque aliquam. Nunc id cursus metus
                aliquam eleifend mi in. At quis risus sed vulputate odio ut.
                Blandit massa enim nec dui nunc mattis.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="section-secondary">
        <Container>
          <Row>
            <Col xs={12}>
              <h2>Pilares</h2>
              <p className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lacus vel facilisis volutpat est velit egestas dui id ornare. Mi
                tempus imperdiet nulla malesuada pellentesque elit eget gravida.
                Nulla porttitor massa id neque aliquam. Nunc id cursus metus
                aliquam eleifend mi in. At quis risus sed vulputate odio ut.
                Blandit massa enim nec dui nunc mattis.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="section-white border-top border-bottom">
        <Container>
          <WrapperRowScaleImage
            srcImage={require("../assets/default.jpg")}
            alt="imagen informativos nosotros"
            title="Wedding planning starts here"
            description="We help couples discover vendors and ideas and provide them with online tools to help them create their ideal wedding day."
            imageOrder={1}
            descriptionOrder={2}
          />
          <WrapperRowScaleImage
            srcImage={require("../assets/default.jpg")}
            alt="imagen informativos nosotros"
            title="Wedding planning starts here"
            description="We help couples discover vendors and ideas and provide them with online tools to help them create their ideal wedding day."
            imageOrder={2}
            descriptionOrder={1}
          />
          <WrapperRowScaleImage
            //srcImage={}
            alt="imagen informativos nosotros"
            title="Wedding planning starts here"
            description="We help couples discover vendors and ideas and provide them with online tools to help them create their ideal wedding day."
            imageOrder={2}
            descriptionOrder={1}
          />
        </Container>
      </div>
      <div className="section-white">
        <Container>
          <Row>
            <Col xs={12}>
              <h2 className="text-center">Historía</h2>
              <p className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lacus vel facilisis volutpat est velit egestas dui id ornare. Mi
                tempus imperdiet nulla malesuada pellentesque elit eget gravida.
                Nulla porttitor massa id neque aliquam. Nunc id cursus metus
                aliquam eleifend mi in. At quis risus sed vulputate odio ut.
                Blandit massa enim nec dui nunc mattis.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="section-white border-top">
        <Container>
          <Row>
            <Col xs={12}>
              <h3 className="text-center fs-center mb-3">Obten tu membresía</h3>
              <Button className="text-white m-auto d-block" size="lg">Ver todas las membresías</Button>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default AboutUsPage;
