import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Routes from "./router/Routes";
import ScrollToTop from "./components/ScrollToTop";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <>
      <Helmet>
        <title>BitWeb | a bit of a revolution.</title>
        <meta property="og:site_name" content="deski" />
        <meta
          property="og:url"
          content="https://bitwebs.org"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="BitWeb | a bit of a revolution."
        />
        <meta
          name="keywords"
          content="bitweb, web4"
        />
        <meta
          name="description"
          content="The BitWeb and Web4 have arrived. We're taking the web back and we're doing it together."
        />
        <meta name="description" content="The BitWeb and Web4 have arrived. We're taking the web back and we're doing it together." />
      </Helmet>
      {/* End Seo Helmt */}

      <ScrollToTop />
      <Routes />
    </>
  );
};

export default App;
