import React, { CSSProperties, ReactNode } from "react";
import "./landing.page.css";

interface LandingPagePropsType {
  name: string;
  email: string;
}

const paragraphStyle: CSSProperties = {
  backgroundColor: "red",
  color: "white",
  textAlign: "center",
  padding: "6px",
};

const LandingPage = ({ name, email }: LandingPagePropsType): ReactNode => {
  console.log(name, email);

  return (
    <React.Fragment>
      <p className="landingParagraph" style={paragraphStyle}>
        <strong>Name: </strong>
        {name}
      </p>
      <p className="landingParagraph" style={paragraphStyle}>
        <strong>Email: </strong>
        {email}
      </p>

      <p className="text-red-400 text-center">Hello</p>
    </React.Fragment>
  );
};
export default LandingPage;
