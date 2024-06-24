import React, { ReactNode } from "react";
import "./landing.page.css";

import {
  SingleProductGrid,
  SectionTitleComponent,
} from "../../components/common";
import { HomeBannerComponent } from "../../components/banner";

const LandingPage1 = (): ReactNode => {
  // let [products, setProducts] = useState([]);
  // let [loading, setLoading] = useState();

  // setProducts([{}]);
  // useEffect(() => {
  //   console.log("I am always called");
  // });

  // useEffect(() => {
  //   console.log("I am only called when componenet is loaded");
  //   setTimeout(() => {
  //     // setProducts(true);
  //     setLoading(true)
  //   }, 3000);
  // }, []);

  // useEffect(() => {
  //   console.log("I am only called when products state  is changed");
  // }, [products]);

  return (
    <React.Fragment>
      <HomeBannerComponent />

      <SectionTitleComponent>Brand Lists</SectionTitleComponent>

      <div className="bg-gray-200">
        <SectionTitleComponent>Customers Choice</SectionTitleComponent>

        <div className="mx-auto mt-6 px-6 py-6 sm:px-6 sm:py-6 lg:max-w-7xl lg:px-8 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          <SingleProductGrid />
          <SingleProductGrid />
          <SingleProductGrid />
          <SingleProductGrid />
          <SingleProductGrid />
          <SingleProductGrid />
          <SingleProductGrid />
          <SingleProductGrid />
        </div>
      </div>
    </React.Fragment>
  );
};
export default LandingPage1;
