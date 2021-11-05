import { auth } from '../firebase/auth';

function bridge(url: string) {
  url = `/api${url}`;
  async function getHeaders() {
    const token = await auth.currentUser.getIdToken();
    return {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    };
  }
  const request = {
    get: async function () {
      const headers = await getHeaders();
      const response = await fetch(url, {
        headers,
      });
      return await response.json();
    },
    update: async function (body: any, method: 'POST' | 'PUT' = 'POST') {
      const headers = await getHeaders();
      const response = await fetch(url, {
        method,
        headers,
        body: JSON.stringify(body),
      });
      return await response.json();
    },
    delete: async function () {},
  };
  return request;
}

export default bridge;
