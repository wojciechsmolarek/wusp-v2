import React from "react";

const Logo = () => (
  <img
    src={"/logo-wusp.svg"}
    alt={"WUSP Jarocin"}
    width={150}
    height={120}
    loading={"eager"}
    fetchpriority={"high"}
  />
);
export default Logo;