import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import { DoubleAutocomplete } from "mystique-web-components";
import breakpointConstants from "../../constants/breakpointConstants";
import { useMediaQuery } from "react-responsive";
import pagesContants from "../../constants/pagesContants";

const SectionMainSearchServices = (props) => {
  const { destinationList, categoryList, title, subTitle, ...rest } = props;
  const isMobile = useMediaQuery({ maxWidth: breakpointConstants.MD });
  const navigate = useNavigate();

  return (
    <Container fluid className="container-search border-bottom">
      <section className="position-relative">
        <img
          src={
            "https://hotelplazajuancarlos.com/imagenes/eventos/eventos%20sociales.jpg"
          }
          alt={"iamgen home"}
        />
        <Container className="container-search-body">
          <div
            className="pt-4 pb-4 search-body-box"
            style={{ width: isMobile ? "initial" : "70%" }}
          >
            <h1>{title}</h1>
            <p>{subTitle}</p>
            {destinationList.complete && categoryList.complete && (
              <DoubleAutocomplete
                label="Search"
                startItems={destinationList.data}
                endItems={categoryList.data}
                placeholderStart="Destino"
                placeholderEnd="Categoría"
                textEmpySearchs="Selecciona un resultado de la lista de búsqueda"
                onSubmit={(itemState, itemCategory) => {
                  const query = {
                    state_id: itemState.id,
                    category_id: itemCategory.id,
                  };
                  const location = {
                    pathname: `/${pagesContants.search}`,
                    search: `?${new URLSearchParams(query).toString()}`,
                  };
                  navigate(location);
                }}
                {...rest}
              />
            )}
          </div>
        </Container>
      </section>
    </Container>
  );
};

export default SectionMainSearchServices;
