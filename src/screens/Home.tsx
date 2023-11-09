import { Header } from "@components/Header";
import { YourLibrary } from "@components/YourLibrary";
import { VStack } from "native-base";

export function Home() {
  return (
    <VStack
      flex={1}
      alignItems="flex-start"
      justifyContent="flex-start"
      bg="background"
    >
      <Header />
      <YourLibrary />
    </VStack>
  )
}