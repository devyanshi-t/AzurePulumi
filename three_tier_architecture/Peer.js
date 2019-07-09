"use strict";
const pulumi = require("@pulumi/pulumi");
const azure = require("@pulumi/azure");

class Peer extends pulumi.ComponentResource{

    constructor(peeringName,vnet1,vnet2,resourceGroupName,i){
        super(peeringName,vnet1,vnet2,i);
        const Peer=new azure.network.VirtualNetworkPeering("P"+i,{
            name: peeringName,
     remoteVirtualNetworkId: vnet1,
      resourceGroupName: resourceGroupName,
      virtualNetworkName: vnet2,
        },
        {
            parent: this
    });
    
    }

}

module.exports.Peer = Peer;





    