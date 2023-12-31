import React from "react";
import Nav_bar from "../components/header & footer/navbar/navbar";
import Footer from "../components/header & footer/footer/footer";
import Features from "../components/products/features/features";
import Development from "../components/products/development/development";
import Inventory from "../components/products/services/inventory";
import Workspace from "../components/products/services/workspace";
import Gbazar from "../components/products/services/gbazar";
import Design from "../components/products/services/design";

export default function Product() {
  return (
    <>
      <Nav_bar />
      <Features />
      <Inventory />
      <hr />
      {/* <Development /> */}
      <Design />
      <hr />

      <Workspace />
      <hr />

      <Gbazar />

      <Footer />
    </>
  );
}
