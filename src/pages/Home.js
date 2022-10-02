import React from "react";
import Sidebar from "../components/Sidebar";
import Chat from "../components/Chat";

// import Login from "./Login";
// import Register from "./Register";

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
};

export default Home;

// function Home() {
//   return (
//     <div className="home">
//       <div className="container">
//         <Login />
//       </div>
//     </div>
//   );
// }

// export default Home;
