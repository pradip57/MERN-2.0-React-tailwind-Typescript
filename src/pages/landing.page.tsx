import React, { ReactNode } from "react";

interface LandingPagePropsType {
  name: string;
  email: string;
}

const LandingPage = ({ name, email }: LandingPagePropsType): ReactNode => {
  console.log(name, email);

  return (
    <React.Fragment>
      <h1>Hello</h1>
      <h2>World</h2>
    </React.Fragment>
  );
};
export default LandingPage;
