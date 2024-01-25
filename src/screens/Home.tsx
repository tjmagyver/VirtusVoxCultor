import { AudioControlsFooter } from "@components/AudioControlsFooter";
import { AudiobookList } from "@components/AudiobookList";
import { Header } from "@components/Header";
import { YourLibrary } from "@components/YourLibrary";
import { ScrollView, VStack } from "native-base";
import { useEffect, useState } from "react";
import reactotron from "reactotron-react-native";
import { api } from "./../../src/services/api";

export type AudiobookData = {
  id: string,
  title: string,
  cover: string,
  duration: number,
  sinopse: string,
  publisher: string,
  createdAt: Date,
  updatedAt: Date
}

export function Home() {
  const [audiobooks, setAudiobooks] = useState([{}] as AudiobookData[])

  async function getAudiobooks() {
    try {
      const audiobooks = await api.get('audiobooks')
      setAudiobooks(audiobooks.data.filter((audiobook: any) => audiobook.isVisible !== false))
    } catch (error) {
      reactotron.log(error)
    }
  }

  useEffect(() => {
    getAudiobooks()
  }, [])

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
          <YourLibrary audiobooks={audiobooks} />
          <AudiobookList
            audiobooks={audiobooks}
            title="Recomendados"
            legend="Confira os livros similares aos adicionados à sua biblioteca."
            mt="8px"
          />
          <AudiobookList
            audiobooks={audiobooks}
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