// Get OAuth token
export const getOAuth = async function (url: RequestInfo) {
  const response = await fetch("https://api.petfinder.com/v2/oauth2/token", {
    method: "POST",
    body:
      "grant_type=client_credentials&client_id=" +
      `${process.env.REACT_APP_API_KEY}` +
      "&client_secret=" +
      `${process.env.REACT_APP_SECRET}`,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });

  const token = await response.json();

  const headers: HeadersInit = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token.access_token}`,
  };

  async function fetchAnimals(request: RequestInfo): Promise<any> {
    const config: RequestInit = {
      method: "GET",
      headers,
    };
    const response = await fetch(request, config);
    const body = await response.json();
    return body;
  }

  return fetchAnimals(url);
};
