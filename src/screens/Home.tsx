import { AudiobookList } from "@components/AudiobookList";
import { AudioControlsFooter } from "@components/AudioControlsFooter";
import { Header } from "@components/Header";
import { YourLibrary } from "@components/YourLibrary";
import { ScrollView, VStack } from "native-base";

export function Home() {
  return (
    <VStack
      flex={1}
      alignItems="flex-start"
      justifyContent="flex-start"
      bg="background"
    >
      <Header />
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <VStack
          pb="110px"
        >
          <YourLibrary />
          <AudiobookList
            title="Recomendados"
            legend="Confira os livros similares aos adicionados à sua biblioteca."
            mt="8px"
          />
          <AudiobookList
            title="Lançamentos"
            legend="Confira os livros disponibilizados recentemente."
            mt="8px"
          />
        </VStack>
      </ScrollView>
      <AudioControlsFooter />
    </VStack>
  )
}