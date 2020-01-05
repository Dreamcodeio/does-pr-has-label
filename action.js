const core = require("@actions/core");

const github = require("@actions/github");

const context = github.context;

console.log(JSON.stringify(github.context));
console.log(JSON.stringify(process.env));
