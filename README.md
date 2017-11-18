# React Payment Card Component | [![GitHub license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/pagarme/react-payment-card-component/blob/master/LICENSE) [![Travis CI Status](https://travis-ci.org/pagarme/react-payment-card-component.svg?branch=master)](https://travis-ci.org/pagarme/react-payment-card-component)

> A modern credit card component for React

<p align="center">
  <img src="card.gif" alt="React Payment Card Component" />
</p>

This React component will help you building your checkout on your e-commerce. 

The first version of a payment card modal was used in [Pagar.me's checkout 1.0](https://codepen.io/pagarme/pen/QqWGOg), but as we're now rewriting it to version 2.0 in React, why not creating a component so people also can use it the way they prefer? 

By having a lot of credit cards from many different banks, brands and types, users will be able to see a digital version of their credit cards as they type the credit card number. 

Check it live at https://pagarme.github.io/react-payment-card-component

## Usage

To use this component in your React app, start by adding it to the project dependencies list:

npm version > 5

```sh
npm i react-payment-card-component
```

npm version < 5

```sh
npm i react-payment-card-component --save
```

yarn

```sh
yarn add react-payment-card-component
```

And then, import it:

```js
import PaymentCard from 'react-payment-card-component'

render () {
  return (
    <PaymentCard
      bank="itau"
      type="black"
      brand="mastercard"
      number="4111111111111111"
      cvv="202"
      holderName="Owen Lars"
      expiration="12/20"
      flipped={false}
    />
  );
}
```

### Flipping the card

You can use React to manage the card state and implement your own logic, like flipping the card with a button or when user is typing the CVV (Card Verification Value).

```js
flipCard () {
  const flipped = !this.state.flipped
  this.setState({ flipped })
}
```

### Available Props

| Name | Type | Required | Description | 
| ---- | ---- | -------- | ----------- |
| `bank` | String | **true** | The bank prop defines the major style for the card, like the elements positions, background color and logos. Examples.: _default_, _itau_, _santander_, _nubank_ |
|  `type` | String | **false** (although it's not required, some styles may not properly work without it) | The type is used alongside with bank to get the final card styling. They are the types of a credit card that each bank can emit. Examples.: _gold_, _black_, _platinum_ | 
| `brand` | String | **true** | This prop is used to get the correct logo and position of the brand used in the card. Examples: _mastercard_, _visa_. |
| `number` | String | **false** | The card number printed in the card |
| `cvv`| String | **false** | 3-digit CVV (Card Verification Value) |
| `holderName` | String | **false** | The holder name as printed in the card |
| `expiration`| String | **false** | The expiration month and year following the pattern: _MM/YY_ | 
| `flipped` | Boolean | **false** | If `true` the backface of the card will be shown | 

## Customizing

### Styling

The CSS files to manage the banks styles are under `./src/components/PaymentCard/styles`, where each bank needs its own file under the  `banks` folder and have it imported in the main `./src/components/PaymentCard/styles/index.css` file.

To add a new style, remember to create classes following the pattern: **_bankName_-_cardType_**: 

```css
.santander-black {
  background: #000000;
}
```

### Logos

Each bank should have a proper logo corresponding to the one in the card, bank logos are placed under  `./src/components/Logo/images/banks`, remember to keep the files as small as possible and to export them in `./src/components/Logo/images/banks/index.js`.

## Contributing

We're always happy with contributors helping us evolving this project, so feel free to warn us about any bugs you found, new features you think might be cool for the project and also by adding new banks so we can have a lot of different credit cards. 

Start by reading our [Contributing guide](.github/CONTRIBUTING.md) and checking our [Issues page](https://github.com/pagarme/react-payment-card-component/issues).

## License

This project is licensed under [MIT License](./LICENSE)
