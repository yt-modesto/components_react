import * as Styles from "../../../css/FormsLogin/index";
import { ButtonLogin } from "../../ButtonLogin";
import { InputCustom } from "../../InputCustom";
export type PropsFormsLogin = {
  children?: Array<JSX.Element>;
};

export const FormsLogin = (props: PropsFormsLogin) => {
  return (
    <Styles.FormLoginContainer>
      <form action="/auth/login" method="POST">
        <InputCustom type={"email"} name={"email"} />
        <InputCustom type={"password"} name={"password"} />
        <ButtonLogin tipo={"submit"} text={"login"} />
      </form>
    </Styles.FormLoginContainer>
  );
};
