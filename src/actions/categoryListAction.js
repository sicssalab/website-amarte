import types from "../constants/reducers/categoryListConstant";

const loading = () => {
  const categoryList = {
    loading: true,
  };
  return {
    type: types.CATEGORYLIST_FETCHING,
    categoryList,
  };
};

const getDispatch = (categoryList) => {
  categoryList.complete = true;

  return { type: types.CATEGORYLIST, categoryList };
};

const errorDispath = (categoryList) => {
  categoryList.error = true;
  return {
    type: types.CATEGORYLIST_ERROR,
    categoryList,
  };
};
const initialDispatch = () => {
  const categoryList = {};

  return { type: types.CATEGORYLIST, categoryList };
};

const logout = async (dispatch) => {
  try {
    dispatch(initialDispatch());
  } catch (e) {
    dispatch(errorDispath());
  }
};
const update = async (categoryList, dispatch) => {
  dispatch(getDispatch(categoryList));
};
const loaded = (categoryList, dispatch) => {
  try {
    dispatch(getDispatch(categoryList));
  } catch (e) {
    dispatch(errorDispath());
  }
};
const get = async (request, dispatch, onSuccess, onError) => {
  dispatch(loading());
  try {
    await fetch(`${process.env.REACT_APP_API}/api/state-categories?pagination[pageSize]=500&populate[picture][populate]=*`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((response) => {
        if (response.error) {
          dispatch(errorDispath({ message: "Error al recuperar los datos" }));
          onError && onError({ message: "Error al recuperar los datos" });
        } else {
          const request = {
            data: response.data
          }
          dispatch(getDispatch(request));
          onSuccess && onSuccess(request);
        }
      });
  } catch (e) {
    dispatch(errorDispath({ message: e }));
    onError && onError({ message: e });
  }
};

const categoryListAction = {
  update,
  get,
  loaded,
  logout,
};

export default categoryListAction;
