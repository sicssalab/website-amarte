import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Press = (props) => {
  const { title, description, alt, logo, link, textLink } =
    props;
  return (
    <div className="press">
      <div className="content-left">
      {link && <a href={link} target="_blank" rel="noreferrer" className="link-more"><LazyLoadImage src={logo} className="size-logo" alt={alt} /></a>}
      {!link && <LazyLoadImage src={logo} className="size-logo" alt={alt} />}
      </div>
      <div className="content-right">
        <h5 className="title" dangerouslySetInnerHTML={{ __html: title }} />
        <p className="description">{description}</p>
        {link && <a href={link} target="_blank" rel="noreferrer" className="link-more">{textLink}</a>}
        <div className="m-border" />
      </div>
    </div>
  );
};

export default Press;
