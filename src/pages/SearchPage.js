import React from "react";
import { Container } from "react-bootstrap";
import { useGlobalState, useDispatch } from "../store/StoreProvider";
import { useEffect } from "react";
import destinationListAction from "../actions/destinationListAction";
import categoryListAction from "../actions/categoryListAction";
import { useMediaQuery } from "react-responsive";
import breakpointConstants from "../constants/breakpointConstants";
import { useState } from "react";
import useQuery from "../hooks/useQuery";
import SectionMainSearchServices from "../components/section/SectionMainSearchServices";
import SectionListEvent from "../components/section/SectionListEvent";

const CategoryLandingPage = () => {
  const { destinationList, categoryList } = useGlobalState();
  const dispatch = useDispatch();
  const isMobile = useMediaQuery({ maxWidth: breakpointConstants.MD });
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState({ id: 0 });
  const [state, setState] = useState({ id: 0 });
  const [someErrorPage, setSomeErrorPage] = useState(false);

  let query = useQuery();
  const stateID = query.get("state_id");
  const categoryID = query.get("category_id");
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
  }, [categoryList, categoryID]);

  useEffect(() => {
    let state_id = 0;
    let category_id = 0;
    try {
      if (destinationList.complete && categoryList.complete) {
        state_id = stateID > 0 ? parseInt(stateID) : 0;
        category_id = categoryID > 0 ? parseInt(categoryID) : 0;

        if (destinationList.complete) {
          const index = destinationList.data.findIndex(
            (i) => i.id === state_id
          );
          if (index >= 0) setState(destinationList.data[index]);
        }
        if (categoryList.complete) {
          const index = categoryList.data.findIndex(
            (i) => i.id === category_id
          );
          if (index >= 0) setCategory(categoryList.data[index]);
        }
      }
    } catch (_) {}

    if (state_id <= 0 || category_id <= 0) {
      setSomeErrorPage(true);
    } else {
      setSomeErrorPage(false);
    }
  }, [destinationList, stateID, categoryList, categoryID]);

  return (
    <>
      <SectionMainSearchServices
        title={`Búsqueda de "${category.id === 0 ? "" : category.name} en ${
          state.id === 0 ? "" : state?.name
        }"`}
        subTitle={`Encuentra los mejores "lorem ipsum" para tu evento.`}
        destinationList={destinationList}
        categoryList={categoryList}
        startInputSearchString={state?.name}
        endInputSearchString={category?.name}
        itemStartInitial={state} //TODO sirve para al hacer submit y no han cambiado su informacion, tome de default estos parametros
        itemEndInitial={category}
      />
      <Container className="pt-4 mt-4">
        {someErrorPage && (
          <>
            <h2>{`Ups! Ocurrio un error en tu búsqueda`}</h2>
            <p>Intenta seleccionando otro evento o destino</p>
          </>
        )}
        {!someErrorPage && (
          <>
            <SectionListEvent title={`La búsqueda de ${category?.name}`} items={categories} />
          </>
        )}
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
