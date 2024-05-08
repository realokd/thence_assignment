import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className=" w-full rounded-full border border-[#EAEAEA] flex justify-between items-center py-8 px-8">
      <img src="./brunel.png" />
      <div className=" flex gap-x-4">
        <Button
          className="rounded-full h-14"
          size={"lg"}
          variant={"outline"}
          onClick={() => navigate("/register")}
        >
          Get Projects
        </Button>
        <Button size={"lg"} className="rounded-full font-semibold h-14">
          Onboard Talent
        </Button>
      </div>
    </header>
  );
};

export default Header;
