import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import shortid from "shortid";

import { returnNewItem, deleteItem, editItem } from "./store/actions";
import { Input, NewItem } from "./components";

import styles from "./App.module.scss";

const App = () => {
  const defaultArray = useSelector((state) => state.defaultArray);

  const dispatch = useDispatch();

  const [value, setValue] = useState("");

  const changeValueHandler = (e) => {
    setValue(e.target.value);
  };

  const formSubmitFunc = (event) => {
    event.preventDefault();
    setValue("");
    if (value.trim()) {
      dispatch(returnNewItem({ value, id: shortid.generate() }));
      setValue("");
    } else if (value.trim() === "") {
      setValue("");
      alert("Input Value empety");
    }
  };

  const renderNewItem = defaultArray.map((item) => (
    <NewItem
      id={item.id}
      newValue={item.value}
      key={shortid.generate()}
      editCLick={(value) => dispatch(editItem(value))}
      deleteClick={() => dispatch(deleteItem(item.id))}
    />
  ));

  return (
    <div className={styles.to_do}>
      <div className={styles.to_do__global_container}>
        <div className={styles.to_do__global_container__skilet} />
        <form
          className={styles.to_do__global_container__todoPosition}
          onSubmit={formSubmitFunc}
        >
          <Input
            value={value}
            onChange={changeValueHandler}
            placeholder={`Array length ${defaultArray.length}`}
          />
        </form>
      </div>

      <section className={styles.to_do__items_container}>
        {renderNewItem}
      </section>
    </div>
  );
};

export default App;
