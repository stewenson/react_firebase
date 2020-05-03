import styled, {keyframes} from "styled-components";

const opacity = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;
export const MovieTitle = styled.div`
    animation: 1.6s ${opacity};
    font-style: italic;
    font-family: serif;
    font-weight: 900;
    font-size: 40px;
`;