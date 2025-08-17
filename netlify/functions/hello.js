// netlify/functions/hello.js
export async function handler(event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "สวัสดีจาก API Endpoint Netlify!" }),
  };
}
