import React, { CSSProperties, ReactNode } from "react";


interface LandingPagePropsType {
  name: string;
  email: string;
}



const paragraphStyle:CSSProperties = {
  backgroundColor: "red",
  color: "white",
  textAlign: "center",
  padding: "6px",
};

const LandingPage = ({ name, email }: LandingPagePropsType): ReactNode => {
  console.log(name, email);

  return (
    <React.Fragment>
      <p style={paragraphStyle}>
        <strong>Name: </strong>
        {name}
      </p>
      <p style={paragraphStyle}>
        <strong>Email: </strong>
        {email}
      </p>
    </React.Fragment>
  );
};
export default LandingPage;
