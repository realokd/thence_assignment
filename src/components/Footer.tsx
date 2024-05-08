const Footer = () => {
  return (
    <footer className=" flex w-full h-36 justify-between items-center bg-[#F5F5F5] rounded-[40px] px-12 mt-12 mb-8">
      <span className=" flex  gap-x-3">
        <img src="./c.svg" alt="" />
        <p className=" font-manrope text-lg font-medium">
          Talup 2023. All rights reserved
        </p>
      </span>
      <p className=" flex  font-manrope font-normal text-lg gap-x-8 underline">
        <a href="">Terms & Conditions</a>
        <a href="">Privacy Policy</a>
      </p>
    </footer>
  );
};

export default Footer;
