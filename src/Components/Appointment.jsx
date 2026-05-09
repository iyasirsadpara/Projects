import "../Style/Appointment.css";
import { useState } from "react";

export default function Appointment() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);

    formData.append("access_key", "caa23daa-7d7c-4ba7-930e-c6376073c8ef"); // 🔑 paste here

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Appointment Booked Successfully ✅");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult("Something went wrong ❌");
    }
  };

  return (
    <div id="appointment" className="schedule-wrapper">
      <div className="schedule-header">
        <span className=" about-us ">Book Appointment</span>
        <h2>Schedule Your Visit</h2>
      </div>

      <form onSubmit={onSubmit} className="schedule-form">

        <div className="row">
          <input type="text" name="name" placeholder="Full Name" required />
          <input type="tel" name="phone" placeholder="Phone Number" required />
        </div>

        <div className="row">
          <input type="email" name="email" placeholder="Email Address" required />
          <select name="doctor">
            <option>Preferred Doctor</option>
            <option>Dr. Smith</option>
            <option>Dr. John</option>
          </select>
        </div>

        <div className="row">
          <input type="date" name="date" required />
          <select name="time">
            <option>Available Time</option>
            <option>Morning</option>
            <option>Afternoon</option>
            <option>Evening</option>
          </select>
        </div>

        <input type="text" name="service" placeholder="Select Service" />

        <textarea name="message" placeholder="Additional Notes"></textarea>

        <button onclick={alert="this is main alert"} type="submit">Book Appointment</button>

        <p className="result">{result}</p>
      </form>
    </div>
  );
}