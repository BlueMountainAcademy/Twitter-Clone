import React, { useState } from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";
import db from "./firebase";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      displayName: "Anwar Winter",
      username: "bluemountainnyc",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:
        "https://lh3.googleusercontent.com/-iBRDLpwbhZA/Wtzc3sm7qJI/AAAAAAAAAIk/WD6HxA3Y168MsHfOUhctzAv_2SX_O8kDACEwYBhgLKtMDAL1OcqyvFerD655wR11MRZz17iPaNbcxWZiGoka0YhGRsbZYFUfe4DHQIUqKgvUknV7GTQcyDSp6G1YYU-m6CW93EqSUJl2g6rjf4QDqVfzFLa1uEIoBYTC6BQTPPJjP7KPws8gGMGqWufIJ8h684Uz9jxtI8KckBU35J5psOUgqnn5IYjsoUA-u51n2QXeSjAyisWtuzqQ7UrT9UT6kq_BGVep4nj4fcrfRy6CJ0ZLEs7g_0wHP3uCwZ1ff6azPud3U5L8jnURrXR3hRcvTG__g9TxoNaA4ekMoff6uuqcTT5n0hb7PVZPuFDyUIbe6yzBLzgDn1BSC9VWAaPaoM39mL8PklW-ZIFy966SbSNZkudjOhs7y8U3TecE4qIdrgpAQnZ2mYk7Nf9GZJyeRijcA_wh-DWHNcPR6ZWBz1wDCKxObQDsYY-qZZUVGgSz5yz0s_ZjP8kI_z6HDF_GC-hyL3euYz9ZJEdCKFAVIsUwDN4Zr4VQMHb290dWjPS4eeNUMUB64C5Bneh5wXZAMpb3nrRbES9w-XDvZIJTI_gs3x0FxSQK0tgeO3rtsCeIyD3hAdnAebVtXO4bRi4cBraamZlfqgUmqP-0fA5JsSWXKRtUwpJLA_wU/w280-h280-p/BUSINESS-CARD7-copy.png",
    });

    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://lh3.googleusercontent.com/-iBRDLpwbhZA/Wtzc3sm7qJI/AAAAAAAAAIk/WD6HxA3Y168MsHfOUhctzAv_2SX_O8kDACEwYBhgLKtMDAL1OcqyvFerD655wR11MRZz17iPaNbcxWZiGoka0YhGRsbZYFUfe4DHQIUqKgvUknV7GTQcyDSp6G1YYU-m6CW93EqSUJl2g6rjf4QDqVfzFLa1uEIoBYTC6BQTPPJjP7KPws8gGMGqWufIJ8h684Uz9jxtI8KckBU35J5psOUgqnn5IYjsoUA-u51n2QXeSjAyisWtuzqQ7UrT9UT6kq_BGVep4nj4fcrfRy6CJ0ZLEs7g_0wHP3uCwZ1ff6azPud3U5L8jnURrXR3hRcvTG__g9TxoNaA4ekMoff6uuqcTT5n0hb7PVZPuFDyUIbe6yzBLzgDn1BSC9VWAaPaoM39mL8PklW-ZIFy966SbSNZkudjOhs7y8U3TecE4qIdrgpAQnZ2mYk7Nf9GZJyeRijcA_wh-DWHNcPR6ZWBz1wDCKxObQDsYY-qZZUVGgSz5yz0s_ZjP8kI_z6HDF_GC-hyL3euYz9ZJEdCKFAVIsUwDN4Zr4VQMHb290dWjPS4eeNUMUB64C5Bneh5wXZAMpb3nrRbES9w-XDvZIJTI_gs3x0FxSQK0tgeO3rtsCeIyD3hAdnAebVtXO4bRi4cBraamZlfqgUmqP-0fA5JsSWXKRtUwpJLA_wU/w280-h280-p/BUSINESS-CARD7-copy.png" />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening?"
            type="text"
          />
        </div>
        <input
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          className="tweetBox__imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
        />

        <Button
          onClick={sendTweet}
          type="submit"
          className="tweetBox__tweetButton"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;