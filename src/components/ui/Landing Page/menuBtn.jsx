import { useContext } from "react";
import { RiMenu2Line } from "react-icons/ri";
import { UserContext } from "../../context/user";

const MenuBtn = () => {
  const { setMenu } = useContext(UserContext);

  return (
    <button
      className="text-white"
      onClick={() => {
        setMenu(true);
        console.log(true);
      }}
    >
      <RiMenu2Line size={20} />
    </button>
  );
};

export default MenuBtn;
