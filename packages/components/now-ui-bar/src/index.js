import {h} from 'preact';
import scoped from 'scoped-style';

const styled = scoped(h);

const StyledBarContainer = styled('div')`
  width: ${({width}) => width};
  height: ${({height}) => height};
  font-size: 0.8rem;
  text-align: center;
`;

const StyledBar = styled('div')`
  background-color: ${({backgroundColor}) => backgroundColor};
  width: 100%;
  height: 100%;
  position: relative;
  border-radius: ${({borderRadius}) => borderRadius};
`;

const FillBar = styled('div')`
  background-color: ${({fillColor}) => fillColor};
  width: 100%;
  position: absolute;
  bottom: 0;
  height: ${({fillHeight}) => fillHeight};
  border-radius: ${({borderRadius}) => borderRadius};
`;

const Bar = ({
  width,
  height,
  backgroundColor,
  fillColor,
  fillHeight,
  titleAbove,
  titleBelow,
  barBorderRadius,
  fillBorderRadius,
}) => (
  <StyledBarContainer width={width} height={height}>
    {titleAbove}
    <StyledBar backgroundColor={backgroundColor} borderRadius={barBorderRadius}>
      <FillBar
        fillColor={fillColor}
        fillHeight={fillHeight}
        borderRadius={fillBorderRadius}></FillBar>
    </StyledBar>
    {titleBelow}
  </StyledBarContainer>
);

export default Bar;
