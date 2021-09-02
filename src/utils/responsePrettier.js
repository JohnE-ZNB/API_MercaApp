const responsePrettier = (type, codStatus, resBody, message='') =>{
  if(type === "error"){
    resp = {
      "statusCode": codStatus,
      "headers": {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin" : "*",
        "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
      },
      "body":JSON.stringify({
        "severity": "Err",
        "message": resBody
      }),
      "isBase64Encoded": false
    };
    
    return resp;
  }

  resp = {
    "statusCode": codStatus,
    "headers": {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
    },
    "body": JSON.stringify(resBody),
    "isBase64Encoded": false,
  };

  return resp;
}
module.exports.responsePrettier = responsePrettier;