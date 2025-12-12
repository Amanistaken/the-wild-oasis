import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";
import ButtonIcon from "./ButtonIcon";
import { DarkModeContext } from "../context/DarkModeContext";
import { useContext } from "react";

function DarkmodeToggle() {
  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <ButtonIcon onClick={toggleDarkMode}>
      {isDarkMode ? <HiOutlineMoon /> : <HiOutlineSun />}
    </ButtonIcon>
  );
}

export default DarkmodeToggle;
