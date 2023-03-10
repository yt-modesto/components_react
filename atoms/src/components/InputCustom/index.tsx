import * as Styled from "../../css/FormsLogin/index";
export type PropsInputCustom = {
  type?: string;
};
export const InputCustom = (props: PropsInputCustom) => {
  return (
    <Styled.FormLoginInput>
      <input
        type={props.type ? props.type : "text"}
        value={"clodoaldo.brtp@gmail.com"}
      />
    </Styled.FormLoginInput>
  );
};
