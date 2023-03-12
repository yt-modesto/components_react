import styled, { css } from "styled-components";

export const TitleCard = styled.div`
  ${() => css`
    @import url("https://fonts.googleapis.com/css2?family=Pacifico&display=swap");
    @media screen and (max-width: 320px) {
      padding: 10px;
      h1 {
        font-size: 2rem;
        font-family: "Pacifico", cursive;
        align-self: center;
      }
    }
    @media screen and (max-width: 375px) {
      padding: 10px;
      h1 {
        font-size: 2.4rem;
        font-family: "Pacifico", cursive;
        align-self: center;
      }
    }
  `}
`;
