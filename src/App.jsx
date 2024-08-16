import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Pagination from "./Pagination";

function App() {
  const number_of_pages = 10 
   const limit = 5
  return (
    <>
    <h1 className="flex justify-center items-center font-semibold text-4xl p-3 mb-10">Simple pagination task</h1>
      <Pagination numberOfPages={number_of_pages} limit={limit}/>
    </>
  );
}

export default App;
