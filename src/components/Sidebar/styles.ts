import { css } from "lit";

export const styles = css`
  aside {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    position: absolute;
    left: 10px;
    top: 0;
    width: 100px;
    height: 100vh;
    gap: 20px;
    padding-right: 10px;
    border-right: 1px solid #ccc1;
    transition: all 200ms ease-in-out;
    align-items: center;
  }
  img {
    margin-top: 30px;
    height: 40px;
  }

  .items {
    display: flex;
    flex-direction: column;
    transition: all 600ms ease-in-out;
  }

  .large{
    width: 200px;
  }

  button {
    margin-top: 30px;
    transition: all 600ms ease-in-out;
  }

  .none {
    opacity: 0;
  }
`;
