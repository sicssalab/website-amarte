import types from "../constants/reducers/destinationListConstant";

const loading = () => {
  const destinationList = {
    loading: true,
  };
  return {
    type: types.DESTINATIONLIST_FETCHING,
    destinationList,
  };
};

const getDispatch = (destinationList) => {
  destinationList.complete = true;

  return { type: types.DESTINATIONLIST, destinationList };
};

const errorDispath = (destinationList) => {
  destinationList.error = true;
  return {
    type: types.DESTINATIONLIST_ERROR,
    destinationList,
  };
};
const initialDispatch = () => {
  const destinationList = {};

  return { type: types.DESTINATIONLIST, destinationList };
};
const logout = async (dispatch) => {
  try {
    dispatch(initialDispatch());
  } catch (e) {
    dispatch(errorDispath());
  }
};
const update = async (destinationList, dispatch) => {
  dispatch(getDispatch(destinationList));
};
const loaded = (destinationList, dispatch) => {
  try {
    dispatch(getDispatch(destinationList));
  } catch (e) {
    dispatch(errorDispath());
  }
};
const get = async (request, dispatch, onSuccess, onError) => {
  dispatch(loading());
  try {
    await fetch(`${process.env.REACT_APP_API}/api/states?pagination[pageSize]=50`, {
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

const destinationListAction = {
  update,
  get,
  loaded,
  logout,
};

export default destinationListAction;
