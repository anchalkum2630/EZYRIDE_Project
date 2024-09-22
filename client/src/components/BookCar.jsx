import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import CarAudi from "../images/cars-big/audia1.jpg";
import CarGolf from "../images/cars-big/golf6.jpg";
import CarToyota from "../images/cars-big/toyotacamry.jpg";
import CarBmw from "../images/cars-big/bmw320.jpg";
import CarMercedes from "../images/cars-big/benz.jpg";
import CarPassat from "../images/cars-big/passatcc.jpg";

function BookCar() {
  const [modal, setModal] = useState(false);
  const [carType, setCarType] = useState("");
  const [color, setColor] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [pickUp, setPickUp] = useState("");
  const [dropOff, setDropOff] = useState("");
  const [pickDate, setPickDate] = useState("");
  const [pickTime, setPickTime] = useState("");
  const [dropDate, setDropDate] = useState("");
  const [dropTime, setDropTime] = useState("");
  const [carImg, setCarImg] = useState("");
  const [price, setPrice] = useState("");
  const [driverRequired, setDriverRequired] = useState(false);

  const navigate = useNavigate();

  const carOptions = {
    Car: ["Audi A1 S-Line", "VW Golf 6", "Toyota Camry", "BMW 320 ModernLine", "Mercedes-Benz GLK", "VW Passat CC"],
    Scooty: ["Honda Activa", "TVS Jupiter", "Hero Maestro", "Suzuki Access"],
    Bike: ["Yamaha R15", "Kawasaki Ninja", "Bajaj Pulsar", "Royal Enfield Classic"]
  };

  const handleChange = (e, setter) => setter(e.target.value);

  const handleVehicleTypeChange = (e) => {
    const selectedType = e.target.value;
    setVehicleType(selectedType);
    setCarType("");
    setCarImg(""); // Reset car image when vehicle type changes
  };

  const handleCarTypeChange = (e) => {
    setCarType(e.target.value);
    setCarImg(e.target.value);
  };

  const openModal = (e) => {
    e.preventDefault();
    const errorMsg = document.querySelector(".error-message");
    if (
      pickUp === "" ||
      dropOff === "" ||
      pickDate === "" ||
      pickTime === "" ||
      dropDate === "" ||
      dropTime === "" ||
      carType === "" ||
      color === "" ||
      vehicleType === "" ||
      priceRange === ""
    ) {
      errorMsg.style.display = "flex";
    } else {
      setModal(true);
      const modalDiv = document.querySelector(".booking-modal");
      modalDiv.scroll(0, 0);
      errorMsg.style.display = "none";
    }
  };

  useEffect(() => {
    if (modal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [modal]);

  const confirmBooking = (e) => {
    e.preventDefault();
    setModal(false);
    if (driverRequired) {
      navigate('/drivers'); // Redirect to drivers page
    } else {
      const doneMsg = document.querySelector(".booking-done");
      doneMsg.style.display = "flex";
    }
  };

  const handleImage = (imgValue) => {
    switch (imgValue) {
      case "Audi A1 S-Line":
        return CarAudi;
      case "VW Golf 6":
        return CarGolf;
      case "Toyota Camry":
        return CarToyota;
      case "BMW 320 ModernLine":
        return CarBmw;
      case "Mercedes-Benz GLK":
        return CarMercedes;
      case "VW Passat CC":
        return CarPassat;
      default:
        return "";
    }
  };

  const imgUrl = handleImage(carImg);

  const hideMessage = () => {
    const doneMsg = document.querySelector(".booking-done");
    doneMsg.style.display = "none";
  };

  return (
    <>
      <section id="booking-section" className="book-section">
        <div
          onClick={openModal}
          className={`modal-overlay ${modal ? "active-modal" : ""}`}
        ></div>

        <div className="container">
          <div className="book-content">
            <div className="book-content__box">
              <h2>Book a Vehicle</h2>

              <p className="error-message">
                All fields required! <i className="fa-solid fa-xmark"></i>
              </p>

              <p className="booking-done">
                Check your email to confirm an order.{" "}
                <i onClick={hideMessage} className="fa-solid fa-xmark"></i>
              </p>

              <form className="box-form">
                <div className="box-form__car-type">
                  <label>
                    <i className="fa-solid fa-motorcycle"></i> &nbsp; Select Vehicle Type <b>*</b>
                  </label>
                  <select value={vehicleType} onChange={handleVehicleTypeChange}>
                    <option>Vehicle type</option>
                    <option value="Car">Car</option>
                    <option value="Scooty">Scooty</option>
                    <option value="Bike">Bike</option>
                  </select>
                </div>

                <div className="box-form__car-type">
                  <label>
                    <i className="fa-solid fa-car"></i> &nbsp; Select Vehicle Preference <b>*</b>
                  </label>
                  <select value={carType} onChange={handleCarTypeChange} disabled={!vehicleType}>
                    <option>Select</option>
                    {vehicleType && carOptions[vehicleType]?.map((type, index) => (
                      <option key={index} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div className="box-form__car-type">
                  <label>
                    <i className="fa-solid fa-palette"></i> &nbsp; Color <b>*</b>
                  </label>
                  <select value={color} onChange={(e) => handleChange(e, setColor)}>
                    <option>Select car color</option>
                    <option value="Red">Red</option>
                    <option value="White">White</option>
                    <option value="Black">Black</option>
                    <option value="Blue">Blue</option>
                  </select>
                </div>

                <div className="box-form__car-type">
                  <label>
                    <i className="fa-solid fa-dollar-sign"></i> &nbsp; Price Range <b>*</b>
                  </label>
                  <select value={priceRange} onChange={(e) => handleChange(e, setPriceRange)}>
                    <option>Select price range</option>
                    <option value="Below $50">Below $50</option>
                    <option value="$50 - $100">$50 - $100</option>
                    <option value="$100 - $150">$100 - $150</option>
                    <option value="Above $150">Above $150</option>
                  </select>
                </div>

                <div className="box-form__car-type">
                  <label>
                    <i className="fa-solid fa-location-dot"></i> &nbsp; Pick-up <b>*</b>
                  </label>
                  <select value={pickUp} onChange={(e) => handleChange(e, setPickUp)}>
                    <option>Select pick up location</option>
                    <option>MANIT</option>
                    <option>MP NAGAR</option>
                    <option>INDRAPURI</option>
                    <option>KOLAR</option>
                    <option>ARERA HILLS</option>
                  </select>
                </div>

                <div className="box-form__car-type">
                  <label>
                    <i className="fa-solid fa-location-dot"></i> &nbsp; Drop-off <b>*</b>
                  </label>
                  <select value={dropOff} onChange={(e) => handleChange(e, setDropOff)}>
                    <option>Select drop off location</option>
                    <option>MANIT</option>
                    <option>MP NAGAR</option>
                    <option>INDRAPURI</option>
                    <option>KOLAR</option>
                    <option>ARERA HILLS</option>
                  </select>
                </div>

                <div className="box-form__car-time">
                  <label htmlFor="pickdate">
                    <i className="fa-regular fa-calendar-days"></i> &nbsp;
                    Pick-up <b>*</b>
                  </label>
                  <input
                    id="pickdate"
                    value={pickDate}
                    onChange={(e) => handleChange(e, setPickDate)}
                    type="date"
                  ></input>
                  <input
                    id="picktime"
                    value={pickTime}
                    onChange={(e) => handleChange(e, setPickTime)}
                    type="time"
                  ></input>
                </div>

                <div className="box-form__car-time">
                  <label htmlFor="dropdate">
                    <i className="fa-regular fa-calendar-days"></i> &nbsp;
                    Drop-off <b>*</b>
                  </label>
                  <input
                    id="dropdate"
                    value={dropDate}
                    onChange={(e) => handleChange(e, setDropDate)}
                    type="date"
                  ></input>
                  <input
                    id="droptime"
                    value={dropTime}
                    onChange={(e) => handleChange(e, setDropTime)}
                    type="time"
                  ></input>
                </div>

                {/* <div className="box-form__car-time">
                  <label htmlFor="price">
                    <i className="fa-solid fa-dollar-sign"></i> &nbsp;
                    Price <b>*</b>
                  </label>
                  <input
                    id="price"
                    value={price}
                    onChange={(e) => handleChange(e, setPrice)}
                    type="text"
                    placeholder="Enter price"
                  ></input>
                </div> */}

                {/* <div className="box-form__car-type">
                  <label>
                    <i className="fa-solid fa-user"></i> &nbsp; Driver Required
                  </label>
                  <input
                    type="checkbox"
                    checked={driverRequired}
                    onChange={() => setDriverRequired(!driverRequired)}
                  />
                </div> */}

                <button className="form-btn" onClick={openModal}>
                  Book Now
                </button>
              </form>
            </div>
            <div className="book-content__image">
              <img src={imgUrl} alt="Car" />
            </div>
          </div>
        </div>

        {/* Booking Modal */}
        <div className={`booking-modal ${modal ? "active" : ""}`}>
          <h3>Your Booking</h3>
          <form className="booking-modal__form">
            <div className="form-group">
              <label>
                <i className="fa-solid fa-car"></i> &nbsp; Car Type
              </label>
              <p>{carType}</p>
            </div>
            <div className="form-group">
              <label>
                <i className="fa-solid fa-palette"></i> &nbsp; Color
              </label>
              <p>{color}</p>
            </div>
            <div className="form-group">
              <label>
                <i className="fa-solid fa-motorcycle"></i> &nbsp; Vehicle Type
              </label>
              <p>{vehicleType}</p>
            </div>
            <div className="form-group">
              <label>
                <i className="fa-solid fa-dollar-sign"></i> &nbsp; Price Range
              </label>
              <p>{priceRange}</p>
            </div>
            <div className="form-group">
              <label>
                <i className="fa-solid fa-location-dot"></i> &nbsp; Pick-up
              </label>
              <p>{pickUp}</p>
            </div>
            <div className="form-group">
              <label>
                <i className="fa-solid fa-location-dot"></i> &nbsp; Drop-off
              </label>
              <p>{dropOff}</p>
            </div>
            <div className="form-group">
              <label>
                <i className="fa-regular fa-calendar-days"></i> &nbsp; Pick-up Date
              </label>
              <p>{pickDate}</p>
            </div>
            <div className="form-group">
              <label>
                <i className="fa-regular fa-calendar-days"></i> &nbsp; Drop-off Date
              </label>
              <p>{dropDate}</p>
            </div>
            <div className="form-group">
              <label>
                <i className="fa-solid fa-clock"></i> &nbsp; Pick-up Time
              </label>
              <p>{pickTime}</p>
            </div>
            <div className="form-group">
              <label>
                <i className="fa-solid fa-clock"></i> &nbsp; Drop-off Time
              </label>
              <p>{dropTime}</p>
            </div>
            <div className="form-group">
              <label>
                <i className="fa-solid fa-dollar-sign"></i> &nbsp; Price
              </label>
              <p>{price}</p>
            </div>
            <div className="form-group">
              <label>
                <i className="fa-solid fa-user"></i> &nbsp; Driver Required
              </label>
              <p>{driverRequired ? "Yes" : "No"}</p>
            </div>

            <button onClick={confirmBooking} className="confirm-btn">
              Confirm Booking
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default BookCar;
