import logo from "../../assets/images/Frame 57293.png";

const BrandLogo = () => {
  return (
    <div
      className="
        absolute
        left-2
        top-[42%]
        -translate-y-1/2
      "
    >
      <img
        src={logo}
        alt="Hungrr Logo"
        className="
          w-auto
          h-auto
          object-contain
          select-none
        "
        draggable={false}
      />
    </div>
  );
};

export default BrandLogo;
