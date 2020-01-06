# Does PR has the label?

Do you want to know if a PR has a particular label? You can use this action to easily chech that, and use the output as you need:

Example:

```
name: CI
on: 
  pull_request:
    types: [opened, labeled]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
    - uses: Dreamcodeio/pr-has-label-action@master
      id: checkLabel
      with:
        label: PROVISION:FEATURE_BRANCH
    - name: Does 'pull_request' has ${{ steps.checkLabel.outputs.checkedLabel }} label? 
      run: echo "${{ steps.checkLabel.outputs.hasLabel }}" 
```
