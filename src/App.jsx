import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";
import { useForm } from "react-hook-form";

function App() {
  const { register, handleSubmit, reset } = useForm();
  let [bmi, setBmi] = useState();

  function submitHandler(data) {
    let weight = data.weight;
    let height = data.height;

    let result = (weight / (height * height)) * 10000;
    setBmi(Math.floor(result));
    reset();
  }

  return (
    <>
      <form action="" onSubmit={handleSubmit(submitHandler)}>
        <input
          type="number"
          {...register("weight")}
          placeholder="Enter your weight in kgs"
        />
        <input
          type="number"
          {...register("height")}
          placeholder="Enter your height in cms"
        />
        <input type="submit" value="Calculate bmi" />
      </form>
      <p>{bmi}</p>
    </>
  );
}

export default App;
