"use client";
import React, { useEffect } from "react";
import Slidebar from "./Components/Slidebar";
import Header from "./Components/Header";
import Input from "./Components/Input";
import { useState } from "react";
import Output from "./Components/Output";

const page = () => {
  const [input, setinput] = useState("");
  const [output, setoutput] = useState("");
  const [array, setarray] = useState([]);
  const [inpval, setinpval] = useState([]);
  const [inparr, setinparr] = useState([]);
  useEffect(() => {
    inparr.length <= 7 && setinparr([...inparr, inpval]);
  }, [output]);
  useEffect(() => {
    output != "" && setarray([...array, output]);
  }, [output]);

  return (
    <>
      <Slidebar
        inparr={inparr}
        setinput={setinput}
        setarray={setarray}
        setinparr={setinparr}
      />
      <Header />
      <Input
        input={input}
        setinput={setinput}
        setoutput={setoutput}
        setinpval={setinpval}
        inparr={inparr}
        setinparr={setinparr}
      />
      <Output
        array={array}
        input={input}
        inparr={inparr}
        setinparr={setinparr}
      />
    </>
  );
};

export default page;
