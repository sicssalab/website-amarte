import React, { useEffect, useState } from "react";
import { ContainerCustom } from "../../ui/Containers";
import { LazyLoadImage } from "react-lazy-load-image-component";
import BoxSocial from "../../ui/box/BoxSocial";
import BoxDeveloper from "./components/BoxDeveloper";
import UlContact from "./components/UlContact";
import UlOther from "./components/UlOther";
import { Link } from "react-router-dom";
import { useGlobalState } from "../../../store/StoreProvider";
import languageUtils from "../../../utils/languageUtils";
import footerSettings from "../../../settings/footerSettings";

const Footer = (props) => {
  const { locale } = useGlobalState();
  const [setting, setSettings] = useState({});

  useEffect(() => {
    setSettings(locale === languageUtils.defaultLocale ? footerSettings.es : footerSettings.en);
  },[locale])

  return (
    <footer className="footer">
      <ContainerCustom>
        <div className="boxs grid-info">
          <div className="content-logo">
            <Link to={`${languageUtils.linksLocale(locale)}`}>
              <LazyLoadImage
                alt={`${process.env.REACT_APP_SITENAME}`}
                src={setting.logo}
                height={57}
              />
            </Link>
          </div>
          <UlContact items={setting.ContactInfo} />
          <UlOther items={setting.AboutUs} className="content-two" />
        </div>
        <div className="boxs">
          <BoxDeveloper />
          <BoxSocial items={setting.socialNetwork} />
        </div>
      </ContainerCustom>
    </footer>
  );
};

export default Footer;
