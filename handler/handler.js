require("../bin/kernel");

 /**
   * sendMessageToClient function
   * 
   */ 
  const sendMessageToClient = async(url, connectionId, payload) =>
  new Promise((resolve, reject) => {
   const apigatewaymanagementapi = new AWS.ApiGatewayManagementApi({
     apiVersion: '2018-11-29',
     endpoint: "WEBSOCKET_ENDPOINT",
   });
   apigatewaymanagementapi.postToConnection({
       ConnectionId: connectionId,       // connectionId of the receiving ws-client
       Data: JSON.stringify(payload)
     },(err, data) => {
       if (err) {
         console.log('err is', err);
         reject(err);
       }
       resolve(data);
     }
   );
  });
/**
 * connectionHandler function
 * 
 */ 
module.exports.connectionHandler=async(event, context)=>{
    return {
        statusCode: 200,
    };
  }
  
  
  /**
    * joinHandler function
    * 
    */
  module.exports.joinHandler = async (event, context) => {
    const domain = event.requestContext.domainName;
    const stage = event.requestContext.stage;
    const connectionId = event.requestContext.connectionId;
    const callbackUrlForAWS = util.format(util.format('https://%s/%s', domain, stage)); //construct the needed url
  
    // parse the data
    let data = JSON.parse(event.body);
  
  
  
  
    console.log("Loggin the websocketdata",callbackUrlForAWS, connectionId, data);
  
    // return message
    await sendMessageToClient(callbackUrlForAWS, connectionId, data);
  
    // return response success
    return {
      statusCode: 200,
    };
  }