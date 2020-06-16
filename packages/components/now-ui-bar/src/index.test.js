import {h} from 'preact';
import {render} from '@testing-library/preact';
import Bar from '.';

describe('Bar', () => {
  it('should render correctly', () => {
    const {container} = render(
      <Bar
        width="48px"
        height="150px"
        backgroundColor="#8C4C44"
        fillColor="#D2634C"
        fillHeight="20%"
        titleAbove="27.5%"
        titleBelow="18-24"
        barBorderRadius="4px"
        fillBorderRadius="0 0 4px 4px"
      />,
    );
    expect(container).toMatchSnapshot();
  });
});
