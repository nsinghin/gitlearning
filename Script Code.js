//----------------------------------------------------------------------//
//							POST Processor
//----------------------------------------------------------------------//
// This script executes once after a message has been processed

//Check to see if the alert has already been sent within the given timeframe
var lastsent = globalMap.get(channelId + '_lastalert'); //last time an alert was sent
var rightnow = new Date(); //Current Datetime
var hLimit = 1; //Number of hours before resending an alert

return;