import * as Styled from "../../css/FormsLogin/index";
export type propsButtonLogin = {
  tipo?: string;
  text?: string;
};
export const ButtonLogin = (props: propsButtonLogin) => {
  return (
    <Styled.FormLoginButton>
      <button type="submit">{props.text}</button>
    </Styled.FormLoginButton>
  );
};
