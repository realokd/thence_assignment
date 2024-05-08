import Congrats from "@/components/Congrats";
import RegisterForm from "@/components/RegisterForm";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface initialStateI {
  isRegistered: boolean;
}

const initialState: initialStateI = {
  isRegistered: false,
};

const Register = () => {
  const navigate = useNavigate();
  const [state, setState] = useState(initialState);

  const setStateWrapper = (val: boolean) => {
    setState((prev) => ({ ...prev, isRegistered: val }));
  };

  useEffect(() => {
    console.log(state.isRegistered);
  }, [state.isRegistered]);
  
  return (
    <div className="w-screen min-h-screen flex flex-col justify-start gap-y-8 items-center px-8 py-4">
      <div className="w-full flex justify-between items-center px-4">
        <img src="./brunel.png" alt="" />
        <span className="cursor-pointer">
          <img
            src="./close.png"
            className="p-4 border border-[#CACACA] rounded-full"
            alt=""
            onClick={() => navigate("/")}
          />
        </span>
      </div>
      {!state.isRegistered ? (
        <RegisterForm parentStateSetter={setStateWrapper} />
      ) : (
        <Congrats />
      )}
    </div>
  );
};

export default Register;
