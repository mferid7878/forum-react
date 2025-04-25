import React, { useState } from "react";
import "./from.css";
import Input from "../input";
import TextArea from "../textArea";
import Level from "../level";
import Hobbies from "../hobbies";
import Major from "../major";

const Form = () => {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [textArea, setTextArea] = useState("");
  const [gpa, setGPA] = useState("");
  const [gpaError, setGPAError] = useState(false);
  const [hobbies, setHobbies] = useState("");
  const [major, setMajor] = useState("");
  const [level, setLevel] = useState("");
  // const [required, setRequired] = useState(false);

  console.log(name, email, textArea, gpa, hobbies, major, level);
  // console.log(required);
  console.log(gpaError);

  const handleName = (e) => {
    const newName = e.target.value;
    setName(newName);
    setNameError(newName.length < 3);
  };

  const handleEmail = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    setEmailError(!newEmail.includes("@"));
  };

  const handleHobbies = (e) => {
    const newHobbies = e.target.value;
    setHobbies(newHobbies);
  };

  const handleLevel = (e) => {
    setLevel(e.target.value);
  };

  const handleGPA = (e) => {
    setGPA(e.target.value);

    setGPAError(gpa < 70 || gpa > 100 ? true : false);
    // setRequired(!gpa);
  };

  const handleMajor = (e) => {
    const selectedMajor = e.target.value;
    setMajor(selectedMajor);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation for required fields
    if (nameError || emailError || gpaError || required) {
      alert(
        "Please fill out all required fields and fix any errors before submitting."
      );
      return;
    }

    alert("Form submitted successfully!");
  };

  return (
    <>
      <h1>Create Student</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <Input
            value={name}
            type="text"
            labelName="Name"
            placeHolder="Your Name"
            handleInput={handleName}
          />
          {nameError && (
            <p className="error-message">
              Name must be at least 3 characters long!
            </p>
          )}
          <Input
            value={email}
            type="email"
            labelName="Email"
            placeHolder="Your Email"
            handleInput={handleEmail}
          />
          {emailError && (
            <p className="error-message">Please enter a valid email address!</p>
          )}
        </div>
        <TextArea
          value={textArea}
          labelName="Biographical Statement"
          placeHolder="A bit about you"
          setState={setTextArea}
          type="textarea"
        />
        <div>
          <Level
            labelName="Level"
            // value={level}
            name="level"
            optionNames={["Freshman", "Sophomore", "Junior", "Senior"]}
            handleLevel={handleLevel}
          />
          <Input
            value={gpa}
            type="number"
            labelName="GPA"
            placeHolder="Your GPA"
            handleInput={handleGPA}
          />
          {gpaError === true && (
            <p className="error-message">GPA must be between 70 and 100!</p>
          )}
        </div>
        <Hobbies
          labelName="Hobbies"
          name="hobbies"
          hobbieNames={["Reading", "Sports", "Music", "Traveling"]}
          handleInput={handleHobbies}
        />
        <Major
          labelName="Major"
          name="major"
          majorNames={["Computer Science", "Mathematics", "Physics", "Biology"]}
          handleInput={handleMajor}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Form;
