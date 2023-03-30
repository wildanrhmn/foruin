import React from "react";

import Header from "../header/Header";

const Layout = ({ children }) => {
  return (
    <div className="app_layout">
      <Header />
      <main style={{
        marginLeft: '83px',
      }}>{children}</main>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
