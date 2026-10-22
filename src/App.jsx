import { useState } from "react";
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
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 p-5">
        <form action="" onSubmit={handleSubmit(submitHandler)}>
          <h1 className="mb-2 text-center text-3xl font-bold text-white">
            BMI Calculator
          </h1>

          <p className="mb-8 text-center text-sm text-slate-400">
            Calculate your Body Mass Index
          </p>
          <input
            type="number"
            {...register("weight")}
            placeholder="Enter your weight in kgs"
            className="mb-5 w-full rounded-xl border border-slate-600 bg-slate-900 px-4 py-3 text-white placeholder-slate-500 outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/20"
          />
          <input
            type="number"
            {...register("height")}
            placeholder="Enter your height in cms"
            className="mb-6 w-full rounded-xl border border-slate-600 bg-slate-900 px-4 py-3 text-white placeholder-slate-500 outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/20"
          />
          <input
            type="submit"
            value="Calculate bmi"
            className="w-full cursor-pointer rounded-xl bg-indigo-500 px-4 py-3 font-semibold text-white transition hover:bg-indigo-400 active:scale-[0.98]"
          />
          <p className="mt-6 text-center text-4xl font-bold text-indigo-400">
            {bmi}
          </p>
        </form>
      </div>
    </>
  );
}

export default App;
