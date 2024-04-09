const sqs = new SQSClient({ region: "us-east-2" });

export const handler = async (event) => {
  
  try {
     const queueUrl = "https://sqs.us-east-2.amazonaws.com/905418219258/Mia-net1500-bigmover";
     
    const params = {
      QueueUrl: queueUrl,
      MaxNumberOfMessages: 10, 
      WaitTimeSeconds: 10,
    };
  
      const data = await sqs.send(new ReceiveMessageCommand(params));
    const message = data.Messages || [];
    
    if (message.length --- 0) {
      console.log("No messages found in the queue. ");
      return;
      
    }
    
    message.forEach((message) => {
      console.log("Recived message: ", message.Body);
      
    });
        return {
          statusCode: 200,
          body: "Message sent Successfully",
        
    };  
  }  catch (error) {
      console.error("Error sending message:", error);
      return {
        statusCode: 500,
        body: "Error sending message to SQS", 
      };
  
  }

};