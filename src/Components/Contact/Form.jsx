import React from "react";

export default function Form() {
  const HendleOnSubmit = (event) => {
    console.log("Form Submited");
    event.preventDefault();
  };
  return (
    <form onSubmit={HendleOnSubmit} id="myForm">
      <span>LEAVE A MESSAGE</span>
      <h2>We love to here from you</h2>
      <input type="text" name="Name" placeholder="Your Name" />
      <input type="email" name="E-Mail" placeholder="E-Mail" />
      <input type="text" name="Subject" placeholder="Subject" />
      <textarea name="Message" placeholder="Your Message" defaultValue={""} />
      <button onClick={HendleOnSubmit}>Submit</button>
    </form>
  );
}
