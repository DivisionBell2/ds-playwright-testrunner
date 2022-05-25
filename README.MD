## Purpose
Here are autotests for UI (and some API) of several services. All links and APIs presented here are fake. Real links are with the developer (but he will not share in order to avoid violations of trade secrets =) )

## Installation
1. Install on local machine `NodeJS` at least version 12;
1. Download repository;
2. Run `npm i`;
3. Run and test with pleasure (:

## Structure
**package.json** - contains information about the packages being built.

**playwright.config.ts** - contains global settings for running tests.

**projects/** - contains all working files for all projects.

**projects/sodibr/**, **projects/platform/** - and so on - individual project folder.

**projects/data/** - contains common test data used by all projects.

**projects/api/** - contains api request methods for microservices used in all projects.

**projects/utils/** - contains methods common to all projects.

**projects/examples/** - project with examples illustrating some of the possibilities.

## Running Tests Locally
Tests are run through the command line. Command `npm run` + information about the test being run.\
**Examples:**\
`npm run test-obr` runs all tests for the service obr;\
`npm run test-design-smoke` runs all tests for the service dsign, tagged @Smoke;\
`npm run test` - runs full regression testing on all projects.

## Running tests on the server
Running tests on the server is done using the yaml file that was hidden =)

## Additional Information
A library for allure-reports has been added to the repository, but is not used by default. If necessary, it can be turned on.

## Report
The reporter from playwright is used as an artifact. The reporter saves autotests, and by default provides the following data in case of negative completion of tests:
- screenshot of the last state of the page before the end of the test;
- video with passing the test;
- trace with all test steps. To run a trace locally, you need:\
        - install NodeJS on local machine (if not installed);\
        - install playwright library with command `npm install playwright -g` with the rights of a user who has the appropriate permission to install (for example sudo);\
        - download zip archive;\
        - execute command in console: `npx playwright show-trace <traceName>.zip`.


Все репортеры хранятся в виде html-страниц в папке plawright-reporter и сортируются по времени создания.

Calling the reporter from the command line is done through a command that appears in the logs at the end of the tests.