import { useEffect, useState } from "react";
import * as styled from "../../css/TitleForCards";

export interface PorpsTitleCards {
  title?: string;
}

export function TitleCards(props: PorpsTitleCards) {
  const [state, setState] = useState("Default Title");
  useEffect(() => {
    if (props.title !== undefined) {
      setState(props.title);
    }
  }, [props.title, state]);

  return (
    <styled.TitleCard>
      <h1>{state}</h1>
    </styled.TitleCard>
  );
}
