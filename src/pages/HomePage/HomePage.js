import React from "react";
import { useGlobalState } from "../../store/StoreProvider";
const HomePage = () => {
  const {auth} = useGlobalState();
  console.log(auth);
  return (
    <>
      <p>hasdasdasdsa </p>
    </>
  );
};

export default HomePage;
