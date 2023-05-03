import React from "react";
import Block from "./components/Block/Block";
import "./App.css";
import { rates } from "./api";

function App() {
  const [fromCurrency, setFromCurrency] = React.useState("RUB");
  const [toCurrency, setToCurrency] = React.useState("USD");
  const [fromPrice, setFromPrice] = React.useState(0);
  const [toPrice, setToPrice] = React.useState(1);

  const [data] = React.useState(rates);

  const onChangeFromPrice = (value) => {
    const price = value / data[fromCurrency];
    const result = price * data[toCurrency];
    setToPrice(parseFloat(result.toFixed(3)));
    setFromPrice(value);
  };
  const onChangeToPrice = (value) => {
    const result = (data[fromCurrency] / data[toCurrency]) * value;
    setFromPrice(parseFloat(result.toFixed(3)));
    setToPrice(value);
  };

  React.useEffect(() => {
    onChangeFromPrice(fromPrice);
  }, [fromCurrency]);

  React.useEffect(() => {
    onChangeToPrice(toPrice);
  }, [toCurrency]);

  return (
    <div className="App">
      <Block
        value={fromPrice}
        currency={fromCurrency}
        onChangeCurrency={setFromCurrency}
        onChangeValue={onChangeFromPrice}
      />
      <Block
        value={toPrice}
        currency={toCurrency}
        onChangeCurrency={setToCurrency}
        onChangeValue={onChangeToPrice}
      />
    </div>
  );
}

export default App;
