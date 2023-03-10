import styled, { css } from "styled-components";

export const FormLoginContainer = styled.div`
  ${() => css`
    width: 900px;
    height: 500px;
    margin: 20px;
    padding: 30px;
    background: #96c3ce;
    background: -moz-linear-gradient(
      top,
      #96c3ce 0%,
      #1c6ea4 50%,
      #1725c5 100%
    );
    background: -webkit-linear-gradient(
      top,
      #96c3ce 0%,
      #1c6ea4 50%,
      #1725c5 100%
    );
    background: linear-gradient(
      to bottom,
      #96c3ce 0%,
      #1c6ea4 50%,
      #1725c5 100%
    );
  `}
`;

export const FormLoginInput = styled.div`
  ${() => css`
    input {
      width: 600px;
      margin: 20px;
      padding: 15px;
      border-radius: 20px;
      border: 1px solid;
    }
  `}
`;
export const FormLoginButton = styled.div`
  ${() => css`
    button {
      width: 80px;
      padding: 10px;
      background: #29ce36;
      border: none;
      border-radius: 14px;
    }
  `}
`;
