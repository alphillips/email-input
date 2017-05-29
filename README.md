# email-input

React email input component

## Usage

### Install
```
npm i @react-ag-components/email-input --save
```
### Use in your project
```
import Input from '@react-ag-components/email-input'
```

```
<EmailInput
  label="Email address"
  id="email-address"
  value={this.state.value}
  onChange={this.onChange('value')}
/>
```

### Properties


## Contributing

Get the repository
```
git clone https://github.com/alphillips/email-input.git
```

Update dependencies
```
npm install
```

Run the project
```
npm start
```

### Deploy to npm
#### Build
`npm run build -- --copy-files`

#### Publish
`npm publish --access public`
