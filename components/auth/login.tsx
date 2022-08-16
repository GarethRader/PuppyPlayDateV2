import React from "react";

type TFormValues = {
  user: string;
  password: string;
};

const Login = () => {
  const [formValues, setFormValues] = React.useState<TFormValues>({ user: "", password: "" });

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formValues);
  };

  return (
    <>
      <div className="">
        <div className="font-bold justify-center flex p-2">Feruelo Photos</div>
        <form
          className=""
          onSubmit={(e) => {
            onSubmitHandler(e);
          }}
        >
          <div className="space-y-2">
            <div className="hover:scale-105">
              <input
                type="text"
                className="border-4 border-gray-700 rounded-lg p-1"
                placeholder="username"
                value={formValues.user}
                onChange={(e) => {
                  setFormValues({ ...formValues, user: e.target.value });
                }}
              />
            </div>
            <div className="hover:scale-105">
              <input
                type="password"
                className="border-4 border-gray-700 rounded-lg p-1"
                placeholder="password"
                value={formValues.password}
                onChange={(e) => {
                  setFormValues({ ...formValues, password: e.target.value });
                }}
              />
            </div>
            <div className="hover:scale-105">
              <input
                type="submit"
                value="Login"
                className="bg-blue-400 font-bold p-2 rounded-lg w-full hover:bg-blue-500 active:bg-blue-600"
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
