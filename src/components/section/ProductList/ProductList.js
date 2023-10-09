import React from "react";
import { Container } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import breakpointConstants from "../../../constants/breakpointConstants";
import { useEffect, useState } from "react";
import PagePressSection from "./components/PagePressSection";
import { LazyLoadImage } from "react-lazy-load-image-component";
import ModalProduct from "./components/ModalProduct";

const ProductList = (props) => {
  const { items, title } = props;
  const isMobile = useMediaQuery({ maxWidth: breakpointConstants.MD });
  const [modalShow, setModalShow] = React.useState(false);
  const [itemSelect, setItemSelect] = useState(null);
  const [insieItems, setInsideItems] = useState([]);
  const [pageView, setPageView] = useState(1);
  const [typePagination, setPagination] = useState(
    isMobile ? "list" : "pagination"
  );
  const totalItems = items.length;
  const itemsView = 6;
  const totalPages = Math.ceil(items.length / itemsView);

  useEffect(() => {
    setPagination(isMobile ? "list" : "pagination");
  }, [isMobile]);

  useEffect(() => {
    setInsideItems(items.toSpliced(itemsView, totalItems));
  }, [items]);

  const nextPage = () => {
    if (pageView < totalPages) {
      const newPage = pageView + 1;

      switch (typePagination) {
        case "list":
          setInsideItems(items.toSpliced(itemsView * newPage, totalItems));
          break;
        case "":
        default:
          updateViewItemsInPage(newPage);
      }
      setPageView(newPage);
    }
  };
  const prevPage = () => {
    if (pageView > 1) {
      const newPage = pageView - 1;
      switch (typePagination) {
        case "list":
          setInsideItems(items.toSpliced(itemsView * newPage, totalItems));
          break;
        case "":
        default:
          updateViewItemsInPage(newPage);
      }
      setPageView(newPage);
    }
  };

  const updateViewItemsInPage = (newPage) => {
    const auxItems = [...items];
    const startItems = itemsView * newPage - itemsView;
    const endItems = itemsView * newPage;
    setInsideItems(auxItems.slice(startItems, endItems));
  };

  const onClickButtonItem = (item) => {
    setItemSelect(item);
    setModalShow(true);
  };

  return (
    <section className="gallery-container-list">
      <Container>
        <h2 className="title">{title}</h2>
        <div className="body-items">
          {insieItems &&
            insieItems.map((item, i) => {
              //TODO proceso para identificar un video a una imagen
              //TODO identificar video o imagen
              return (
                <LazyLoadImage key={i}
                  alt={item.name}
                  src={item.media}
                  className="t_image"
                  onClick={() => onClickButtonItem(item)}
                />
              );
            })}
        </div>
        <PagePressSection
          onNextPage={nextPage}
          onPrevPage={prevPage}
          totalPages={totalPages}
          pageView={pageView}
        />
        <ModalProduct
          item={itemSelect}
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </Container>
    </section>
  );
};

export default ProductList;
