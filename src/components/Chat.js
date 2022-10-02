// import React, { useContext } from "react";
// import {
//   BsThreeDots,
//   BsFillPersonPlusFill,
//   BsFillCameraVideoFill,
// } from "react-icons/bs";
// import Messages from "./Messages";
// import Input from "./Input";
// import { ChatContext } from "../context/ChatContext";

// const Chat = () => {
//   const { data } = useContext(ChatContext);

//   return (
//     <div className="chat">
//       <div className="chatInfo">
//         <span>{data.user?.displayName}</span>
//         <div className="chatIcons">
//           <BsFillCameraVideoFill size={20} />
//           <BsFillPersonPlusFill size={20} />
//           <BsThreeDots size={20} />
//         </div>
//       </div>
//       <Messages />
//       <Input />
//     </div>
//   );
// };

// export default Chat;

import React, { useContext } from "react";
import {
  BsThreeDots,
  BsFillPersonPlusFill,
  BsFillCameraVideoFill,
} from "react-icons/bs";
import Input from "./Input";
import Messages from "./Messages";
import { ChatContext } from "../context/ChatContext";

const Chat = () => {
  const { data } = useContext(ChatContext);
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
        <div className="chatIcons">
          <BsFillCameraVideoFill size={20} />
          <BsFillPersonPlusFill size={20} />
          <BsThreeDots size={20} />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
