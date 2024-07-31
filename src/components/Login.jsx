import { useState } from "react";

export default function Login() {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const emailIsInvalid = inputs.email !== '' && !inputs.email.includes("@");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
    console.log(inputs);
  };

  const handleFieldsChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setInputs((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            onChange={handleFieldsChange}
            value={inputs.email}
          />
          <div className="control-error">
            {emailIsInvalid && <p>Please enter a valid email address.</p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={handleFieldsChange}
            value={inputs.password}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
