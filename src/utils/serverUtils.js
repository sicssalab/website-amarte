const getCanonical = (domain, locale, canonical) => {
    return `${domain}${locale === "es" ? "": `/${locale}`}${canonical === "//" ||canonical === "/" || canonical === "home" || canonical === "inicio" ? '': canonical}`;
}

const serverUtils = {
    getCanonical
}

export default serverUtils;