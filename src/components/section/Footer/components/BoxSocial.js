import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import FaceIcon from "../../../../assets/icons/facebook-white.svg";
import InstaIcon from "../../../../assets/icons/instagram-white.svg";
import LinkIcon from "../../../../assets/icons/linkein-white.svg";
import YoutubeIcon from "../../../../assets/icons/youtube-white.svg";

const BoxSocial = () => {
  return (
    <div className="content-social">
      <a href="https://www.facebook.com/grupomiraro" target={"_blank"} rel="noreferrer">
        <LazyLoadImage
          alt={"Facebook Grupo Miraro"}
          src={FaceIcon}
          height={20}
        />
      </a>
      <a href="https://www.instagram.com/grupomiraro" target={"_blank"} rel="noreferrer">
        <LazyLoadImage
          alt={"Instagram Grupo Miraro"}
          src={InstaIcon}
          height={20}
        />
      </a>
      <a href="https://www.linkedin.com/company/grupo-miraro" target={"_blank"} rel="noreferrer">
        <LazyLoadImage
          alt={"Linkedin Grupo Miraro"}
          src={LinkIcon}
          height={20}
        />
      </a>
      <a href="https://www.youtube.com/@grupomiraro" target={"_blank"} rel="noreferrer">
        <LazyLoadImage
          alt={"YouTube Grupo Miraro"}
          src={YoutubeIcon}
          height={20}
        />
      </a>
    </div>
  );
};

export default BoxSocial;
