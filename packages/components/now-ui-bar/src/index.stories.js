import {h} from 'preact';
import {storiesOf} from '@storybook/preact';
import {withKnobs} from '@storybook/addon-knobs';
import Bar from '.';
import notes from '../README.md';

storiesOf('Bar', module)
  .addDecorator(withKnobs)
  .add(
    'default',
    () => {
      return (
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
        />
      );
    },
    {notes},
  );
