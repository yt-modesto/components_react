import * as styled from "../../css/TitleForCards";

export type PorpsTitleCards = {
  children: string;
};
export function TitleCards(props: PorpsTitleCards) {
  return <styled.TitleCard>{props.children}</styled.TitleCard>;
}
