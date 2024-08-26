import React from "react";
import { ThreeDots } from "react-loader-spinner"; //This is a stub types definition. react-loader-spinner provides its own type definitions, so you do not need this installed.
import s from "./Loader.module.css";
interface LoaderProps {
  height?: string;
  width?: string;
  color?: string;
}
const Loader: React.FC<LoaderProps> = ({
  height = "180",
  width = "180",
  color = "#4D5AE5",
}) => {
  return (
    <div className={s.wrapper}>
      <ThreeDots
        visible={true}
        height={height}
        width={width}
        color={color}
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Loader;
