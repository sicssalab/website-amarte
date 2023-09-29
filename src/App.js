import React, { useEffect } from "react";
import "./theme/boostrap-theme.scss";
import "./theme/main.scss";
import "mystique-web-components/dist/theme/main.scss";
import { Route, Routes, useLocation, Navigate  } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import { IntlProvider } from "react-intl";
import { useGlobalState, useDispatch } from "./store/StoreProvider";
import languages from "./languages";
import languageUtils from "./utils/languageUtils";
import localeAction from "./actions/localeAction";
import pagesContants from "./constants/pagesContants";
import LoginPage from "./pages/LoginPage";
import useAuthVerification from "./hooks/useAuthVerification";
import { LayoutComponent } from "./pages/layouts";
import AccountPage from "./pages/AccountPage";
//import SettingsPage from "./pages/SettingsPage/SettingsPage";
import AuthLayout from "./pages/layouts/AuthLayout";
import CategoryLandingPage from "./pages/category/CategoryLandingPage/CategoryLandingPage";

function App() {
  useAuthVerification();
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
    <IntlProvider locale={locale} messages={languages[locale]}>
      <Routes>
        {/* //TODO paginas en esp */}
        <Route path={"/"} element={<LayoutComponent component={HomePage} />} />
        <Route path={`/${pagesContants.aboutUSES}`} element={<LayoutComponent component={HomePage} />} />
        <Route path={`/${pagesContants.mesaDirectivaES}`} element={<LayoutComponent component={HomePage} />} />
        <Route path={`/${pagesContants.amarteMexicoES}`} element={<LayoutComponent component={HomePage} />} />
        <Route path={`/${pagesContants.afiliateES}`} element={<LayoutComponent component={HomePage} />} />
        <Route path={`/${pagesContants.directoriosES}`} element={<LayoutComponent component={HomePage} />} />
        {/* //TODO categoria/:keyname categoria:wedding-djs donde abre una landing */}
        <Route path={`/${pagesContants.educationES}`} element={<LayoutComponent component={HomePage} />} />
        <Route path={`/${pagesContants.galeriaES}`} element={<LayoutComponent component={HomePage} />} />
        {/* //TODO posiblemente lo rebotemos o no, copiamos el de miraro... */}
        <Route path={`/${pagesContants.blogES}`} element={<LayoutComponent component={HomePage} />} />
        <Route path={`/${pagesContants.bolsaTrabajoES}`} element={<LayoutComponent component={HomePage} />} />
        <Route path={`/${pagesContants.contactoES}`} element={<LayoutComponent component={HomePage} />} />
        <Route path={`/${pagesContants.login}`} element={<LayoutComponent component={LoginPage} />} />
        <Route path={`/${pagesContants.register}`} element={<LayoutComponent component={HomePage} />} />
        <Route path={`/${pagesContants.terminosCondicionesES}`} element={<LayoutComponent component={HomePage} />} />
        <Route path={`/${pagesContants.avisoPrivacidadES}`} element={<LayoutComponent component={HomePage} />} />
        <Route path={`/${pagesContants.settings}`}>
          {/* <Route index element={<><h1>I am parent</h1></>} /> */}
          <Route index element={<Navigate to={`/${pagesContants.settings}/account`} />} />
          <Route path="account" element={<AuthLayout component={AccountPage} />} />
        </Route>
        <Route path={`/${pagesContants.catergory}`}>
          <Route index element={<Navigate to={`/`} />} />
          <Route path=":id" element={<LayoutComponent component={CategoryLandingPage} />} />
        </Route>
        {/* //TODO paginas en en */}
        <Route path={"en/"} element={<LayoutComponent component={HomePage} />} />
        {/* //TODO debe cambiar el texto de la url por idioma */}
        <Route path={`en/${pagesContants.aboutUSES}`} element={<LayoutComponent component={HomePage} />} />
        <Route path={`en/${pagesContants.login}`} element={<LayoutComponent component={LoginPage} />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </IntlProvider>
  );
}

export default App;
