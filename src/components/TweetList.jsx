import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../config/firebase";
import { useEffect, useState } from "react";
import Tweet from "./Tweet";

const TweetList = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const postQuery = query(collection(db, "post"));
      const postsSnapshot = await getDocs(postQuery);
      const posts = postsSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log(posts);
      setPosts(posts);
    };
    fetchData();
  }, []);

  return (
    <>
      {posts.map((post) => {
        return (
          <Tweet
            key={post.id}
            date={post.date}
            time={post.time}
            user={post.user}
            post={post.post}
          />
        );
      })}
    </>
  );
};

export default TweetList;
