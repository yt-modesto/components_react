import styled, { css } from "styled-components";

export interface IPropsCardPlatinium {
  stylesTitle?: string;
  stylesBackground?: string;
  stylesWigth?: number;
  stylesHeight?: number;
}
export const CardPlatinium = styled.div`
  ${(props: IPropsCardPlatinium) => css`
    @media (max-width: 320px) {
      position: relative;
      width: ${props.stylesWigth !== null ? props.stylesWigth : 280}px;
      height: ${props.stylesHeight !== null ? props.stylesHeight : 300}px;
      border-radius: 0.5rem;
      margin: 10px;
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

      p {
        font-size: 1.3rem;
      }
    }
    @media (max-width: 375px) {
      position: relative;
      width: ${props.stylesWigth !== null ? props.stylesWigth : 340}px;
      height: ${props.stylesHeight !== null ? props.stylesHeight : 300}px;
      border-radius: 0.5rem;
      margin: 10px;
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

      p {
        font-size: 1.3rem;
      }
    }
    @media (max-width: 425px) {
      position: relative;
      width: ${props.stylesWigth !== null ? props.stylesWigth : 340}px;
      height: ${props.stylesHeight !== null ? props.stylesHeight : 300}px;
      border-radius: 0.5rem;
      margin: 10px;
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

      p {
        font-size: 1.5rem;
      }
    }
    @media (min-width: 768px) {
      position: relative;
      width: ${props.stylesWigth !== null ? props.stylesWigth : 280}px;
      height: ${props.stylesHeight !== null ? props.stylesHeight : 300}px;
      border-radius: 0.5rem;
      margin: 10px;
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

      p {
        font-size: 1.5rem;
      }
    }
    @media (min-width: 1440px) and (orientation: landscape) {
      position: relative;
      width: ${props.stylesWigth !== null ? props.stylesWigth : 280}px;
      height: ${props.stylesHeight !== null ? props.stylesHeight : 300}px;
      border-radius: 0.5rem;
      margin: 10px;
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

      p {
        font-size: 1.5rem;
      }
    }
    @media (min-width: 2560px) {
      position: relative;
      width: ${props.stylesWigth !== null ? props.stylesWigth : 280}px;
      height: ${props.stylesHeight !== null ? props.stylesHeight : 300}px;
      border-radius: 0.5rem;
      margin: 10px;
      padding: 50px;
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

      p {
        font-size: 3.5rem;
      }
    }
  `}
`;
