import { ReactNode } from "react";
import image1 from "../../../assets/react.svg";
import { NavLink } from "react-router-dom";

interface ImageTypeBind {
  classes?: string;
  url?: string;
  alt?: string;
}

export const ImageHeader = ({
  classes = "h-8 w-auto",
  url = image1,
  alt = "Logo",
}: ImageTypeBind): ReactNode => {
  return (
    <>
      <div className="flex flex-shrink-0 items-center">
        <NavLink to="/">
          <img className={classes} src={url} alt={alt} />
        </NavLink>
      </div>
    </>
  );
};
