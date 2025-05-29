import React from "react";

const Logo = () => (
  <img
    src={"/logo-wusp.svg"}
    alt={"Logo WUSP Jarocin - szwalnia tapicerki meblowej"}
    width={150}
    height={120}
    loading={"eager"}
    fetchPriority={"high"}
  />
);
export default Logo;