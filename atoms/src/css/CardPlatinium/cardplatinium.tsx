import styled, { css } from "styled-components";

export interface IPropsCardPlatinium {
  stylesTitle?: string;
  stylesBackground?: string;
  stylesWigth?: number;
  stylesHeight?: number;
}
export const CardPlatinium = styled.div`
  ${(props: IPropsCardPlatinium) => css`
    position: relative;
    width: ${props.stylesWigth !== undefined ? props.stylesWigth : 300}px;
    height: ${props.stylesHeight !== undefined ? props.stylesHeight : 500}px;
    border-radius: 1.5rem;
    margin: 20px;
    padding: 20px;

    background: linear-gradient(
        38.28deg,
        rgba(125, 205, 176, 0.2) 24.83%,
        rgba(23, 105, 99, 0.2) 38.93%,
        rgba(71, 192, 161, 0.2) 38.93%,
        rgba(71, 192, 161, 0.188) 41.28%,
        rgba(5, 0, 241, 0.188) 82.91%
      ),
      #ffffff;
    -webkit-box-shadow: 2px 2px 49px -3px #000000;
    box-shadow: 2px 2px 49px 0px #000000;
  `}
`;
