const { getOptions } = require('loader-utils')
const { validate } = require('schema-utils')
const MarkdownIt = require('markdown-it')

const schema = {
  type: 'object',
  properties:{
    html: { type:'boolean' },
    linkify: { type:'boolean' }
  }
}

module.exports = function(source){
  
  const options = getOptions(this)
  const md = MarkdownIt(options)
  validate(schema, options)
  
  return md.render(source)
} 