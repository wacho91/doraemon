import { FaSearch } from "react-icons/fa";
import { GiAtomicSlashes } from "react-icons/gi";
import { MdArrowDropDown } from "react-icons/md";


const MenuLinks = [
  {
    name: "Episodes",
    link: "#/",
  },
  {
    name: "Store",
    link: "#/store",
  },
  {
    name: "Toys",
    link: "#/toys",
  },
  {
    name: "3D videos",
    link: "#/videos",
  },
];

const Navbar = () => {
  return (
    <nav>
      <div>
        <div>
          {/* logo section */}
          <div>
            <GiAtomicSlashes />
              <div>
                  <span>Dora</span>
                  <span>emon</span>
              </div>
          </div>
          {/* links section */}
          <div>
            <ul>
              {MenuLinks.map((data, index) => {
                return (
                  <li key={index}>
                    <a href={data.link}>
                      {data.name}
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
          {/* Search section */}
            <div>
              <input type="text" />
              <div>
                <FaSearch />
              </div>
              <div>
                Eng
                <span>
                  <MdArrowDropDown />
                </span>
              </div>
           </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
