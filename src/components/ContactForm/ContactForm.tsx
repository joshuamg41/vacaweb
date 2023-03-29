import React, { useState } from "react";
import "./ContactForm.css";
const ContactForm = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (event: any) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const handleSubmit = (event: any) => {
    alert("A name was submitted: " + inputs.name);
    event.preventDefault();
  };

  return (
    <>
      <form className="ContactFormContainer" onSubmit={handleSubmit}>
        <h1
          style={{
            fontWeight: "300",
            color: " #FDB54E",
            fontFamily: "Fall in love",
          }}
        >
          Contactanos
        </h1>
        <br />
        <div>
          <label>Nombre :</label>
        </div>

        <input
          name="name"
          type="text"
          value={inputs.name}
          onChange={handleInputChange}
    
        />
        <label>
          Email :
          </label>
          <input
            name="email"
            type="text"
            value={inputs.email}
            onChange={handleInputChange}
           
          />
        <label>
          Mensaje :
          </label>
          <textarea
            name="message"
            value={inputs.message}
            onChange={handleInputChange}
 
            ></textarea>
          {/* <input
          type="text"
          value={inputs.message}
          onChange={handleInputChange}
          placeholder="Mensaje"
          name="message"
          /> */}
        <input type="submit" value="Enviar" />
      </form>
    </>
  );
};

export default ContactForm;
