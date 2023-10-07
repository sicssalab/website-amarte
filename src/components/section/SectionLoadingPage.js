import React from "react";
// import { ContainerCustom } from "../../components/ui/Containers";
import { Link } from "react-router-dom";
import { useGlobalState } from "../../store/StoreProvider";
import languageUtils from "../../utils/languageUtils";
import { useIntl } from "react-intl";
import Logo from "../../assets/logo.png";

const SectionLoadingPage = (props) => {
    const { title, disableLink } = props;
    const { locale } = useGlobalState();
    const intl = useIntl();

    return (<div className="not-found-container">
        {/* <ContainerCustom className="container"> */}
            <div className="row justify-content-center">
                <div className="col-lg-6 col-md-8 text-center default-page vh-100 align-items-center d-flex">
                    <div className="card border-0 text-center d-block p-0 bg-transparent m-auto">
                        <img src={Logo} alt={`logo ${process.env.REACT_APP_SITENAME}`} className="w-80 mb-4 ms-auto me-auto pt-md-5" />
                        <p className="text-grey-500 font-xsss">{title}</p>
                        {!disableLink && (
                            <Link
                                to={`${languageUtils.linksLocale(locale)}`}
                                className="p-3 w175 bg-current text-white d-inline-block text-center fw-600 font-xssss rounded-3 text-uppercase ls-3">
                                {intl.formatMessage({ id: "website.go-home" })}
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        {/* </ContainerCustom> */}
    </div>);
}
SectionLoadingPage.defaultProps = {
    title: "Ups! we have a problem"
}
export default SectionLoadingPage;