import React, { useEffect } from "react";
import "./theme/boostrap-theme.scss";
import "./theme/main.scss";
import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import { IntlProvider } from "react-intl";
import { useGlobalState, useDispatch } from "./store/StoreProvider";
import languages from "./languages";
import languageUtils from "./utils/languageUtils";
import localeAction from "./actions/localeAction";
import pagesContants from "./constants/pagesContants";

function App() {
  const { locale } = useGlobalState();
  const dispatch = useDispatch();
  const location = useLocation();

  //TODO set locale from pathname url
  useEffect(() => {
    let auxLocale = languageUtils.getLocale(location.pathname.toLowerCase());
    localeAction.updateLocale(auxLocale, dispatch);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  //TODO paginas con login, storefront
  return (
    <>
      <IntlProvider locale={locale} messages={languages[locale]}>
        <Routes>
          {/* //TODO paginas en esp */}
          <Route path={"/"} element={<HomePage />} />
          <Route path={`/${pagesContants.aboutUSES}`} element={<HomePage />} />
          <Route path={`/${pagesContants.mesaDirectivaES}`} element={<HomePage />} />
          <Route path={`/${pagesContants.amarteMexicoES}`} element={<HomePage />} />
          <Route path={`/${pagesContants.afiliateES}`} element={<HomePage />} />
          <Route path={`/${pagesContants.directoriosES}`} element={<HomePage />} />
          {/* //TODO categoria/:keyname categoria:wedding-djs donde abre una landing */}
          <Route path={`/${pagesContants.educationES}`} element={<HomePage />} />
          <Route path={`/${pagesContants.galeriaES}`} element={<HomePage />} />
          {/* //TODO posiblemente lo rebotemos o no, copiamos el de miraro... */}
          <Route path={`/${pagesContants.blogES}`} element={<HomePage />} />
          <Route path={`/${pagesContants.bolsaTrabajoES}`} element={<HomePage />} />
          <Route path={`/${pagesContants.contactoES}`} element={<HomePage />} />

          {/* //TODO paginas en en */}
          <Route path={"en/"} element={<HomePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </IntlProvider>
    </>
  );
}

export default App;
