import { useState } from "react";
import {
  FaBars,
  FaHome,
  FaUsers,
  FaCog,
  FaSignOutAlt,
  FaBook,
  FaBoxOpen,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();
  const menus = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <FaHome size={20} />,
    },
    {
      name: "Article",
      path: "/dashboard/article/create",
      icon: <FaBook size={20} />,
    },
    {
      name: "Product",
      path: "/dashboard/product/create",
      icon: <FaBoxOpen size={20} />,
    },
    // {
    //   name: "Users",
    //   path: "users",
    //   icon: <FaUsers size={20} />,
    // },
    // {
    //   name: "Settings",
    //   path: "settings",
    //   icon: <FaCog size={20} />,
    // },
  ];

  const logout = async () => {
    localStorage.removeItem("user");
    navigate("/", { replace: true });
  };

  return (
    <aside
      className={`bg-slate-900 text-white transition-all duration-300 ease-in-out h-screen sticky top-0 left-0
      ${open ? "w-64" : "w-20"}`}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-slate-700">
        {open && <h1 className="font-bold text-xl">Admin</h1>}

        <button
          onClick={() => setOpen(!open)}
          className="p-2 rounded-lg hover:bg-slate-800"
        >
          <FaBars />
        </button>
      </div>

      {/* Menu */}
      <nav className="mt-4 px-3">
        <ul className="space-y-2">
          {menus.map((menu, index) => (
            <li key={index}>
              <Link
                to={menu.path}
                className="
                  w-full
                  flex
                  items-center
                  gap-4
                  p-3
                  rounded-xl
                  hover:bg-blue-600
                  transition-all
                "
              >
                {menu.icon}

                <span
                  className={`
                    whitespace-nowrap
                    transition-all
                    duration-300
                    ${open ? "opacity-100" : "opacity-0 hidden"}
                  `}
                >
                  {menu.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Logout */}
      <div className="absolute bottom-6 w-full px-3">
        <button
          onClick={logout}
          className="
            w-full
            flex
            items-center
            gap-4
            p-3
            rounded-xl
            bg-red-500
            hover:bg-red-600
            transition-all
          "
        >
          <FaSignOutAlt />

          {open && <span>Logout</span>}
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
