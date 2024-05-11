import React from "react";
import { useToggle } from "@uidotdev/usehooks";
import { Link } from "react-router-dom";

const UserMenu = () => {
  const [toggle, setToggle] = useToggle(false);

  return (
    <div className="relative flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
      <div>
        <button
          type="button"
          className="relative flex text-sm bg-zinc-800 rounded-full md:me-0 focus:ring-4 focus:ring-zinc-300 dark:focus:ring-zinc-600"
          id="user-menu-button"
          onClick={setToggle}
        >
          <span className="sr-only">Open user menu</span>
          <img
            className="w-6 h-6 sm:w-8 sm:h-8 rounded-full"
            src="https://static.pakwheels.com/2023/12/e3dbd83c-9708-473d-84e4-a5a4128365e7.webp"
            alt="userpic"
          />
        </button>
        {toggle && (
          <div
            className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-zinc-800 shadow-lg ring-1 ring-zinc-950 
            ring-opacity-5 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            tabIndex={-1}
          >
            <div className="py-1" role="none">
              <Link
                to="#"
                className="text-zinc-500 hover:text-zinc-50 block px-4 py-2 text-sm"
                role="menuitem"
                tabIndex={-1}
                id="menu-item-0"
              >
                Profile
              </Link>

              <form method="POST" action="#" role="none">
                <button
                  type="submit"
                  className="text-zinc-500 hover:text-zinc-50 block w-full px-4 py-2 text-left text-sm"
                  role="menuitem"
                  tabIndex={-1}
                  id="menu-item-3"
                >
                  Sign out
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserMenu;
