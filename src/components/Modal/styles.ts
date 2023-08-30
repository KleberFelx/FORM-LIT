import { css } from "lit";

export const styles = css`
  .modal {
    width: 60vw;
    border-radius: 10px;
    overflow: hidden;
  }

  header {
    display: flex;
    flex-direction: column;
    background-color: #1d5ab9;
    text-align: center;
  }

  header h3 {
    margin: 15px;
  }

  .partition {
    width: 100%;
    border: 0px;
    height: 1px;
    min-height: 2px;
    background-image: -webkit-linear-gradient(
      left,
      rgb(240, 240, 240),
      #1d5ab9,
      rgb(240, 240, 240)
    );
  }

  p {
    margin: 0;
    color: #1d5ab9;
    font-weight: bold;
    font-size: 0.875rem;
  }

  main {
    background-color: #fffffff2;
    padding: 20px;
  }

  .selection {
    display: grid;
    grid-template-columns: 20% 25% 25% auto;
    align-items: center;
    column-gap: 10px;
    margin-bottom: 20px;
  }

  .selection button {
    /* background-color: #1d5ab9; */
    color: #1d5ab9;
    width: 100%;
    padding: 10px;
  }

  button {
    font-size: 0.875rem;
    cursor: pointer;
    background-color: #b2d0fffc;
    color: #1d5ab9;
    font-weight: bold;
    border: none;
    padding: 15px;
    border-radius: 8px;
    font-family: "Montserrat";
    transition: all 150ms ease-in-out;
  }
  button:hover {
    cursor: pointer;
    background-color: #95bbf7fb;
    color: #fff;
  }

  .dataWorkshops {
    display: grid;
    grid-template-columns: 20% 25% 25% auto;
    column-gap: 10px;
    margin-top: 1rem;
    align-items: center;
  }

  .colors {
    font-family: "Montserrat", sans-serif;
    background-color: white;
    color: #1d5ab9;
    border: 1px solid #000;
    outline: none;
    font-size: 0.875rem;
    padding: 8px;
    border-radius: 6px;
    font-weight: bold;
    position: relative;
  }

  input[type="radio"] {
    all: unset;
    position: absolute;
    inset: 0;
    /* appearance: none; */
  }

  .colors:nth-of-type(1) {
    font-family: "Montserrat", sans-serif;
    background-color: #e1faed;
    border: 1px solid #1fc300;
    color: #1fc300;
  }
  .colors:nth-of-type(2) {
    font-family: "Montserrat", sans-serif;
    background-color: #fffee0;
    border: 1px solid #b1ab00;
    color: #b1ab00;
  }
  .colors:nth-of-type(3) {
    font-family: "Montserrat", sans-serif;
    background-color: #477cd128;
    border: 1px solid #1d5ab9;
  }

  footer {
    margin-top: 20px;
  }

  @media (max-height: 708px) {
    .dataWorkshops {
      margin-top: 0.375rem;
    }
  }
`;
