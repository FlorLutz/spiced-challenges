import BoxWithClassName from "../components/BoxWithClassName/BoxWithClassName.js";
import BoxWithStyledComponents from "@/components/BoxWithClassName/BoxWithStyledComponents.js";
import styled from "styled-components";

const StyledFlexContainer = styled.div`
  display: flex;
`;

export default function HomePage() {
  return (
    <StyledFlexContainer>
      <BoxWithClassName />
      <BoxWithClassName isBlack />
      <BoxWithStyledComponents />
      <BoxWithStyledComponents isBlack />
    </StyledFlexContainer>
  );
}
