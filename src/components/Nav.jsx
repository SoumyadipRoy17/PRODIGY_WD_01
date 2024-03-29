import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";
const Nav = () => {
  return (
    <div className="fixed w-full z-20 bg-transparent">
      <header className="padding-x py-8 absolute z-10 w-full ">
        <nav className="flex justify-between items-center max-container">
          <a href="/">
            <img src={headerLogo} alt="logo" width={130} height={29}></img>
          </a>
          <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="font-montserrat leading-normal text-lg text-slate-gray"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="max-lg:flex gap-6 items-center">
            {/* <button className="text-lg text-slate-gray my-3">Sign In</button>
            <button className="text-lg  h-[50px] text-white bg-orange-500 rounded-full px-8 py-3">
              Sign Up
            </button> */}
            <a
              href="https://www.linkedin.com/in/soumyadip-roy-8994a3267/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <button className="text-lg  h-[50px] text-white bg-orange-500 rounded-full px-8 py-3">
                Contact Me
              </button>
            </a>
          </div>
          <div className="hidden max-lg:block">
            <img src={hamburger} alt="Hamburger" height={25} width={25}></img>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Nav;
