import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "../config/firebase";
import { useEffect, useState } from "react";
import Tweet from "./Tweet";

const TweetList = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const postCollection = collection(db, "post");

    const unsubscribe = onSnapshot(postCollection, (snapshot) => {
      const updatedPosts = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setPosts(updatedPosts);
      console.log(posts);
    });

    return () => unsubscribe();
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
