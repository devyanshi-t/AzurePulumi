# Deploying a Azure Virtual Network using Pulumi

# Installation

-  Before starting to work with Pulumi it is necessarey to install Pulumi.<br/>Install <b>Pulumi package</b> for your respective Operating System and setup Pulumi CLI. (Refer [`Download Pulumi`](https://www.pulumi.com/docs/reference/install/) )

- After Installation, verify pulumi is installed or not by using
```bash
$ pulumi version
```
- Install Node.js (Refer [`Download Node.js`](https://nodejs.org/en/download/) )<br />

- Install <b>Pulumi with Node.js</b> <br/>
Install using npm to use pulumi from JavaScript or TypeScript in Node.js
```bash
$ npm install @pulumi/azure
```
- Configure Azure (Refer [`Azure Configuration`](https://www.pulumi.com/docs/reference/clouds/azure/setup/) )
Note:skip this step , if Azure CLI is working on  the local system , 

- Create a New Project
```bash
$ mkdir <folder name> && cd <folder name>
$ pulumi new azure-javascript
```
Note: If ```pulumi new``` is being used for the first time, you will be asked to login to [`Pulumi Cloud Console`](https://app.pulumi.com/). Sign up and Login using Azure Credentials.

It will ask for project name and stack name. Change it as desired or to use default just press Enter.

It will generate some project files in your current folder which are as follows: <br />
- ```Pulumi.yaml``` which defines your project.<br />

- ```Pulumi.dev.yaml``` which contains stack configuration values.<br />

- ```index.js``` which defines your stack resources.
- Download the JavaScript files of the folder  , paste and replace it in your current folder where Pulumi project is initiated.
- Deploy the Stack using following command
```bash
$ pulumi up
```
## Author
[`Devyanshi Tiwari`](https://github.com/devyanshi-t)<br />