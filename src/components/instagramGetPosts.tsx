import React, { useState, useEffect } from "react";

interface InstagramPostCountProps {
  accessToken: string; // Pass the user's access token as a prop
}

const InstagramPostCount: React.FC<InstagramPostCountProps> = ({ accessToken }) => {
  const [postCount, setPostCount] = useState<number | null>(null);

  useEffect(() => {
    // Fetch the user's Instagram media count using the access token
    const fetchInstagramPostCount = async () => {
      try {
        const response = await fetch(
          `https://graph.instagram.com/v12.0/me?fields=media_count&access_token=${accessToken}`
        );

        if (response.ok) {
          const data = await response.json();
          setPostCount(data.media_count);
        } else {
          console.error("Failed to fetch Instagram post count");
        }
      } catch (error) {
        console.error("Error fetching Instagram post count:", error);
      }
    };

    fetchInstagramPostCount();
  }, [accessToken]);

  return (
    <div>
      <h2>Instagram Post Count</h2>
      {postCount !== null ? (
        <p>Total Posts: {postCount}</p>
      ) : (
        <p>Loading post count...</p>
      )}
    </div>
  );
};

export default InstagramPostCount;
