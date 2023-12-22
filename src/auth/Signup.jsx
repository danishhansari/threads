import { Text, Flex, Input, Box, Button } from "@chakra-ui/react";
import { NavLink, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";
import { useState } from "react";

const Signup = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    name: "",
    username: "",
    password: "",
    confirmPassword: "",
  });
  const signUpWithEmail = async () => {
    if (credentials.password !== credentials.confirmPassword) {
      alert("password doesn't match try again");
      return;
    }
    try {
      await createUserWithEmailAndPassword(
        auth,
        credentials.username,
        credentials.password
      );
      setCredentials("");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  const handleInput = (e) => {
    setCredentials((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <>
      <Flex alignItems={"center"} justifyContent={"center"} h={"100vh"} p={3}>
        <Box maxW={"450px"}>
          <Text fontSize={"2xl"} textAlign={"center"} mb={5}>
            Log In with your Twitter account
          </Text>
          <Input
            placeholder="Name"
            type="email"
            mb={5}
            name="name"
            value={credentials.name}
            onChange={handleInput}
          />
          <Input
            placeholder="Username, phone and email"
            type="email"
            mb={5}
            name="username"
            value={credentials.username}
            onChange={handleInput}
          />
          <Input
            placeholder="Password"
            mb={5}
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleInput}
          />
          <Input
            placeholder="Confirm password"
            mb={5}
            name="confirmPassword"
            type="password"
            value={credentials.confirmPassword}
            onChange={handleInput}
          />
          <Button
            w={"full"}
            colorScheme="teal"
            mb={5}
            onClick={signUpWithEmail}
          >
            Log In
          </Button>
          <NavLink to={"/login"} className="mb-4">
            Already have a Login
          </NavLink>
        </Box>
      </Flex>
    </>
  );
};

export default Signup;
