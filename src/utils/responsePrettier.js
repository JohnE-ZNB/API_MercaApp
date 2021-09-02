const responsePrettier = (type, codStatus, resBody, message='') =>{
  if(type === "error"){
    resp = {
      "statusCode": codStatus,
      "headers": {
        "Content-Type": "application/json",
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
    },
    "body": JSON.stringify({
      "data": resBody,
      "message": message
    }),
    "isBase64Encoded": false
  };

  return resp;
}
module.exports.responsePrettier = responsePrettier;