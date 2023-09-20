import React, { useEffect, useState } from "react";
import InstagramAuth from "./InstagramAuth";

const InstagramPostCount: React.FC = () => {
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [postCount, setPostCount] = useState<number | null>(null);

  useEffect(() => {
    if (accessToken) {
      // Fetch the user's Instagram media count using the access token
      fetchInstagramPostCount();
    }
  }, [accessToken]);

  const fetchInstagramPostCount = () => {
    // Fetch the user's Instagram media count using the access token
    fetch(
      `https://graph.instagram.com/v12.0/me?fields=media_count&access_token=${accessToken}`
    )
      .then((response) => response.json())
      .then((data) => {
        setPostCount(data.media_count);
      })
      .catch((error) => {
        console.error("Error fetching Instagram post count:", error);
      });
  };

  return (
    <div>
      {accessToken ? (
        <div>
          <h2>Instagram Post Count</h2>
          {postCount !== null ? (
            <p>Total Posts: {postCount}</p>
          ) : (
            <p>Loading post count...</p>
          )}
        </div>
      ) : (
        <div>
          <p>You need to authenticate with Instagram to see your post count.</p>
          <InstagramAuth />
        </div>
      )}
    </div>
  );
};

export default InstagramPostCount;
