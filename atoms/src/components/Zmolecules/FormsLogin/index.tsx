// import { useState } from "react";
import { useContext } from "react";
import { ContextAuthentication } from "../../../contexts/Auth";
import * as Styles from "../../../css/FormsLogin/index";
import { ButtonLogin } from "../../ButtonLogin";
import { InputCustom } from "../../InputCustom";
export type PropsFormsLogin = {
  children?: Array<JSX.Element>;
};

export const FormsLogin = (props: PropsFormsLogin) => {
  // TODO:terminar
  // const handleSubmit = async () => {
  //   await fetch("http://localhost:3000/auth/login")
  //     .then((response) => {
  //       response.json();
  //     })
  //     .then((res) => setToken(res))
  //     .catch();
  // };

  const contoAuth = useContext(ContextAuthentication);
  return (
    <>
      {console.log(contoAuth)}
      <Styles.FormLoginContainer>
        <form action="http://localhost:3000/auth/login" method="POST">
          {/* TODO:usar onsubmit */}
          <InputCustom type={"email"} name={"email"} />
          <InputCustom type={"password"} name={"password"} />
          <ButtonLogin tipo={"submit"} text={"login"} />
        </form>
      </Styles.FormLoginContainer>
    </>
  );
};
