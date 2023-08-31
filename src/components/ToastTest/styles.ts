import { css } from "lit";

export const styles = css`

  .toast {
    position: absolute;
    z-index: 1;
    background-color: #ffffffde;
    padding: 10px;
    border-radius: 6px;
    right: 0;
    top: 0;
    gap: 10px;
    display: flex;
    align-items: center;
    box-shadow: 0px 0px 10px 0px #242424;
    overflow: hidden;
    margin: 30px;
  }

  .toast p {
    color: #1d5ab9;
    font-size: 1rem;
  }

  .toast img {
    object-fit: cover;
    width: 20px;
  }
`;
