import React from "react";
import css from "./Loader.module.css"

function Loader() {
  return (
    <div className={css.wrapper}>
      <img
        src="https://i.gifer.com/origin/b4/b4d657e7ef262b88eb5f7ac021edda87.gif"
        alt="loading"
      />
    </div>
  );
}

export default Loader;
