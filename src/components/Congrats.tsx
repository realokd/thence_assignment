import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const Congrats = () => {
  const [seconds, setSeconds] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (seconds === 0) {
        clearInterval(intervalId);
        navigate('/')
      } else {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [seconds]);

  return (
    <>
      <div className=" flex flex-col items-center my-16">
        <img src="./check.svg" alt="" className="my-8" />
        <p className="font-grace text-[#2DA950] text-4xl font-normal">
          Success Submitted
        </p>
        <p className="text-[3.5rem] font-semibold">Congratulations</p>
        <p className="text-[#727272] text-center font-medium text-[1.7rem] w-[45%]">
          Your request has been successfully submitted to us. We will validate
          your information and reach out to your shortly with updates
        </p>
      </div>
      <p className="font-normal text-xl">
        Redirecting you to Homepage in{" "}
        <span className="font-semibold"> {seconds} Seconds</span>
      </p>
    </>
  );
};

export default Congrats;
