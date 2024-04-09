import { SQSClient, SendMessageCommand } from "@aws-sdk/client-sqs";

const sqsClient = new SQSClient({ region: "us-east-2" });

export const handler = async (event) => {
  try {
    const params = {
      QueueUrl: "https://sqs.us-east-2.amazonaws.com/905418219258/Mia-net1500-bigmover",
      MessageBody: "Hello sqs",
      };
      
    
    await sqsClient.send(new SendMessageCommand(params));
  console.log()
        return {
          statusCode: 200,
          body: "Message sent Successfully",
        };
  } catch (error) {
      console.error("Error sending message:", error);
      return {
        statusCode: 500,
        body: "Error sending message to SQS", 
      };  
  }
}