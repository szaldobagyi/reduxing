# Testing _Redux Todos Example_ Application

Agile testing means continuos feedback (CI/CD) from starting to end of development aiming ensure built-in quality (QA).

This document is short description of concepts, methods and tools have been considered and used during the elaboration. It is a general overview of the workflow in a pragmatic approach.

## Test Planning

Defining time frame and resources required.

Testing should be done by 25/11/2021.

Artifacts:

- test documentation

- test plan

- test framework implementation
  
- test scripts for automation

- automation pipeline

## Test Analysis

Finding out what to test and how.

Test approach like

- manual or automated

- risk based, methodical etc.

## Test Design

Selecting the appropriate test technics like

- static and dynamic

- specification based and structure based

- functional and non-functional

## Test Implementation

Related to architecture of the application, the Test Automation Solution should be implemented. It includes tasks like

- creating algorithms using a suitable programming language and

- creating test procedure descriptions for the manual tests.

## Test Execution

Test execution is collect test results based on

- scripts running via automation and

- manual procedures.

### Static Testing

- reviewing the documentation (as test base)

- reviewing the code base (code convention, quality metrics)

- using IDE's static code analysis feature (syntax errors and warnings)

### Dynamic Testing

Running the software application and evaluate via tools and technics defined in the previous phases of the test workflow.

#### Exploratory Testing

Opening the URL [http://localhost:3000](http://localhost:3000), the opening view should be displayed.

#### Test Automation

Structure of Test Automation Solution:

- ${PROJECt_FOLDER}/tests/**/*.spec.ts (Playwright)

- ${PROJECt_FOLDER}/cypress/integration/**/*.spec.ts (Cypress)

## Test Completion

Publishing the test summary report(s).

## Test Analysis for _RTE_

The test oracle for the application contains:

- the `README.md`

- the source code and
  
- the running application.

Based on the `README.md` file you can figure it out that this is a Node.js application and take a glance at the repository you can get some information about the software architecture.

You can test the testability of the application by reviewing the source code (e.g. looking for ids of UI elements, or complexity in overall)

Once the application has been started and the UI is reachable you can check the application using testing technics like

- exploratory testing.

## CI/CD Pipeline

Implementation based on the [Nodejs.gitlab-ci.yml](https://gitlab.com/gitlab-org/gitlab/-/blob/master/lib/gitlab/ci/templates/Nodejs.gitlab-ci.yml) Node.js template provide by [gitlab.com](https://docs.gitlab.com/ee/ci/examples/#cicd-templates).

---
> Invitation link on [Cypress](https://dashboard.cypress.io/invitation/75a50046-0d2e-4c50-bef2-b63104b2dec5)
