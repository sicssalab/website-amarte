import React from "react";
import { Container } from "react-bootstrap";
import { MystiqueCard } from "mystique-web-components";
import { useGlobalState, useDispatch } from "../../store/StoreProvider";
import { useEffect } from "react";
import destinationListAction from "../../actions/destinationListAction";
import categoryListAction from "../../actions/categoryListAction";
import { useMediaQuery } from "react-responsive";
import breakpointConstants from "../../constants/breakpointConstants";
import { useState } from "react";
import pagesContants from "../../constants/pagesContants";
import { useNavigate } from "react-router-dom";
import SectionMainSearchServices from "../../components/section/SectionMainSearchServices";

const HomePage = () => {
  const { destinationList, categoryList } = useGlobalState();
  const dispatch = useDispatch();
  const isMobile = useMediaQuery({ maxWidth: breakpointConstants.MD });
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();
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
    <SectionMainSearchServices
            title={`Let's find your wedding team`}
            subTitle={`Search over 250,000 local professionals with reviews, pricing,
                availability, and more`}
            destinationList={destinationList}
            categoryList={categoryList}
        />
      <Container>
        <div className="mt-4 pt-4">
          <h2>Top Wedding Vendor Categories</h2>
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
              //TODO CAMBIAR LA IMAGEN DE DEFAULT
              const imageDefault =
                "https://media-api.xogrp.com/images/e913da1b-9675-4dd0-bbc8-bbc0bee1e907~sc_300.250";
              const imagen = item.picture
                ? `${process.env.REACT_APP_API}${item.picture.formats.thumbnail.url}`
                : imageDefault;

              return (
                <MystiqueCard
                  key={i}
                  href={`/${pagesContants.catergory}/${item.slug}`}
                  srcImage={imagen}
                  alt={item.name}
                  name={item.name}
                  //iconObject={"objeto"}
                />
              );
            })}
          </div>
        </div>
        <hr />
      </Container>
      <Container>
        <div className="pb-4 mt-4 pt-4">
          <h2>Your Wedding Vendors are the Key to a Beautiful Big Day</h2>
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

export default HomePage;
