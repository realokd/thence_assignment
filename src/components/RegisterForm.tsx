import { FormEvent, ReactNode, useState } from "react";
import { Button } from "./ui/button";

const EMAIL_REG = /\S+@\S+\.\S+/;

interface initialStateI {
  username: string;
  email: string;
  errors:
    | {
        username: { value: boolean; message: ReactNode };
        email: { value: boolean; message: ReactNode };
      }
    | undefined;
  submitDisabled: boolean;
}

const initialState: initialStateI = {
  username: "",
  email: "",
  errors: undefined,
  submitDisabled: true,
};

const RegisterForm = ({
  parentStateSetter,
}: {
  parentStateSetter: (val: boolean) => void;
}) => {
  const [state, setState] = useState(initialState);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!EMAIL_REG.test(state.email)) {
      setState((prev) => ({
        ...prev,
        errors: {
          ...(prev.errors ?? {
            username: { value: false, message: "" },
            email: { value: false, message: "" },
          }),
          email: {
            value: true,
            message: (
              <span className="flex gap-x-2">
                <img src="./error.svg" alt="" />
                <span className="text-[#FF0808] text-lg font-medium">
                  Enter a valid email address
                </span>
              </span>
            ),
          },
        },
      }));
      return;
    }
    parentStateSetter(true);
    console.log(state);
  };

  return (
    <div className="flex flex-col w-[40%]  text-center px-4 gap-y-12">
      <div>
        <p className=" font-grace text-[#2DA950] font-normal text-4xl ">
          Registration Form
        </p>
        <p className=" font-manrope font-semibold text-[3.5rem]">
          Start your success Journey here!
        </p>
      </div>
      <form
        onSubmit={onSubmit}
        className="flex flex-col gap-y-5 w-full items-center"
      >
        <input
          type="text"
          className="w-4/5 bg-[#EFEFEF] rounded-[3rem] h-[4.7rem] px-10"
          placeholder="Enter your name"
          onChange={(e) => {
            setState((prev) => ({
              ...prev,
              username: e.target.value,
              submitDisabled:
                e.target.value.trim().length === 0 ||
                state.email.trim().length === 0,
            }));
          }}
        />
        <div className="w-4/5 flex flex-col gap-y-2">
          <input
            type="text"
            className="w-full bg-[#EFEFEF] rounded-[3rem] h-[4.7rem] px-10"
            placeholder="Enter your email"
            onChange={(e) => {
              setState((prev) => ({
                ...prev,
                email: e.target.value,
                errors: undefined,
                submitDisabled:
                  state.username.trim().length === 0 ||
                  e.target.value.trim().length === 0,
              }));
            }}
          />
          {state.errors?.email.value && state.errors.email.message}
        </div>
        <Button
          disabled={state.submitDisabled}
          type="submit"
          className="w-4/5 bg-[#1C1C1C] rounded-[3rem] text-lg font-semibold mt-5 h-[4.8rem]"
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default RegisterForm;
