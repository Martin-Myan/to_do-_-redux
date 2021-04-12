import React, { useState } from "react";

import PropTypes from "prop-types";

import { ReactComponent as Icon } from "../../icons/icon.svg";
import { ReactComponent as Edit } from "../../icons/edit.svg";

import styles from "../../App.module.scss";

const NewItem = ({ id, newValue, editCLick, deleteClick }) => {
  const [mode, setMode] = useState(false);
  const [value, setValue] = useState(newValue);

  const submitHandler = (e) => {
    e.preventDefault();
    if (value.trim().length === 0) {
      alert("Input Value empety");
    } else {
      editCLick({ id, value });
    }
  };

  const inpValueHandler = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className={styles.to_do__items_container__item}>
      {mode ? (
        <form className="w-75 " onSubmit={submitHandler}>
          <input
            type="text"
            value={value}
            onChange={inpValueHandler}
            className="mw-100 w-100 bg-danger fs-3 rounded-pill px-2"
          />
        </form>
      ) : (
        <p>{newValue}</p>
      )}

      <div className={styles.to_do__items_container__item__btns_block}>
        <button
          onClick={() => deleteClick(id)}
          className={`${styles.to_do__items_container__item__btns_block__button_styles} btn btn-primary`}
        >
          <Icon className="iconSize" />
        </button>
        <button
          onClick={() => setMode(!mode)}
          className={`${styles.to_do__items_container__item__btns_block__button_styles} btn btn-primary`}
        >
          <Edit className="iconSize" />
        </button>
      </div>
    </div>
  );
};

NewItem.defaultProps = {
  id: "",
  newValue: "",
  editCLick: () => {},
  deleteClick: () => {},
};

NewItem.propTypes = {
  id: PropTypes.string,
  editCLick: PropTypes.func,
  newValue: PropTypes.string,
  deleteClick: PropTypes.func,
};

export default NewItem;
