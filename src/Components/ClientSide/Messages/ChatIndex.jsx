import React from 'react'
import "./assets/VisbyRoundCF-Regular.woff";
import { ContextProvider } from './functions/context';
import ChatApp from './ChatApp';

export default function ChatIndex() {
  return (
    <div>
      <ContextProvider>
        <ChatApp />
      </ContextProvider>

    </div>
  )
}























// import ReactDOM from "react-dom/client";

//

// import { ContextProvider } from "./functions/context";
// import ChatApp from "./ChatApp";

// const Chatroot = ReactDOM.createRoot(document.getElementById("root"));
// Chatroot.render(
//   <ContextProvider>
//     <ChatApp />
//   </ContextProvider>
// );

// export default Chatroot;














// // import ReactDOM from "react-dom/client";
// // import App from "./App";

// // import "./assets/VisbyRoundCF-Regular.woff";

// // import { ContextProvider } from "./functions/context";

// // const Chatroot = ReactDOM.createRoot(
// //   document.getElementById("root") as HTMLElement
// // );
// // Chatroot.render(
// //   <ContextProvider>
// //     <App />
// //   </ContextProvider>
// // );


// // export default Chatroot;
