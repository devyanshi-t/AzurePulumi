const pulumi = require("@pulumi/pulumi");
const azure = require("@pulumi/azure");
const vnet = require("./VNET.js");
const web=require("./web.js");
const api=require("./Api.js");
const db=require("./db.js");
const peer=require("./Peer.js")

const web1=new web.NSG("East US","pulumitestrg","K1",1,"10.0.0.0/24","10.0.1.0/24","10.0.2.0/24");
const api1=new api.NSG("East US","pulumitestrg","K2",2,"10.0.0.0/24","10.0.1.0/24","10.0.2.0/24");
const db1=new db.NSG("East US","pulumitestrg","K3",3,"10.0.0.0/24","10.0.1.0/24","10.0.2.0/24");
const web2=new web.NSG("West US","pulumitestrg","K4",4,"20.0.0.0/24","20.0.1.0/24","20.0.2.0/24");
const api2=new api.NSG("West US","pulumitestrg","K5",5,"20.0.0.0/24","20.0.1.0/24","20.0.2.0/24");
const db2=new db.NSG("West US","pulumitestrg","K6",6,"20.0.0.0/24","20.0.1.0/24","20.0.2.0/24");

const web1id=web1.nsgid;
const api1id=api1.nsgid;
const db1id=db1.nsgid;
const web2id=web2.nsgid;
const api2id=api2.nsgid;
const db2id=db2.nsgid;

 let vnet1=new vnet.VNET("V1","East US","pulumitestrg","10.0.0.0/16",web1id,api1id,db1id,"10.0.0.0/24","10.0.1.0/24","10.0.2.0/24",1);
 let vnet2=new vnet.VNET("V2","West US","pulumitestrg","20.0.0.0/16",web2id,api2id,db2id,"20.0.0.0/24","20.0.1.0/24","20.0.2.0/24",2);

const v1id=vnet1.vnetid;
const v2id=vnet2.vnetid;
 
const v1name=vnet1.vname;
const v2name=vnet2.vname;


const p1= new peer.Peer("VNet1toVNet2",v1id,v2name,"pulumitestrg",1);
const p2= new peer.Peer("VNet2toVNet1",v2id,v1name,"pulumitestrg",2);






