<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/appman-agm/weinsure-prospect">
    <img src="./readme/images/logo.svg">
  </a>
  <h3 align="center">Weinsure Prospect API</h3>
  <p align="center">
    This service is part of the backend of weinsure application, focussing on prospect management features.
  </p>
</p>
​
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#about-the-service">About The Service</a></li>
        <li><a href="#built-with">Built With</a></li>
        <li><a href="#project-file-structure">Project File Structure</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#run-the-application">Run the application</a></li>
      </ul>
    </li>
    <li>
      <a href="#usage">Usage</a>
      <ul>
        <li><a href="#authentication">Authentication</a></li>
        <li><a href="#admin">Admin</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li>
        <a href="#cooperating">Cooperating</a>
        <ul>
            <li><a href="#feature-checklist">Feature checklist</a></li>
            <li><a href="#steps-to-open-a-pr">Steps to open a PR</a></li>
        </ul>
    </li>
    <li><a href="#maintainers">Maintainers</a></li>
  </ol>
</details>

​
## About The Project
​
KTBST provides a platform to support agents in analysing their prospects' needs. The project is built up out of multiple
services supporting the features. The overal application needs to be easily configurable with an admin platform to
enable features and add new types. Most of the services in the project should be configurable or reusable for new
customers.
​
Core features:
​
* Storing prospect data and calculating the need for insurance from survey input
* Comparing different insurance policies and comparing how they interact with the need of the prospect
* Going through the full process of applying for an insurance policy
​
<!-- ABOUT THE SERVICE -->
​
### About The Service
​
Weinsure Prospect API focuses on the management of existing policies, address and prospect information. The API tries
not to make the distinguishment between different types that are used for presenting the data. Wherever it is neccesary
to do so, the type(s) can be configured in the environment variables.
​
<!-- BUILT WITH -->
​
### Built With
​
The main framework used is Spring Framework, we provide documentation using the API Blueprint description language
​
* [Spring](https://spring.io/projects/spring-framework)
* [API Blueprint](https://apiblueprint.org/)
​
### Project File Structure
​
Naturally, the service is following all the guidelines described
on [appmanhowwework.web.app](https://appmanhowwework.web.app/how-we-work/pages/spring-boot-guideline.html). I would like
to add that the package **serializer** only contains code for _outgoing_ data structures, and **deserializer** contains
code and validations for _incoming_ data structures.
​
<!-- GETTING STARTED -->
​
## Getting Started
​
The current configuration for Docker or docker-compose requires your machine to build the application manually.
Optionally, you can run the application directly from the jar file after a build.
​
### Prerequisites
​
Please install the following:
​
- Java
- Maven (optional, use `./mvnw` if not installed)
- Docker
​
### Run the application
​
Build (Required)
​
```bash
$ ./mvnw package
```
​
Run using the jar
​
```bash
$ java -jar weinsure-prospect-api/target/weinsure-prospect-api.jar
```
​
Run with Docker
​
```bash
// Start a database container
$ docker run -e POSTGRES_PASSWORD=password -p 5432:5432 -d circleci/postgres 
​
$ docker build -t weinsure-prospect-api .
​
$ docker run -p 8080:8080 -e SPRING_DATASOURCE_URL='jdbc:postgresql://172.17.0.1:5432/postgres' -e SPRING_DATASOURCE_PASSWORD=password -e SPRING_PROFILES_ACTIVE=local weinsure-prospect-api
```
​
Run with docker-compose
​
```bash
$ docker-compose build
​
$ docker-compose up
```
​
<!-- USAGE EXAMPLES -->
​
## Usage
​
For using the API, please refer to
the [API blueprint files](https://github.com/appman-agm/weinsure-prospect/tree/develop/mock/internal) as documentation.
​
The service is responsible for storing several entities used in the overal project, you can find the ER diagram of the
full
project [here](https://app.lucidchart.com/lucidchart/2188d2d5-cb69-4797-bb3c-2b3c80f44fe5/edit?page=0_0#?folder_id=home&browser=icon)
.
​
### Authentication
​
There are two ways the application can authenticate the calling service. First is using a X-Userinfo http-header
containing a _json string with field 'email'_ that is base64 encoded. The email has to be a valid email address. This is
provided in production by a gateway plugin that handles the authentication and contains trusted information.
​
Example
​
```xpath
X-Userinfo: eyJlbWFpbCI6ICJib2F0QGFwcG1hbi5jb20ifQ
```
​
You can mock the header for local calls using a chrome extention
called [ModHeader](https://chrome.google.com/webstore/detail/modheader/idgpnmonknjnojddfkpgkljpfnnfcklj). This extention
adds the custom header to each call your frontend service is making.
​
### Admin
​
The admin endpoints are intended only to be used by AppMan core webadmin service, it is following the same data
structure as the core masterdata service. The admin also needs to be authenticated using the X-Userinfo http-header.
Alternatively to the API Blueprint, you can find
a [Postman collection here](https://drive.google.com/file/d/1FflSs6Rd8iJj01r0fx9eYvWThbiIqp2W/view?usp=sharing).
​
<!-- ROADMAP -->
​
## Roadmap
​
See the [board](https://agentmate.atlassian.net/browse/SQA) for more information about the tasks left in this project.
​
<!-- COOPERATING -->
​
## Cooperating
​
To make changes, you create a new branch and submit a PR. The format of Pull Requests, along with other practices in the
company, can be found
on [appmanhowwework.web.app](https://appmanhowwework.web.app/how-we-work/pages/pull-request-template.html).
​
### Feature checklist
​
- For each feature, both positive and negative test have been added and pass
- \+ Blueprint has been extended with the new features or updated to represent the current API
- `// Comments have been cleaned`
- `System.out.println("Debug code is removed completely")`
- Spellign has been checked
- `th.co.appman.weinsure.exception.ServiceException: Errors resulting from dependencies are being handled correctly`
- `logger.info("Don't forget to log stuff")`
- `if (myString.equals("Hard coded text")) { return "No hard coding!" }`
- Naming is according to company_standards and clearlyUnderstandable
​
### Steps to open a PR
​
1. Create your Feature Branch (`git checkout -b feature/awesome-feature`)
2. Add your changes to the working directroy (`git add .`)
3. Review your changes (`git status`)
4. Commit your Changes (`git commit -m 'Add some awesome feature'`)
5. Push to the Branch (`git push origin --set-upstream origin feature/awesome-feature`)
6. _Open a [Pull Request](https://github.com/appman-agm/weinsure-prospect/pulls)_
​
When the PR has 2 approvals, it is eligible to be merged into develop branch. Please **delete the branch** after being
merged.
​
<!-- MAINTAINERS -->
​
## Maintainers
​
[Brecht Pallemans](https://www.linkedin.com/in/brecht-pallemans/) - brecht.p@appman.co.th
​
Project Link: [https://github.com/appman-agm/weinsure-prospect](https://github.com/appman-agm/weinsure-prospect)


