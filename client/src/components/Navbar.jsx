import { Link } from "react-router-dom";
import Logo from "../images/logo/logo_ezy.png";
import { useEffect, useState } from "react";
import { TbGridDots } from "react-icons/tb";
import { FaTimes } from "react-icons/fa";
import UserImage from "../images/card-image.png"; // Add the path to your user image

function Navbar() {
  const [nav, setNav] = useState(false); // Toggle mobile nav
  const [dropdownOpen, setDropdownOpen] = useState(false); // Toggle dropdown for registration
  const [userName, setUserName] = useState('');

  // useEffect(() => {
  //   // Retrieve user name from local storage
  //   const storedName = localStorage.getItem('userName');
  //   if (storedName) {
  //     setUserName(storedName);
  //   }
  // }, []);

  const toggleNav = () => {
    setNav(!nav); // Toggle mobile menu
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen); // Toggle the dropdown
  };

  return (
    <>
      <nav>
        {/* Mobile Navbar */}
        <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
          <div onClick={toggleNav} className="mobile-navbar__close">
            <FaTimes />
          </div>
          <ul className="mobile-navbar__links">
            <li><Link onClick={toggleNav} to="/">Home</Link></li>
            <li><Link onClick={toggleNav} to="/about">About</Link></li>
            <li><Link onClick={toggleNav} to="/models">Models</Link></li>
            <li><Link onClick={toggleNav} to="/testimonials">Testimonials</Link></li>
            <li><Link onClick={toggleNav} to="/team">Our Team</Link></li>
            <li><Link onClick={toggleNav} to="/contact">Contact</Link></li>
          </ul>

          {/* Sign In Button for Mobile */}
          <div className="mobile-signin">
            {userName ? (
              <img
                src={UserImage}
                alt="user-icon"
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  cursor: "pointer"
                }}
                title={`Hello, ${userName}`}
              />
            ) : (
              <button
                className="mobile-navbar__signin"
                onClick={toggleDropdown}
                style={{
                  backgroundColor: "#750E21",
                  color: "white",
                  padding: "1rem 2rem",
                  borderRadius: "10px",
                  marginBottom: "1rem",
                  boxShadow: "0 10px 15px 0 rgb(255 83 48 / 35%)",
                  width: "100%"
                }}
              >
                Sign In
              </button>
            )}

            {/* Dropdown menu for mobile registration */}
            {dropdownOpen && (
              <div
                className="dropdown-menu"
                style={{
                  backgroundColor: "white",
                  border: "1px solid black",
                  borderRadius: "3px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  marginTop: "1rem",
                  zIndex: 1000
                }}
              >
                <Link
                  to="/main_customer"
                  className="dropdown-item"
                  onClick={() => {
                    setDropdownOpen(false);
                    toggleNav();
                  }}
                  style={{
                    padding: "1rem",
                    fontSize: "16px",
                    color: "black",
                    textDecoration: "none",
                    display: "block"
                  }}
                >
                  → Customer
                </Link>
                <Link
                  to="/main_owner"
                  className="dropdown-item"
                  onClick={() => {
                    setDropdownOpen(false);
                    toggleNav();
                  }}
                  style={{
                    padding: "1rem",
                    fontSize: "16px",
                    color: "black",
                    textDecoration: "none",
                    display: "block"
                  }}
                >
                  → Owner
                </Link>
              </div>
            )}
          </div>

          <div className="navbar__buttons">
            <li><Link onClick={toggleNav} to="/main_customer">Register as Customer</Link></li>
            <li><Link onClick={toggleNav} to="/main_owner">Register as Owner</Link></li>
          </div>
        </div>

        {/* Desktop Navbar */}
        <div className="navbar">
          <div className="navbar__img">
            <Link to="/" onClick={() => window.scrollTo(0, 0)}>
              <img src={Logo} alt="logo-img" />
            </Link>
          </div>
          <ul className="navbar__links">
            <li><Link className="home-link" to="/">Home</Link></li>
            <li><Link className="about-link" to="/about">About</Link></li>
            <li><Link className="models-link" to="/models">Vehicle Models</Link></li>
            <li><Link className="testi-link" to="/testimonials">Testimonials</Link></li>
            <li><Link className="team-link" to="/team">Our Team</Link></li>
            <li><Link className="contact-link" to="/contact">Contact</Link></li>
          </ul>

          <div className="navbar__buttons">
            {userName ? (
              <img
                src={UserImage}
                alt="user-icon"
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  cursor: "pointer"
                }}
                title={`Hello, ${userName}`}
              />
            ) : (
              <div className="navbar__register-dropdown" style={{ position: "relative", display: "inline-block" }}>
                <button
                  className="navbar_buttons_register"
                  onClick={toggleDropdown}
                  style={{
                    backgroundColor: "#750E21",
                    color: "white",
                    padding: "1.5rem 3rem",
                    borderRadius: "10px",
                    boxShadow: "0 10px 15px 0 rgb(255 83 48 / 35%)",
                    transition: "all 0.3s"
                  }}
                >
                  Sign In
                </button>
                {dropdownOpen && (
                  <div
                    className="dropdown-menu"
                    style={{
                      marginRight: "-40px",
                      display: "block",
                      position: "absolute",
                      top: "100%",
                      right: "0",
                      backgroundColor: "white",
                      border: "1px solid black",
                      borderRadius: "3px",
                      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                      zIndex: 1000,
                      transition: "opacity 0.3s ease, transform 0.3s ease",
                      opacity: dropdownOpen ? 1 : 0,
                      transform: dropdownOpen ? "translateY(0)" : "translateY(-10px)"
                    }}
                  >
                    <Link
                      to="/main_customer"
                      className="dropdown-item"
                      onClick={() => setDropdownOpen(false)}
                      style={{
                        padding: "1rem 2rem",
                        fontSize: "16px",
                        fontWeight: 500,
                        color: "black",
                        textDecoration: "none",
                        display: "block",
                        transition: "background-color 0.3s, color 0.3s"
                      }}
                    >
                      → Customer
                    </Link>
                    <Link
                      to="/main_owner"
                      className="dropdown-item"
                      onClick={() => setDropdownOpen(false)}
                      style={{
                        padding: "1rem 2rem",
                        fontSize: "16px",
                        fontWeight: 500,
                        color: "black",
                        textDecoration: "none",
                        display: "block",
                        transition: "background-color 0.3s, color 0.3s"
                      }}
                    >
                      → Owner
                    </Link>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Mobile Hamburger Menu */}
          <div className="mobile-hamb" onClick={toggleNav}>
            {nav ? <FaTimes /> : <TbGridDots className="icon toggleNavbarIcon" />}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
