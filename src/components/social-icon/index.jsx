import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const SocialIcon = ({ Icon, bg, hoverBg, size, to }) => {
  return (
    <li>
      <Link
        className={`w-[38px] h-[38px] ${bg?bg:"bg-white"} ${
          hoverBg && `hover:${hoverBg}`
        } hover:bg-blue-500 hover:text-white flex justify-center items-center rounded-full transition-all duration-150 `}
        to={to}
      >
        <Icon size={size} />
      </Link>
    </li>
  );
};

export default SocialIcon;
