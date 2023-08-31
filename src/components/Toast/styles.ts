import { css } from "lit";

export const styles = css`
  .toast {
    background-color: #fff;
    border-radius: 12px;
    padding: 24px;
    width: 350px;
    height: 240px;
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    align-items: center;
    text-align: center;
    position: absolute;
    z-index: 2;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
  }

  .background {
    position: absolute;
    z-index: 1;
    background-color: #00000065;
    width: 100%;
    height: 100%;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
  }

  img {
    width: 60px;
    object-fit: cover;
    margin-bottom: 25px;
  }

  h3,
  span {
    text-align: center;
    color: #101828;
    margin: 0;
  }

  span {
    color: #667085;
    font-size: 14px;
    font-weight: 400;
    margin-top: 8px;
  }

  .buttons {
    display: flex;
    gap: 16px;
    margin-top: 32px;
  }

  button {
    border-radius: 8px;
    padding: 10px;
    border: 0;
    font-family: "Montserrat", sans-serif;
    border: 1px solid #d0d5dd;
    background-color: #fff;
    color: #344054;
    font-weight: 600;
    font-size: 1rem;
    width: 170px;
    height: 44px;
    cursor: pointer;
    transition: all 200ms ease-in-out;
  }

  button:hover {
    color: black;
    border: 1px solid #b5b5bb;
  }

  button:nth-of-type(2) {
    border: none;
    background-color: #1d5ab9;
    color: #fff;
  }

  button:nth-of-type(2):hover {
    background-color: #164797;
  }
`;
