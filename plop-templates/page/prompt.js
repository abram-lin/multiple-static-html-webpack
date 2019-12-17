const { notEmpty } = require('../utils.js')

module.exports = {
  description: 'generate a page',
  prompts: [{
    type: 'input',
    name: 'name',
    message: 'page name please',
    validate: notEmpty('name')
  },
  {
    type: 'checkbox',
    name: 'blocks',
    message: 'Blocks:',
    choices: [{
      name: 'adaptive',
      value: 'adaptive',
      checked: true
    }],
    validate(value) {
      // if (value.indexOf('adaptive') === -1 && value.indexOf('template') === -1) {
      //   return 'Page require at least a <script> or <template> tag.'
      // }
      return true
    }
  }
  ],
  actions: data => {
    const name = '{{name}}'
    const actions = [{
      type: 'add',
      path: `src/pages/${name}/index.js`,
      templateFile: 'plop-templates/page/index-js.hbs',
      data: {
        name: name,
        adaptive: data.blocks.includes('adaptive')
      }
    }, {
      type: 'add',
      path: `src/pages/${name}/index.scss`,
      templateFile: 'plop-templates/page/index-scss.hbs',
      data: {
        name: name,
        adaptive: data.blocks.includes('adaptive')
      }
    }, {
      type: 'add',
      path: `src/pages/${name}/index.html`,
      templateFile: 'plop-templates/page/index-html.hbs',
      data: {
        name: name,
        adaptive: data.blocks.includes('adaptive')
      }
    }]
    return actions
  }
}
