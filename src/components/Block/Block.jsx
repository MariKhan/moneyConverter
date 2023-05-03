import React from "react";
import styles from "./Block.module.css";
const defaultCurrencies = ["RUB", "USD", "EUR", "AMD"];

const Block = function ({ value, currency, onChangeValue, onChangeCurrency }) {
  return (
    <div className={styles.block}>
      <ul className={styles.currencies}>
        {defaultCurrencies.map((cur) => (
          <li
            onClick={() => onChangeCurrency(cur)}
            className={currency === cur ? `${styles.active}` : ""}
            key={cur}
          >
            {cur}
          </li>
        ))}
      </ul>

      <input
        onChange={(e) => onChangeValue(e.target.value)}
        value={value}
        type="number"
      />
    </div>
  );
};

export default Block;
