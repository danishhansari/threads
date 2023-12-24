import { Box, Button, Flex, Text, Input } from "@chakra-ui/react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  signInWithEmailAndPassword,
  TwitterAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../config/firebase";
import { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const provider = new TwitterAuthProvider();
  const navigate = useNavigate();
  const signInWithEmail = async () => {
    try {
      const userData = await signInWithEmailAndPassword(
        auth,
        username,
        password
      );
      console.log(userData);
      const userJsonData = JSON.stringify(userData);
      localStorage.setItem("user", userJsonData);
      setUsername("");
      setPassword("");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  const signInWithTwitter = async () => {
    try {
      const data = await signInWithPopup(auth, provider);
      const userJsonData = JSON.stringify(data);
      localStorage.setItem("user", userJsonData);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Flex alignItems={"center"} justifyContent={"center"} h={"100vh"} p={3}>
        <Box maxW={"360px"}>
          <Text fontSize={"xl"} textAlign={"center"} mb={5}>
            Log In with your Twitter account
          </Text>
          <Input
            placeholder="Username, phone and email"
            type="email"
            mb={5}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder="Password"
            mb={5}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            w={"full"}
            colorScheme="teal"
            mb={5}
            onClick={signInWithEmail}
          >
            Log In
          </Button>
          <NavLink to={"/signup"} className="mb-4">
            <Text textAlign={"center"}>Don't have a account Signup</Text>
          </NavLink>
          <Button
            w={"full"}
            mt={5}
            colorScheme="blue"
            onClick={signInWithTwitter}
          >
            Continue with Twitter
          </Button>
        </Box>
      </Flex>
    </>
  );
};

export default Login;
