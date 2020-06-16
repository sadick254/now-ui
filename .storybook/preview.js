import {h} from 'preact';
import {addDecorator} from '@storybook/preact';
import Helmet from 'preact-helmet';

addDecorator(storyFn => (
  <div>
    <Helmet
      link={[
        {
          rel: 'stylesheet',
          href:
            'https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap',
        },
      ]}
    />
    <div style={{fontFamily: 'Open Sans'}}>{storyFn()}</div>
  </div>
));
