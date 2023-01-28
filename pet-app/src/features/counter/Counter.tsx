import React, { useState } from "react";

import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { incrementAsync, selectCount } from "./counterSlice";
import styles from "./Counter.module.css";

import { getOAuth } from "../../app/api/animalsAPI";

export function Counter() {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState("2");

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          // onClick={() => dispatch(decrement())}
        >
          -
        </button>
        {/* <span className={styles.value}>{count}</span> */}
        <button
          className={styles.button}
          aria-label="Increment value"
          // onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={() =>
            getOAuth("https://api.petfinder.com/v2/animals/").then((data) =>
              dispatch(data)
            )
          }
        >
          Add Amount
        </button>
        <button
          className={styles.asyncButton}
          onClick={() =>
            dispatch(incrementAsync("https://api.petfinder.com/v2/animals/"))
          }
        >
          Add Async
        </button>
        <button
          className={styles.button}
          // onClick={() => dispatch(incrementIfOdd(incrementValue))}
        >
          Add If Odd
        </button>
      </div>
    </div>
  );
}
