"use strict";
const pulumi = require("@pulumi/pulumi");
const azure = require("@pulumi/azure");


class VNET extends pulumi.ComponentResource{
    constructor(vnetname,location,resourceGroupName,vspace,networkSecuritygroup1,networkSecuritygroup2,networkSecuritygroup3,subnet1,subnet2,subnet3,k){
        super(vnetname,location,resourceGroupName,vspace,networkSecuritygroup1,networkSecuritygroup2,networkSecuritygroup3,subnet1,subnet2,subnet3,k); 
        const vnet = new azure.network.VirtualNetwork("K"+k, {
            addressSpaces: [vspace],
            
        
            location: location,
            name: vnetname,
            resourceGroupName: resourceGroupName,
            subnets: [
                {
                    addressPrefix: subnet1,
                    name: "Web_sunet",
                    securityGroup: networkSecuritygroup1,
                },
                {
                    addressPrefix: subnet2,
                    name: "Api_subnet",
                    securityGroup: networkSecuritygroup2,
                },
                {
                    addressPrefix: subnet3,
                    name: "Database_subnet",
                    securityGroup: networkSecuritygroup3,
                },
            ],
            tags: {
                environment: "Public",
            },
    },
    {
        parent: this
});
this.vnetid=vnet.id;
this.vname=vnet.name;
    }
}

module.exports.VNET = VNET;




            
        
