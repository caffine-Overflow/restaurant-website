import React, { Fragment } from "react";
import mealsImg from "../../assest/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImg} alt="You Failed to add  Img..."></img>
      </div>
    </Fragment>
  );
};
export default Header;
