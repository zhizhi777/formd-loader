# Markdown Loader 
A Markdown loader for webpack using markdown-it.

## Installation

```bash
npm install --save-dev formd-loader
```

## Usage

```js
module.exports = {

  //...

  module:{
    rules: [
      {
        test: /\.md$/i,
        use: [
          {
            loader: 'html-loader'
          },
          {
            loader: 'formd-loader',
            options:{
              html: true
            }
          }
        ]
      }
    ],
    
  },
  
  //...

}
```