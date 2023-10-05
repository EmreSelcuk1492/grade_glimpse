import React, { useEffect, useState } from "react";
import axios from "axios";

interface InstagramData {
  access_token: string;
  user_id: number;
}

const InstagramSuccess: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [username, setUsername] = useState<string | null>(null);
  const [totalPosts, setTotalPosts] = useState<number | null>(null);
  const [accessToken, setAccessToken] = useState<string | null>(null);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");

    if (code) {
      handleCodeExchange(code);
    }
  }, []);

  const fetchMediaCount = async (token: string): Promise<number> => {
    const endpoint = `https://graph.instagram.com/me/media?fields=id&access_token=${token}`;
    const response = await axios.get(endpoint);
    if (response.status !== 200) {
      throw new Error("Failed to fetch media data");
    }
    return response.data.data.length;
  };

  const handleCodeExchange = async (code: string) => {
    try {
      const response = await axios.post('https://api.instagram.com/oauth/access_token', null, {
        params: {
          client_id: '763568429111393', 
          client_secret: 'a970be56b746d6acbccebf44475a0d26',
          grant_type: 'authorization_code',
          redirect_uri: 'https://grade-glimpse-git-main-emreselcuk1492.vercel.app/instagram-success',
          code: code
        }
      });

      const data: InstagramData = response.data;
      setAccessToken(data.access_token);
      const postCount = await fetchMediaCount(data.access_token);
      setTotalPosts(postCount);

    } catch (err: any) {
      setError(err.response?.data?.error_message || err.message || "An unknown error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <div>
          <p>Error: {error}</p>
        </div>
      ) : (
        <div>
          <h2>Welcome, {username}!</h2>
          <p>You have successfully authenticated with Instagram.</p>
          <h3>Total Posts: {totalPosts}</h3>
          {accessToken && (
            <p>
              Access Token: {accessToken}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default InstagramSuccess;
