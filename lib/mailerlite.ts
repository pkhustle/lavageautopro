/**
 * MailerLite API integration
 */

const API_KEY = process.env.MAILERLITE_API_KEY;

// Default group ID for subscribers
const DEFAULT_GROUP_ID = "147507422385145461";

interface SubscribeOptions {
  email: string;
  source?: string;
  groupId?: string;
  fields?: Record<string, string>;
}

/**
 * Subscribe an email to MailerLite
 */
export async function subscribe({
  email,
  source = 'website',
  groupId = DEFAULT_GROUP_ID,
  fields = {}
}: SubscribeOptions) {
  if (!API_KEY) {
    throw new Error('MAILERLITE_API_KEY environment variable is not set');
  }

  // Prepare the data for the API request
  const data = {
    email,
    fields: {
      ...fields,
      tool: source
    },
    groups: [groupId]
  };

  // Send the POST request using fetch
  const response = await fetch("https://connect.mailerlite.com/api/subscribers", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + API_KEY
    },
    body: JSON.stringify(data)
  });

  // Parse and return the response
  const responseData = await response.json();
  
  if (!response.ok) {
    throw new Error(responseData.message || 'Failed to subscribe to MailerLite');
  }
  
  return responseData;
}
