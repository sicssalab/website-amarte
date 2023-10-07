import React from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import { useGlobalState, useDispatch } from "../../../store/StoreProvider";
import { useEffect } from "react";
import destinationListAction from "../../../actions/destinationListAction";
import categoryListAction from "../../../actions/categoryListAction";
import { useMediaQuery } from "react-responsive";
import breakpointConstants from "../../../constants/breakpointConstants";
import { useState } from "react";
import SectionMainSearchServices from "../../../components/section/SectionMainSearchServices";
import SectionListEvent from "../../../components/section/SectionListEvent";
const CategoryLandingPage = () => {
  const { destinationList, categoryList } = useGlobalState();
  const [category, setCategory] = useState({ id: 0 });
  const dispatch = useDispatch();
  const isMobile = useMediaQuery({ maxWidth: breakpointConstants.MD });
  const [categories, setCategories] = useState([]);
  const [someErrorPage, setSomeErrorPage] = useState(false);
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

    let category_id = 0;
    try {
      if (categoryList.complete) {
        if (categoryList.complete) {
          const index = categoryList.data.findIndex(
            (i) => i.slug === idSlug
          );
          if (index >= 0) {
            setCategory(categoryList.data[index])
            category_id = categoryList.data[index].id
          };
        }
      }
    } catch (_) {}

    if (category_id <= 0) {
      setSomeErrorPage(true);
    } else {
      setSomeErrorPage(false);
    }
  }, [categoryList, idSlug]);

  return (
    <>
    <SectionMainSearchServices
            title={`Búsqueda en "${category.id === 0 ? "" : category.name}"`}
            subTitle={`Encuentra los mejores "lorem ipsum" para tu evento.`}
            destinationList={destinationList}
            categoryList={categoryList}
            endInputSearchString={category?.name}
            itemEndInitial={category}
        />
      <Container className="pt-4 mt-4">
      <SectionListEvent title={`La búsqueda de ${category?.name}`} items={categories} />
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
