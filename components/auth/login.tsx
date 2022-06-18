import React from "react";
import FormInput, { TFieldTypes } from "../utils/formInput";

const Login = () => {
  const HandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("username: ", UserName, "password: ", Password);
    /*TODO: implement cognito auth here*/
  };

  const [UserName, SetUserName] = React.useState<string>("");
  const [Password, SetPassword] = React.useState<string>("");
  const LoginForm: TFieldTypes[] = [
    {
      name: "Username",
      type: "text",
      className: " border-2 border-gray-400 rounded-lg w-full",
      handler: (e: React.ChangeEvent<HTMLInputElement>) => {
        SetUserName(e.target.value);
      }
    },
    {
      name: "Password",
      type: "password",
      className: "border-2 border-gray-400 rounded-lg w-full",
      handler: (e: React.ChangeEvent<HTMLInputElement>) => {
        SetPassword(e.target.value);
      }
    },
    {
      name: "",
      type: "submit",
      className: "bg-sky-500 font-bold p-4 w-1/2 rounded hover:bg-sky-400 hover:text-white active:bg-cyan-600"
    }
  ];
  return (
    <div className="w-2/4 justify-center items-center">
      <div className="bg-white border-2 mt-20 border-green-200 rounded-3xl shadow ">
        <FormInput fields={LoginForm} formType={"Log in"} submitHandler={(e) => HandleSubmit(e)} />

        <div className="mb-10 p-5 text-center font-bold">
          Unlike traditional dating apps, PuppyPlayDate<sup>tm</sup> isn't a dating app at all. You and your furry
          friend(s) are our number one priority. Find a companion for your companion and sign up today.
        </div>
      </div>
    </div>
  );
};

export default Login;
