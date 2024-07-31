import { useState } from "react";
import Input from "./Input";

export default function Login() {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false,
  });

  const handleInputBlur = (identifier) => {
    setDidEdit((prevState) => ({
      ...prevState,
      [identifier]: true,
    }));
  };
  const emailIsInvalid = didEdit.email && !inputs.email.includes("@");
  const passwordIsInvalid = didEdit.password && inputs.password.length < 6;

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("submitted");
    // console.log(inputs);
  };

  const handleFieldsChange = (identifier, value) => {
    // let name = e.target.name;
    // let value = e.target.value;
    setInputs((prevState) => ({
      ...prevState,
      [identifier]: value,
    }));

    setDidEdit((prevEdit) => ({
      ...prevEdit,
      [identifier]: false,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label="Email"
          id="email"
          type="email"
          name="email"
          onBlur={() => handleInputBlur("email")}
          onChange={(e) => handleFieldsChange("email", e.target.value)}
          value={inputs.email}
          error={emailIsInvalid && 'Please enter a valid email address.'}
        />
        <Input
          label="Password"
          id="password"
          type="password"
          name="password"
          onBlur={() => handleInputBlur("password")}
          onChange={(e) => handleFieldsChange("password", e.target.value)}
          value={inputs.password}
          error={passwordIsInvalid && 'Please enter a valid password.'}
        />
      </div>

      <p className="form-actions">
        <button type="reset" className="button button-flat">
          Reset
        </button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
