"use strict";
const pulumi = require("@pulumi/pulumi");
const azure = require("@pulumi/azure");

const testResourceGroup = new azure.core.ResourceGroup("test", {
    location: "West US",
    name: "pulumitestrg",
});
const testPlan = new azure.ddosprotection.Plan("test", {
    location: testResourceGroup.location,
    name: "ddospplantestpulumi",
    resourceGroupName: testResourceGroup.name,
});
const testNetworkSecurityGroup = new azure.network.NetworkSecurityGroup("test", {
    location: testResourceGroup.location,
    name: "pulumitestnsg",
    resourceGroupName: testResourceGroup.name,
});
const testVirtualNetwork = new azure.network.VirtualNetwork("test", {
    addressSpaces: ["10.0.0.0/16"],
    ddosProtectionPlan: {
        enable: false,
        id: testPlan.id,
    },
    dnsServers: [
        "10.0.0.4",
        "10.0.0.5",
    ],
    location: testResourceGroup.location,
    name: "pulumivnet",
    resourceGroupName: testResourceGroup.name,
    subnets: [
        {
            addressPrefix: "10.0.1.0/24",
            name: "subnet1",
        },
        {
            addressPrefix: "10.0.2.0/24",
            name: "subnet2",
        },
        {
            addressPrefix: "10.0.3.0/24",
            name: "subnet3",
            securityGroup: testNetworkSecurityGroup.id,
        },
    ],
    tags: {
        environment: "Production",
    },
});