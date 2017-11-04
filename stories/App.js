import React from 'react'
import { storiesOf } from '@storybook/react'

import App from '../src/App'

storiesOf('App', module)
  .add('react app default', () => (
    <div>
      <App />
    </div>
  ))
