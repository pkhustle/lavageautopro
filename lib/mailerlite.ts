/**
 * MailerLite API integration
 */

const API_KEY = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiNjVkZDliYTlmYjRkZGI2Njg4YmI0Nzg5NGZkNjI2ZWJhMWY4OWM2ZGFhM2ZhNzUzNmE5ZGQzMTMxNDJmNTI4YWM5ZDA1MjFjYTEzZTgyZmQiLCJpYXQiOjE3MzIxMTg4MzAuNjE1MjEzLCJuYmYiOjE3MzIxMTg4MzAuNjE1MjE3LCJleHAiOjQ4ODc3OTI0MzAuNjEwNDQ2LCJzdWIiOiIxMDg4ODY1Iiwic2NvcGVzIjpbXX0.SQe-wuTPjQqdutxqLXiysRHdeKeuP6l3TM4sVqUkwQAICF7O0sK_2MQjW6yI4uKvGRRVh22SBo36DF-jzDFaW7XfC50DL7ry8bTN0NE9qcafGXXCumR0DJcne50IoqMDNisojJgnEF0SpDN8tjpz1aozeaDA4QUdJJyDWv6BbHs6WVA3tflFDswtuEo4zbztsR5gKWUc7NeGlIZ7DfAc5b1y2pUWSHH0eVXpMiXyP0IKzd2T_CNbcNDHYZ8vHm1uFiCVUyxZ1fXoWGUdtdr7Fo10atJI6d46IKhLgF2VVXbtz8jS5mcppQHHTdQRA1R6CTLfI5O0V90Q2Zu8McuN0sOMigeH58HY2yFWgBEwRK-AoOz5TnPg-DX8fkdCc--NEGbvc9gnvLDpZ_begsRdeFiTh_S1nyCKjGyFUHYygTmfU8tpHQ-slTEdmdmBXOZAFaRQfdKFa54P2OXViyRGzV2ZX-z6jE2DH6ecKmVTXK6Rw5RGoFWUZOlvBfCNOiyBiLcwmMWnhZtEzpRNv9CCJkBIuLYiZm1MyLgoAMuHSFE6UfsjLI3Vrvd7-gaSyC3kyju3prS2728crU9D0RyD11Y-vuNVw7Go-pzKNXi6DGQiSof9zogcIyOg8XGaUmDuWKV2vOPYPNiS3ktNFeHp-jeOIroN65OZVRccjfW2EdM";

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
