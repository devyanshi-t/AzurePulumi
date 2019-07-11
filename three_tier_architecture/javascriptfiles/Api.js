"use strict";
const pulumi = require("@pulumi/pulumi");
const azure = require("@pulumi/azure");


class NSG extends pulumi.ComponentResource{
    constructor(location,resourceGroupName,nsgname,i,subnet1,subnet2,subnet3){
        super(location,nsgname,resourceGroupName,i,subnet1,subnet2,subnet3); 
        const nsg = new azure.network.NetworkSecurityGroup("L"+i, {
            location: location,
            name: nsgname,
            resourceGroupName: resourceGroupName,
            securityRules:[
           {        "name": "http_rule",
                
                    "description": "Allow http",
                    "protocol": "*",
                    "sourcePortRange": "*",
                    "destinationPortRanges": [
                        "80",
                        "443"
                    ],
                    "sourceAddressPrefixes": [subnet1],
                    "destinationAddressPrefixes": [subnet2],
                    "access": "Allow",
                    "priority": 100,
                    "direction": "Inbound"
            },
            {
                "name": "https_rule",
            
                    "description": "Allow connection from database",
                    "protocol": "*",
                    "sourcePortRange": "*",
                    "destinationPortRanges": [
                        "81",
                        "444"
                    ],
                    "sourceAddressPrefixes": [subnet3],
                    "destinationAddressPrefixes": [subnet2],
                    "access": "Allow",
                    "priority": 101,
                    "direction": "Inbound"
                }
            ,
            {
                "name": "httpweb_rule",
                    "description": "Allow  connection to web subnet",
                    "protocol": "*",
                    "sourcePortRange": "*",
                    "destinationPortRanges": [
                        "82",
                        "445"
                    ],
                    "sourceAddressPrefixes": [subnet2],
                    "destinationAddressPrefixes": [subnet1],
                    "access": "Allow",
                    "priority": 102,
                    "direction": "Outbound"
            
            },
            {
                "name": "httpapi_rule",
                    "description": "Allow  connection to database subnet",
                    "protocol": "*",
                    "sourcePortRange": "*",
                    "destinationPortRange": "3306",
                    "sourceAddressPrefixes": [subnet2],
                    "destinationAddressPrefixes": [subnet3],
                    "access": "Allow",
                    "priority": 103,
                    "direction": "Outbound"
            },
            
           
        ]

        },
        {
            parent: this
});
this.nsgid=nsg.id;
    }
}

module.exports.NSG=NSG;