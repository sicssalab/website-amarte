import React from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import Pagination from "react-bootstrap/Pagination";
import {
  DoubleAutocomplete,
  MystiqueCard,
  MystiqueCardBootstrap,
} from "mystique-web-components";
import { useGlobalState, useDispatch } from "../../../store/StoreProvider";
import { useEffect } from "react";
import destinationListAction from "../../../actions/destinationListAction";
import categoryListAction from "../../../actions/categoryListAction";
import { useMediaQuery } from "react-responsive";
import breakpointConstants from "../../../constants/breakpointConstants";
import { useState } from "react";
const CategoryLandingPage = () => {
  const { destinationList, categoryList } = useGlobalState();
  const dispatch = useDispatch();
  const isMobile = useMediaQuery({ maxWidth: breakpointConstants.MD });
  const [categories, setCategories] = useState([]);
  const { id: idSlug } = useParams();
  useEffect(() => {
    destinationListAction.get({}, dispatch);
    categoryListAction.get({}, dispatch);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (categoryList.complete) {
      //TODO tomar maximo 12
      const auxCat = [...categoryList.data];
      const news = auxCat.splice(0, 12);
      setCategories(news);
    }
  }, [categoryList]);

  return (
    <>
      <Container fluid className="container-search border-bottom">
        <section className="position-relative">
          <img src={"https://hotelplazajuancarlos.com/imagenes/eventos/eventos%20sociales.jpg"} alt={"iamgen home"} />
          <Container className="container-search-body">
            <div
              className="pt-4 pb-4 search-body-box"
              style={{ width: isMobile ? "initial" : "70%" }}
            >
               <h1>{`Búsqueda en "${idSlug}"`}</h1>
          <p>Encuentra los mejores "lorem ipsum" para tu evento.</p>
              {destinationList.complete && categoryList.complete && (
                <DoubleAutocomplete
                  label="Search"
                  startItems={destinationList.data}
                  endItems={categoryList.data}
                  placeholderStart="Destino"
                  placeholderEnd="Categoría"
                  textEmpySearchs="Selecciona un resultado de la lista de búsqueda"
                  onSubmit={(item, itemEnd) => {
                    console.info("start item", item);
                  }}
                />
              )}
            </div>

          </Container>
        </section>
      </Container>
      <Container className="pt-4 mt-4">
        <div>
          <h2>{`La búsqueda de ${idSlug}`}</h2><small className="fw-bold">Tiene: 5345 Resultados</small>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "30px",
              paddingTop: 15,
              paddingBottom: 30,
              justifyContent: isMobile ? "center" : "initial",
            }}
          >
            {categories.map((item, i) => {
              return (
                <MystiqueCardBootstrap
                  key={i}
                  href={`/${item.slug}`}
                  srcImage={
                    "https://media-api.xogrp.com/images/e913da1b-9675-4dd0-bbc8-bbc0bee1e907~sc_300.250"
                  }
                  alt={item.name}
                  name={item.name}
                  description={
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                  }
                  sendPriceText={"Solicitar Precios"}
                  //iconObject={"objeto"}
                />
              );
            })}
          </div>
        </div>
        <div className="">
          <div style={{
            display: "flex",
            justifyContent: "center"
          }}>
            <Pagination>
              <Pagination.First />
              <Pagination.Prev />
              <Pagination.Item>{1}</Pagination.Item>
              <Pagination.Ellipsis />

              <Pagination.Item>{10}</Pagination.Item>
              <Pagination.Item>{11}</Pagination.Item>
              <Pagination.Item active>{12}</Pagination.Item>
              <Pagination.Item>{13}</Pagination.Item>
              <Pagination.Item disabled>{14}</Pagination.Item>

              <Pagination.Ellipsis />
              <Pagination.Item>{20}</Pagination.Item>
              <Pagination.Next />
              <Pagination.Last />
            </Pagination>
          </div>
        </div>
        <hr />
      </Container>
      <Container>
        <div className="pb-4">
          <h2>Wedding Photography</h2>
          <p>
            Choosing wedding vendors and wedding services for your ceremony and
            reception can be a daunting task. Finding the best vendors that fit
            into your budget takes time. Your first choices may already be
            booked. And you may not even be sure what the wedding of your dreams
            looks like yet. But every successful wedding day is the result of a
            team of professionals working together to take a couple's vision and
            turn it into reality. Don't think of researching and interviewing
            wedding vendors as a chore. Instead, think of it as the first step
            in your wedding planning journey - and one of the most important
            steps overall.
          </p>
        </div>
      </Container>
    </>
  );
};

export default CategoryLandingPage;
