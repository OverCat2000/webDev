import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Link from "../components/Link";
import useMediaQuery from "../hooks/useMediaQuery";

const Navbar = ({ selectedPage, setSelectedPage, isTopOfPage }) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)");
  const flexBetween = "flex justify-between items-center";

  return (
    <nav>
      {/* navbar background color appear when scrolling down */}
      <div>
        <div>
          <div>
            {/* left side of the navbar */}
            <img />
            {/* right side of the navbar */}
            {isAboveMediumScreen ? (
              /* desktop view */
              <div>
                {/* Links */}
                <div>hello</div>
              </div>
            ) : (
              /* hamburger icon */
              <button>
                <Bars3Icon className="h-6 w-6 text-black" />
              </button>
            )}
          </div>
        </div>
      </div>
      {/* mobile view */}
      {!isAboveMediumScreen && isMenuToggled && (
        <div>
          {/* close button */}
          <div>
            <button>
              <XMarkIcon />
            </button>
          </div>
          {/* Links */}
          <div>hello</div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
