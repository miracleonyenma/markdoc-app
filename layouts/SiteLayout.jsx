// ./layouts/SiteLayout.jsx

const { default: SiteHeader } = require("../components/SiteHeader");

const SiteLayout = ({ children }) => {
  return (
    <>
      <SiteHeader />
      <main>{children}</main>
    </>
  );
};

export default SiteLayout;
