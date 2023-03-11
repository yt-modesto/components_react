import * as Styled from "../../css/FormsLogin/index";
export type PropsInputCustom = {
  type?: string;
  name: string;
};
export const InputCustom = (props: PropsInputCustom) => {
  return (
    <Styled.FormLoginInput>
      <input type={props.type ? props.type : "text"} name={props.name} />
    </Styled.FormLoginInput>
  );
};
