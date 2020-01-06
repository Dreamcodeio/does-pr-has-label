const core = require("@actions/core");

const github = require("@actions/github");

const label = core.getInput("label");

core.setOutput("label", label);
const hasLabel = github.context.payload.pull_request.labels.some(
  item => item.name === label
);
core.setOutput("hasLabel", hasLabel);

console.log(`Does 'pull_request' has '${label}' label?: ${hasLabel}`);
console.log(`You can use this output as 'steps.<step id>.outputs.hasLabel'`);
