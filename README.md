# AutoCoder

AutoCoder is a Hyperskill's learning project. It's required a public repository.
Description also required over 50 words.
This practice project is an automated code generation tool designed to speed up the software development process by generating boilerplate code, templates, and other repetitive structures based on issues and predefined patterns.

Features
- **Code Templates**: Jumpstart your projects with a variety of language-specific templates;
- **Custmizable Generation**: Tailor the generated code to your specific needs by specifying your prompt as a GitHub Issue;
- **Integration Support**: Works as part of your CI/CD pipeline using workflows with GitHub Actions;


name: 'AutoCoder'
description: 'This action automates the process of generating code from GitHub issues using OpenAIs ChatGPT and subsequently creates a pull request with the generated code for review.'
author: 'Your Name or Organization'

inputs:
  github_token:
    description: 'Personal access token (PAT) used for GitHub API authentication. This token is required to create pull requests and handle other repository interactions.'
    required: true
  openai_api_key:
    description: 'API key for OpenAI, enabling interactions with the ChatGPT service to generate code based on issue descriptions.'
    required: true
  issue_label:
    description: 'The label assigned to GitHub issues that should be processed by the AutoCoder action. Only issues with this label will trigger the code generation process.'
    required: true
    default: 'autocoder-bot'

outputs:
  pull_request_url:
    description: 'The URL of the pull request that has been automatically created, containing the auto-generated code for review and potential merging.'

runs:
  using: 'composite'
  steps:
    - name: Greet Users
      run: echo "Hello, welcome to AutoCoder! Let's generate some code."
      shell: bash
    - name: Generate Code from Issue
      run: |
        # The script that interacts with ChatGPT and generates code goes here.
      shell: bash
      env:
        GITHUB_TOKEN: ${{ inputs.github_token }}
        OPENAI_API_KEY: ${{ inputs.openai_api_key }}
    - name: Create Pull Request
      run: |
        # The script that creates a pull request with the generated code goes here.
      shell: bash
      env:
        GITHUB_TOKEN: ${{ inputs.github_token }}
    # Add additional steps as necessary, replicating the logic from your original workflow.
