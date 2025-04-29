import { Box, Button, Container, Flex, Text } from "@chakra-ui/react";
import { useColorMode, useColorModeValue } from "./ui/color-mode";
import { LuMoon, LuSun } from 'react-icons/lu'

const Navbar = () => {
    const {colorMode, toggleColorMode } = useColorMode(); 
  return (
      <Container maxW={"900px"}>
          <Box
              bg={useColorModeValue("gray.200", "gray.700")}
              px={4}
              my={4}
              borderRadius={5}
          >
              <Flex
                  h="16"
                  alignItems={"center"}
                  justifyContent={"space-between"}
              >
                  {/* Left side */}
                  <Flex
                      alignItems={"center"}
                      justifyContent={"center"}
                      gap={3}
                      display={{base:"none", sm:"flex"}}
                  >
                      <img src="/react.png" alt="React logo" width={50} height={50} />
                      <Text fontSize={"40px"}>+</Text>
                      <img src="/python.png" alt="Python logo" width={50} height={40} />
                      <Text fontSize={"40px"}>=</Text>
                      <img src="/explode.png" alt="Explode head emoji" width={45} height={45}/>
                  </Flex>
                  {/* Right side */}
                  <Flex
                      alignItems={"center"}
                      gap={3}
                  >
                      <Text
                          fontSize={"lg"}
                          fontWeight={500}
                          display={{base:"none", md:"block"}}
                      >
                          BFFship 🔥
                      </Text>
                      <Button onClick={toggleColorMode}>
                        {colorMode === "light" ? <LuMoon /> : <LuSun size={20} />}
                      </Button>
                  </Flex>
              </Flex>
          </Box>
    </Container>
  )
}

export default Navbar