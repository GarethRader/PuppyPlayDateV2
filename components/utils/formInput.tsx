import React from "react";

export type TFieldTypes = {
  name: string;
  className?: string;
  placeholder?: string;
  type: "text" | "password" | "checkbox" | "submit"; //may add more
  handler?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

interface IForm {
  fields: TFieldTypes[];
  // submitHandler: (e: React.FormEvent<HTMLInputElement>) => void;
  submitHandler: (e: React.FormEvent<HTMLFormElement>) => void;
  formType: string;
}

const FormInput = (props: IForm) => {
  const FormFields = props.fields.map((formField, index) => {
    return (
      <div className="grid w-full" key={index}>
        <div className="w-3/4">
          <label className="p-1 font-semibold" htmlFor={formField.type}>
            {formField.name}
          </label>
          <div className="flex justify-center">
            <input
              type={formField.type}
              placeholder={formField.placeholder ? formField.placeholder : undefined}
              className={formField.className ? formField.className : ""}
              onChange={formField.handler}
            ></input>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="bg-white m-10 ">
      <div className="font-bold text-3xl text-center py-4">Find a Play Date</div>
      <form onSubmit={props.submitHandler}>
        <div className="justify-center grid space-y-3">{FormFields}</div>
      </form>
    </div>
  );
};

export default FormInput;
