"use strict";
const pulumi = require("@pulumi/pulumi");
const azure = require("@pulumi/azure");


class NSG extends pulumi.ComponentResource{
    constructor(location,resourceGroupName,nsgname,i,subnet1,subnet2,subnet3){
        super(location,resourceGroupName,nsgname,i,subnet1,subnet2,subnet3);
        const nsg = new azure.network.NetworkSecurityGroup("L"+i, {
            location: location,
            name: nsgname,
            resourceGroupName: resourceGroupName,
            securityRules:[{
              
            "name": "http_rule",
               
                    "description": "Allow http and https to web subnet",
                    "protocol": "*",
                    "sourcePortRange": "*",
                    "destinationPortRanges": [
                        "80",
                        "443"
                    ],
                    "sourceAddressPrefix": "Internet",
                    "destinationAddressPrefixes": [subnet1],
                    "access": "Allow",
                    "priority": 100,
                    "direction": "Inbound"
                
            },
            {
                "name": "httpapi_rule",
               
                    "description": "Allow  http to api",
                    "protocol": "*",
                    "sourcePortRange": "*",
                    "destinationPortRanges": [
                        "81",
                        "444"
                    ],
                    "sourceAddressPrefixes": [subnet1],
                    "destinationAddressPrefixes": [subnet2],
                    "access": "Allow",
                    "priority": 101,
                    "direction": "Outbound"
                
            },
            {
                "name": "httpdb_rule",
              
                    "description": "Deny connection to database subnet",
                    "protocol": "*",
                    "sourcePortRange": "*",
                    "destinationPortRange": "*",
                    "sourceAddressPrefixes": [subnet1],
                    "destinationAddressPrefixes": [subnet3],
                    "access": "Deny",
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