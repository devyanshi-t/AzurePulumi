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
            securityRules: [{
                    
            
            "name": "apitodb_rule",
                
            "description": "Allow connection from api subnet",
            "protocol": "*",
            "sourcePortRange": "*",
            "destinationPortRange": "3306",
            "sourceAddressPrefix": subnet2,
            "destinationAddressPrefix": subnet3,
            "access": "Allow",
            "priority": 100,
            "direction": "Inbound"
        },
       {
        "name": "ssh_rule",
    
            "description": "Allow SSH",
            "protocol": "tcp",
            "sourcePortRange": "*",
            "destinationPortRange": "22",
            "sourceAddressPrefix": "*",
            "destinationAddressPrefix": subnet3,
            "access": "Allow",
            "priority": 120,
            "direction": "Inbound"
        
       },
       {
        "name": "dbtoapi_rule",
       
            "description": "Allow  connection to api subnet",
            "protocol": "*",
            "sourcePortRange": "*",
            "destinationPortRange": "443",
            "sourceAddressPrefix": subnet3,
            "destinationAddressPrefix": subnet2,
            "access": "Allow",
            "priority": 101,
            "direction": "Outbound"
        
       },
       {
        "name": "dbtoweb_rule",
       
            "description": "Deny  connection to web  subnet",
            "protocol": "*",
            "sourcePortRange": "*",
            "destinationPortRange": "*",
            "sourceAddressPrefix": subnet3,
            "destinationAddressPrefix": subnet1,
            "access": "Deny",
            "priority": 110,
            "direction": "Outbound"
        }
           

        ]

        },
        {
            parent: this
});
this.nsgid=nsg.id;
    }
}

module.exports.NSG=NSG;