import React, { useState } from "react";
import { Col, Image } from "react-bootstrap";
import iconfacebook from "../../../assets/icons/facebook-f.svg";
import iconinstagram from "../../../assets/icons/instagram-white.svg";
import iconlinkein from "../../../assets/icons/linkein-white.svg";
import icontwitter from "../../../assets/icons/twitter.svg";
import CloseButton from "react-bootstrap/CloseButton";
import { ImWhatsapp } from "react-icons/im";
const BoxPersonalInformation = (props) => {
  const {
    avatar,
    name,
    email,
    lastName,
    department,
    description,
    linkWhatsapp,
    linkInstagram,
    linkFacebook,
    linkLinkedin,
    linkTwitter,
  } = props;
  const [show, setShow] = useState(false);

  const handleShowButton = () => {
    setShow(!show);
  };

  return (
    <Col
      xs={12}
      md={show ? 12 : 4}
      lg={show ? 12 : 3}
      onClick={() => {
        !show && handleShowButton();
      }}
      className={`${show ? "" : "mouse-hover"}`}
    >
      {show && (
        <div className="d-flex justify-content-end p-3">
          <CloseButton onClick={handleShowButton} />
        </div>
      )}
      <Image
        src={avatar}
        alt={`avatar de ${name}`}
        roundedCircle
        className="d-block m-auto mt-3"
      />
      <h5 className="text-ellipsis text-center mt-3">
        {`${name} ${lastName}`}
      </h5>
      <p
        className={`text-center text-ellipsis ${show ? "mb-0" : ""}`}
      >{`${department}`}</p>
      {show && <p className="text-center">{email}</p>}
      <div className="boxicons-small">
        {linkFacebook && (
          <a
            className="box-icon-small"
            target="_blank"
            href={linkFacebook}
            rel="noreferrer"
            title="red social facebook"
          >
            <img src={iconfacebook} alt="red social facebook" />
          </a>
        )}
        {linkInstagram && (
          <a
            className="box-icon-small"
            target="_blank"
            href={linkInstagram}
            rel="noreferrer"
            title="red social instagram"
          >
            <img src={iconinstagram} alt="red social instagram" />
          </a>
        )}
        {linkTwitter && (
          <a
            className="box-icon-small"
            target="_blank"
            href={linkTwitter}
            rel="noreferrer"
            title="red social twitter"
          >
            <img src={icontwitter} alt="red social twitter" />
          </a>
        )}
        {linkWhatsapp && (
          <a
            className="box-icon-small"
            target="_blank"
            href={`https://api.whatsapp.com/send?phone=${linkWhatsapp}`}
            rel="noreferrer"
            title="red social whatsapp"
          >
            <ImWhatsapp color="white" />
          </a>
        )}
        {linkLinkedin && (
          <a
            className="box-icon-small"
            target="_blank"
            href={linkLinkedin}
            rel="noreferrer"
            title="red social linkein"
          >
            <img src={iconlinkein} alt="red social linkein" />
          </a>
        )}
      </div>
      {show && (
        <div
          className="text-center mt-3"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      )}
    </Col>
  );
};

export default BoxPersonalInformation;
