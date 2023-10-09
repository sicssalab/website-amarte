import React from "react";
import { Button } from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";
import ArrowNext from "../../../../assets/icons/arrow-right-bold-white.svg";
import ArrowBack from "../../../../assets/icons/arrow-left-bold-white.svg";
import { useMediaQuery } from "react-responsive";
import breakpointConstants from "../../../../constants/breakpointConstants";

const PagePressSection = (props) => {
  const { totalPages, pageView } = props;
  const isMobile = useMediaQuery({ maxWidth: breakpointConstants.MD });
  const Circle = () => {
    return <div className="circle" />;
  };

  const nextPage = () => {
    const { onNextPage } = props;
    onNextPage && onNextPage();
  };

  const prevPage = () => {
    const { onPrevPage } = props;
    onPrevPage && onPrevPage();
  };

  return (
    <div className="pagination">
      {(pageView > 1 && !isMobile) && (
        <Button onClick={prevPage} className="next-page">
          <LazyLoadImage
            src={ArrowBack}
            alt={"button back slide"}
            width={25}
            height={25}
            fill={"black"}
          />
        </Button>
      )}
      <div className="content-circle">
        <Circle />
        <Circle />
        <Circle />
      </div>
      {pageView < totalPages && (
        <Button onClick={nextPage} className="prev-page">
          <LazyLoadImage
            src={ArrowNext}
            alt={"button nexy slide"}
            width={25}
            height={25}
          />
        </Button>
      )}
    </div>
  );
};

export default PagePressSection;
