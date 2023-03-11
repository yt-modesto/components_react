import { createContext, useState } from "react";

//Types
export interface Token {
  token: string;
}
type PropsAuth = {
  children: JSX.Element;
};

const tokenExempl = { token: "dhagdhsagdh#$$%%" };

export const ContextAuthentication = createContext({});

export const AuthContext = (props: PropsAuth) => {
  const [estadoToken, setestadoToken] = useState(tokenExempl);
  return (
    <ContextAuthentication.Provider value={{ estadoToken, setestadoToken }}>
      {props.children}
    </ContextAuthentication.Provider>
  );
};
