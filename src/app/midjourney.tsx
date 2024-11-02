
export const queryMidJourney = async (prompt: string) =>
  fetch('https://api.userapi.ai/midjourney/v2/imagine', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'api-key': USERAPI_KEY,
    },
    body: JSON.stringify({
      // @ts-ignore
      prompt,
      // webhook_url: 'https://example.com/imagine/webhook-url',
      // webhook_type: 'progress', // or result
      // account_hash: 'a7d44910-88a6-4673-acc8-d60ffc3479a6',
      // is_disable_prefilter: false,
    }),
  });
// fetch('https://picsum.photos/200/300').then(result => setImage(result.url));
