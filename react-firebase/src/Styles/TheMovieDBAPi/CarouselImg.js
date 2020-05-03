import styled from "styled-components";
import {keyframes} from "styled-components";

const opacity = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export const CarouselImage = styled.img`
    animation: 1s ${opacity};
    width: 100%;
    height: auto;
    border-radius: 20px;
    padding: 0px 4%;
`;

