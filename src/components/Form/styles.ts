import { css } from "lit";

export const styles = css`
  .flex {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  form {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 40px 20px;
    width: calc(50vw - 10rem);
  }

  #adress {
    grid-column: 1/3;
  }

  #area {
    grid-column: 1/3;
  }

  textarea {
    color: white;
    border: none;
    border-radius: 0.475rem;
    padding: 10px;
    font-size: 16px;
    resize: none;
    height: 5rem;
  }

  button {
    color: white;
    border: none;
    border-radius: 0.475rem;
    padding: 20px 15px;
    font-size: 18px;
    cursor: pointer;
  }

  h1 {
    font-weight: bold;
    line-height: 0;
    text-align: center;
    margin-bottom: 50px;
  }

  input {
    color: white;
    border: none;
    border-radius: 0.475rem;
    padding: 20px 15px;
    font-size: 16px;
  }

  input::placeholder,
  textarea::placeholder {
    color: #ccc;
  }

  input,
  textarea,
  button {
    font-family: "Montserrat", sans-serif;
    color: white;
  }

  .inputValidation {
    display: flex;
    flex-direction: column;
    position: relative;
  }

  .spanRequired {
    color: #f5666a;
    position: absolute;
    bottom: -30px;
    display: flex;
  }

  .none {
    display: none;
  }

  .required {
    border: 1px solid #f5666a;
  }
`;
