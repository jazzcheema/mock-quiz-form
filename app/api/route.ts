/**
 * Webhook endpoint for receiving data from Typeform.
 *
 * @param {Request} request - The incoming request containing webhook data.
 * @returns {Promise<Response>} A response indicating the status of the webhook processing.
 */

async function POST(request: Request) {
  try {
    const text = await request.text();
    console.log("Received webhook data:", text);

    return new Response("Webhook processed successfully!", {
      status: 200,
    });
  } catch (error: any) {
    console.log("Error in webhook:", error.message);

    return new Response(`Webhook error: ${error.message}`, {
      status: 400,
    });
  }
}

export default POST;
