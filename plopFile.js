module.exports = plop => {
  plop.setGenerator('component', {
    description: 'Create a component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Component name',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'packages/components/open-ui-{{lowerCase name}}/package.json',
        templateFile: 'plop-templates/package.json',
      },
      {
        type: 'add',
        path: 'packages/components/open-ui-{{lowerCase name}}/src/index.js',
        templateFile: 'plop-templates/index.mustache',
      },
      {
        type: 'add',
        path:
          'packages/components/open-ui-{{lowerCase name}}/src/index.test.js',
        templateFile: 'plop-templates/index.test.mustache',
      },
      {
        type: 'add',
        path:
          'packages/components/open-ui-{{lowerCase name}}/src/index.stories.js',
        templateFile: 'plop-templates/index.stories.mustache',
      },
      {
        type: 'add',
        path: 'packages/components/open-ui-{{lowerCase name}}/README.md',
        templateFile: 'plop-templates/README.md',
      },
      {
        type: 'add',
        path: 'packages/components/open-ui-{{lowerCase name}}/CHANGELOG.md',
        templateFile: 'plop-templates/CHANGELOG.md',
      },
    ],
  });

  const date = new Date();
  const today = date.toISOString().substr(0, 10);

  plop.setGenerator('content:new', {
    description: 'Create content for today',
    prompts: [
      {
        type: 'input',
        name: 'today',
        message: 'Create content for date',
        default: today,
      },
      {
        type: 'input',
        message: 'What is the component type?',
        name: 'componentType',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'content/{{today}}/{{lowerCase componentType}}/index.js',
      },
    ],
  });
};
