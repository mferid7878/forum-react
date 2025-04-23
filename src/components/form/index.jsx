import React from "react";
import { useState } from "react";
import "./from.css";
import Input from "../input";
import TextArea from "../textArea";
import Level from "../level";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [textArea, setTextArea] = useState("");
  const [gpa, setGPA] = useState("");
  return (
    <>
      <h1>Create Student</h1>
      <form action="">
        <div>
          <Input
            type="name"
            labelName="Name"
            placeHolder="Your Name"
            setState={setName}
          />
          <Input
            type="email"
            labelName="Email"
            placeHolder="Your email"
            setState={setEmail}
          />
        </div>
        <TextArea
          labelName="Biographical Statement"
          placeHolder="A bit about you"
          setState={setTextArea}
          type="textarea"
        />
        <div>
          <Level />
          <Input
            type="number"
            labelName="GPA"
            placeHolder="Your GPA"
            setState={setGPA}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Form;
