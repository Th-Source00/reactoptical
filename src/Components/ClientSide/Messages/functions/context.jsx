import React, { useState, createContext } from "react";
/// import { PersonObject } from "react-chat-engine-advanced";

const Context = createContext({
  user: undefined,
  setUser: () => {},
});

const ContextProvider = (props) => {
  const [user, setUser] = useState(undefined);
  const value = { user, setUser };

  return <Context.Provider value={value}>{props.children}</Context.Provider>;
};

export { Context, ContextProvider };





























// import { useState, createContext, ReactNode } from "react";
// import { PersonObject } from "react-chat-engine-advanced";

// export interface ContextInterface {
//   user: PersonObject | undefined;
//   setUser: (u: PersonObject | undefined) => void;
// }

// interface ProviderInterface {
//   children: ReactNode;
// }

// export const Context = createContext<ContextInterface>({
//   user: undefined,
//   setUser: () => {},
// });

// export const ContextProvider = (props: ProviderInterface) => {
//   const [user, setUser] = useState<PersonObject | undefined>(undefined);
//   const value = { user, setUser };

//   return <Context.Provider value={value}>{props.children}</Context.Provider>;
// };
