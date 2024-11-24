import React from "react";
import { Helmet } from "react-helmet";

const PageTitle = ({ title, heading }) => {
  return (
    <>
      {title && (
        <Helmet>
          <title>{title} - RSWA</title>
        </Helmet>
      )}
      {heading && <h1 className="pageTitle">{heading}</h1>}
    </>
  );
};

export default PageTitle;
