# Deploying the  Three  tier architecure using Pulumi

## VNET.js
In the Vnet JavaScript file a VNET class is created, inside this 
class three subnets are created. Also we are sending the Vnet id and name to the main file.

## Peer.js
A Peer class is created which enables peering between the passed virtual network.

## Api.js
In this NSG class all the rules for APINSG are defined; these include rules to connect API subnet to database subnet and web subnet

## web.js 
In this NSG class all the rules for WebNSG are defined; these include rules to connect to API subnet  and deny connection to database subnet directly.

## db.js
In this NSG class all the rules for DbNSG are defined; these include rules to connect to API subnet to database subnet and to deny direct connection to web subnet.

## main.js: 
In the main JavaScript file all of the above class files are called by creating objects of them; this created two VNets, six NSG and enable Peering between two Vnet.


