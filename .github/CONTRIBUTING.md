# Contributing

Thank's for you interest in contributing! :tada::+1:

This are the common guidelines to contribute to `react-payment-card-component`. Please ensure the following guidelines are being followed by you and any other contributor.

## Code of conduct

This project and everyone participating in it is governed by the [Pagar.me Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code. Please report unacceptable behavior to [developers@pagar.me](mailto:developers@pagar.me).

## How can I contribute?

Help us maintaining this project by reporting bugs, improving our codebase, creating more documentation and submiting new pull requests for features you would like to see in this project.

## Guidelines :rotating_light:

### Speak English

English is an universal language used across the world and in the vast majority of tools and coding vocabulary.

### Write good commit messages

We follow the [pagarme/git-style-guide](https://github.com/pagarme/git-style-guide). Every commit/branch/pull_request must follow its guidelines.

### How to report a bug

If you find a security vulnerability, do NOT open an issue. Email [developers@pagar.me](mailto:developers@pagar.me) instead.

When reporting a bug make sure to include:
- The project version you are running
- Your OS
- Node.js version
- Steps to reproduce
- Current and expected behavior

### Code style

Make sure that when writing code you are following [Pagarme's style guide](https://github.com/pagarme/javascript-style-guide)

## Contributing

Fork the repo and clone it in your machine: `git clone git@github.com:YOUR_USERNAME/react-payment-card-component.git`

#### Install the dependencies

> Although we higly recommend you using yarn for this project, we don't demand it, so feel free to use other package managers.

```sh
yarn
```

or

```sh
npm i
```

#### Make sure the tests are passing

```sh
yarn test
```

or

```sh
npm run test
```

#### Start Storybook

[Storybook](https://storybook.js.org/) is like a playground so you can see the components up and running before importing it in your project.

To start the Storybook in your local machine, simply run: 

```sh
yarn start
```

or

```sh
npm run start
```

#### Creating new stories

If you add new styles, remember to add a corresponding Story so we can see a rendered example.

Do it by creating a new _.js_ file in  `./stories` and making it available by exporting it in `./stories/index.js`.

The file should be something like this at the end: 

```js
import React from 'react'
import { storiesOf } from '@storybook/react'
import PaymentCardContainer from './PaymentCardContainer'

storiesOf('BankName', module)
  .add('CardType1', () => (
    <PaymentCardContainer
      bank="bankName"
      type="type1"
      number="4111111111111111"
      cvv="444"
      holderName="Ygritte Snow"
      expiration="12/21"
    />
  ))
  .add('CardType2', () => (
    <PaymentCardContainer
      bank="bankName"
      type="type2"
    />
  ))
```

#### Opening your PR

- Make sure the tests still passes (and that you added new ones if needed)
- Fill the PR template when opening it trough GitHub
- Include screenshots and animated GIFs whenever possible.

If in doubt, just send us a PR or open an issue to discussion! We're always happy for receiving contributions!
