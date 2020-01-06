const core = require("@actions/core");

const github = require("@actions/github");

const label = core.getInput("label");

core.setOutput("label", label);
const hasLabel = github.context.payload.pull_request.labels.some(
  name => name === label
);
core.setOutput("hasLabel", hasLabel);

console.log(`Does Pull Request has ${label} label?: ${hasLabel}`);
