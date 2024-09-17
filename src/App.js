import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./layout/Navigation/Navigation";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Services from "./pages/Services/Services";
import Pricing from "./pages/Pricing/Pricing";
import { useState } from "react";

// function App() {
//   const [hobby, setHobby] = useState("");
//   const [userData, setUserData] = useState({
//     firstName: "",
//     lastName: "",
//     hobbies: [],
//   });

//   function handleInputChange(e) {
//     const { name, value } = e.target;
//     setUserData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//     console.log(userData);
//   }

//   function handleAddHobby() {
//     setUserData((prevData) => ({
//       ...prevData,
//       hobbies: [...prevData.hobbies, hobby],
//     }));
//     setHobby("");
//   }

//   function handleForm(e) {
//     e.preventDefault();
//   }

//   return (
//     <div className="p-5">
//       <form onSubmit={handleForm}>
//         <label>First Name</label>
//         <input
//           value={userData.firstName}
//           onChange={handleInputChange}
//           name="firstName"
//         />
//         <br />
//         <label>Last Name</label>
//         <input
//           value={userData.lastName}
//           onChange={handleInputChange}
//           name="lastName"
//         />
//         <br />
//         <label>Hobby</label>
//         <input value={hobby} onChange={(e) => setHobby(e.target.value)} />
//         <button type="button" onClick={handleAddHobby}>
//           Add
//         </button>
//         <br />
//         <button type="submit">Submit</button>
//       </form>
//       <br />
//       <p>First Name: {userData.firstName}</p>
//       <p>Last Name: {userData.lastName}</p>
//       <p>
//         Hobbies:{" "}
//         {userData.hobbies.map((hobby) => (
//           <>{hobby}, </>
//         ))}
//       </p>
//     </div>
//   );
// }

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
