//criar uma funçao para parametrizar os responses 

function response(status, message, data=null){
    return {
        status,
        message,
        data,
        timestamp: new Date () .getTime()
    }
}

module.exports={
    response
}

