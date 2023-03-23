import { useState } from "react";
import "./contact.css";

export const Contact = () => {
  // State variables
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    access_key: "ad0869f3-0b5f-4ac5-94ec-0fb63b88119f",
  });

  //Callback functions
  const handleChange = (event) => {
    //use a setter to pass in a new object
    setFormData({
      //spread all the previous formdata properties and update/overwrite the current property that the user is typing into
      ...formData,
      [event.target.name]: event.target.value,
    });
    //console.log(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const data = JSON.stringify(formData);

    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: data,
    })
      //When the message succeeds in sending, then this is called
      .then((res) => res.json())
      .then((data) => {
        setSuccess(true);

        setTimeout(() => {
          setSuccess(false);
        }, 3000);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <h1 className="title">Contact</h1>

      <form onSubmit={handleFormSubmit}>
        <input
          name="name"
          onChange={handleChange}
          type="text"
          placeholder="Enter your Name"
        />
        <input
          name="email"
          onChange={handleChange}
          type="text"
          placeholder="Enter Email Address"
        />
        <textarea
          name="message"
          onChange={handleChange}
          placeholder="Enter your Message"
          cols="30"
          rows="10"
        ></textarea>
        <button className="addToBasketBtn">Submit</button>
      </form>

      {success && <p>Form submitted successfully!</p>}
    </>
  );
};
