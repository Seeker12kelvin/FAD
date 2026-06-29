import MenuBtn from "./menuBtn";
import { CiSearch } from "react-icons/ci";

const Header = () => {
  const navList = [
    { id: 1, name: "Identity", link: "Identity" },
    { id: 2, name: "Beauty", link: "Beauty" },
    { id: 3, name: "Ceremony", link: "Ceremony" },
    { id: 4, name: "Informal Markets", link: "Informal Markets" },
    { id: 5, name: "Sustainability", link: "Sustainability" },
    { id: 6, name: "Society", link: "Society" },
    { id: 7, name: "Entrepreneurship", link: "Entrepreneurship" },
    { id: 8, name: "Retail", link: "Retail" },
    { id: 9, name: "Global African", link: "Global African" },
    { id: 10, name: "Opinion", link: "Opinion" },
  ];

  return (
    <header className="bg-black text-white py-2 px-6 flex justify-between items-center max-[1024px]:m-3 mx-10">
      <MenuBtn />

      <nav className="w-fit h-full max-[1024px]:hidden">
        <ul className="w-fit h-full flex items-center gap-4">
          {navList.map((item) => (
            <li
              key={item.id}
              className="uppercase font-helvetica font-bold text-xs leading-[100%]"
            >
              <a>{item.name}</a>
            </li>
          ))}
        </ul>
      </nav>

      <CiSearch size={24} />
    </header>
  );
};

export default Header;
