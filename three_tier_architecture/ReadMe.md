
# Deploying the  Three  tier architecure using Pulumi


## THREE TIER ARCHITECTURE
The three   architecture  is a basic model for developing a web database application and communication is done using this 3-level application logic.
The  database tier is  where data gets stored in a database server and is known as fully secure . Various CRUD operations are being performed here. Next is the Api layer inside the Api subnet which provides a communication between the web server and the data base server. Finally there is a web server which aacepts all the internet requests and send requests to the api server.

In this  script  two virtual networks are created  with three subnets each and having three network security groups associated with the subnets.Also  Peering is enabled betwwen the two virtual networks.

Note: Incase of Disaster Recovery we are modifying the database NSG so that the database subnet of virtual network 1 can send its replica to database subnet of virtual network 2 through a specific port.


<p align="center">
<img src="./Diagrams/HIghLevel_ThreeTierArchitecture.png"></br>
Figure 1.1: High Level View of the Architecture 
</br></br>
<img src="./Diagrams/highlevelpicture.png">
Figure 1.2: Detailed Architecture in Azure

</p>

###  Detail of the Architecture implemented
<p allign="center">
<img src="./Diagrams/Scenario.png">
Figure 1.3 High Level View of the Architecture </br>
</p>

## Method  to deploy  the javascript file using Pulumi in Azure:

### Installation
Install <b>Pulumi package</b> for your respective Operating System and setup Pulumi CLI. (Refer [`Download Pulumi`](https://www.pulumi.com/docs/reference/install/) )

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
Note: If Azure CLI is working on your local system , skip this step 

- Create a New Project
```bash
$ mkdir <folder name> && cd <folder name>
$ pulumi new azure-javascript
```
Note: If ```pulumi new``` is being used for the first time, you will be asked to login to [`Pulumi Cloud Console`](https://app.pulumi.com/). Sign up and Login there using Azure Credentials.

It will ask for project name and stack name. Change it as desired or to use default just press Enter.

It will generate some project files in your current folder which are as follows: <br />
- ```Pulumi.yaml``` which defines your project.<br />

- ```Pulumi.dev.yaml``` which contains stack configuration values.<br />

- ```index.js``` which defines your stack resources.
- Download the JavaScript files in the folder 
### Command Line Interface(CLI)

On the  CLI type the command .
```bash
pulumi new
pulumi up
```
## Author
[`Devyanshi Tiwari`](https://github.com/devyanshi-t)<br />

