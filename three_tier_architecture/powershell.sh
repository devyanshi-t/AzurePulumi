


# this is a code which creates a new security rule in case of disaster to recover the content of the database subnet.
$ResourceGroupName="pulumitestrg" # Add your own resource group accordingly
$customport=3308 # add your own custom port

$rule1="DisasterRecoveryRule1"
$rule2="DisasterRecoveryRule2"
$rule3="DisasterRecoveryRule3"
$rule3="DisasterRecoveryRule2"

$nsgname1="K3" #Change the Name according to need
$nsgname2="K6"

$resource = Get-AzResource | Where {$_.ResourceGroupName –eq $ResourceGroupName -and $_.ResourceType -eq "Microsoft.Network/networkSecurityGroups"}
$nsg1 = Get-AzNetworkSecurityGroup -Name $nsgname1 -ResourceGroupName $ResourceGroupName
$nsg2 = Get-AzNetworkSecurityGroup -Name $nsgname2 -ResourceGroupName $ResourceGroupName

# Add the inbound security rule.
$nsg2 | Add-AzNetworkSecurityRuleConfig -Name $rule1 -Description "Allow communication from database subnet 1 to subnet2 " -Access Allow `
-Protocol * -Direction Inbound -Priority 3000 -SourceAddressPrefix "10.0.2.0/24" -SourcePortRange $customport `
-DestinationAddressPrefix "20.0.2.0/24" -DestinationPortRange $customport

# Add the outbound security rule.
$nsg1 | Add-AzNetworkSecurityRuleConfig -Name $rule2 -Description "Allow communication from database subnet 1 to subnet2 " -Access Allow `
-Protocol * -Direction Outbound -Priority 3000 -SourceAddressPrefix "10.0.2.0/24" -SourcePortRange $customport `
-DestinationAddressPrefix "20.0.2.0/24" -DestinationPortRange $customport


nsg1 | Add-AzNetworkSecurityRuleConfig -Name $rule3 -Description "Allow Communication From Database 2 to Database 1" -Access Allow `
-Protocol * -Direction Inbound -Priority 3000 -SourceAddressPrefix "20.0.2.0/24" -SourcePortRange $customport `
-DestinationAddressPrefix "10.0.2.0/24" -DestinationPortRange $customport


# Add the outbound security rule.
$nsg2 | Add-AzNetworkSecurityRuleConfig -Name $rule4 -Description "Allow Communication From database2 to Database 1" -Access Allow `
-Protocol * -Direction Outbound -Priority 3000 -SourceAddressPrefix "20.0.2.0/24" -SourcePortRange $customport`
-DestinationAddressPrefix "10.0.2.0/24" -DestinationPortRange $customport

# Update the NSG.
$nsg1 | Set-AzNetworkSecurityGroup
$nsg2 | Set-AzNetworkSecurityGroup










