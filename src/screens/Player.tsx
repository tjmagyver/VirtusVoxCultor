import { Header } from "@components/Header";
import {
  Box,
  Button,
  HStack,
  Image,
  ScrollView,
  Text,
  VStack,
  WarningTwoIcon
} from "native-base";

import BookCoverLgImage from '@assets/bookCoverLg.png';
import EditIconImage from '@assets/editIcon.png';
import EditIconLightImage from '@assets/editIconLight.png';
import PolygonIconImage from '@assets/polygonIcon.png';
import PolygonPlayIconImage from '@assets/polygonPlayIcon.png';
import ReturnToStartIconImage from '@assets/returnToStartIcon.png';

import { BuyPhysicalBookFooter } from "@components/BuyPhysicalBookFooter";
import { CardChapterName } from "@components/CardChapterName";
import { ReadMoreModal } from "@components/ReadMoreModal";

export function Player() {
  return (
    <VStack
      flex={1}
      alignItems="flex-start"
      justifyContent="flex-start"
      bg="background"
      pb='12px'
    >
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        <VStack px="14px" mt="18px">
          <HStack>
            <Image
              source={BookCoverLgImage}
              alt="Book Cover Large"
              resizeMode="contain"
            />
            <VStack ml="19px">
              <Text
                fontSize="20px"
                fontFamily="inriaRegular"
                color="gray.300"
              >
                Sinópse:
              </Text>
              <Text
                fontSize="12px"
                fontFamily="inriaRegular"
                color="black"
                w="193px"
                lineHeight="15px"
              >
                Em Dominus Vobiscum, São Pedro Damião reflete sobre a natureza
                e a forma da liturgia da missa, quando rezada pelo sacerdote
                privadamente, sem presença do povo. Um assunto pouco explorado e
                pouco compreendido, mas de suma importância
              </Text>
              <HStack
                mt="40px"
                justifyContent="space-between"
                alignItems="center"
              >
                <ReadMoreModal 
                  position="absolute"
                  top="114px"
                  left="30px"
                />
                <Button
                  w="98px"
                  h="25px"
                  bg="gray.100"
                  px={0}
                  py={0}
                  _pressed={{
                    bg: "gray.100",
                    opacity: 0.9,
                  }}
                  rounded="5px"
                  leftIcon={
                    <WarningTwoIcon
                      size="14px"
                      color="red.500"
                    />
                  }
                >
                  <Text
                    fontSize="12px"
                    fontFamily="inriaRegular"
                    color="gray.300"
                  >
                    Reportar erro
                  </Text>
                </Button>
              </HStack>
            </VStack>
          </HStack>

          <VStack
            mt="19px"
            px="14px"
            py="12px"
            bg="gray.75"
          >
            <Text
              fontSize="24px"
              fontFamily="inriaBold"
              color="red.900"
            >
              Capítulo
            </Text>
            <HStack
              alignItems="center"
              justifyContent="space-between"
            >
              <Text
                fontSize="20px"
                fontFamily="inriaRegular"
                color="gray.300"
              >
                TÍTULO DO CAPÍTULO
              </Text>
              <Image
                source={EditIconImage}
                w="30px"
                h="30px"
                resizeMethod="resize"
                resizeMode="contain"
                alt="Edit Icon"
              />
            </HStack>
            <Box
              w="336px"
              h="54px"
              bg="gray.900"
              justifyContent="center"
              pl="10px"
              mt="12px"
            >
              <Box
                w="41px"
                h="41px"
                rounded="full"
                bg="gray.100"
                alignItems="center"
                justifyContent="center"
              >
                <Image
                  source={PolygonPlayIconImage}
                  w="20px"
                  h="20px"
                  alt="Polygon Black Icon"
                  resizeMethod="resize"
                  resizeMode="contain"
                />
              </Box>
            </Box>
            <HStack
              mt={2}
              justifyContent="space-between"
              alignItems="center"
            >
              <Button
                variant="unstyled"
                px={0}
                py={0}
              >
                <HStack
                  alignItems="center"
                  w="59px"
                  h="21px"
                  borderBottomWidth={1}
                  borderBottomColor="gray.300"
                >
                  <Image
                    source={EditIconLightImage}
                    w="16px"
                    h="16px"
                    alt="Edit icon light"
                    resizeMethod="resize"
                    resizeMode="contain"
                  />
                  <Text
                    fontSize="16px"
                    fontFamily="inriaRegular"
                    color="gray.300"
                    ml="2px"
                  >
                    Notas
                  </Text>
                </HStack>
              </Button>
              <Button
                variant="unstyled"
                px={0}
                py={0}
              >
                <Image
                  source={ReturnToStartIconImage}
                  w="20px"
                  h="17px"
                  resizeMethod="resize"
                  resizeMode="contain"
                  alt="Voltar ao inicio"
                />
              </Button>
            </HStack>
          </VStack>
          <VStack
            w="366px"
            maxHeight="225px"
            overflow="hidden"
            pt="18px"
            pl="14px"
            mb="21px"
          >
            <Text
              fontFamily="inriaRegular"
              fontSize="24px"
              color="red.900"
            >
              Sumário
            </Text>
            <HStack>
              <ScrollView>
                <VStack>
                  <VStack
                    right={9}
                    mt="35px"
                    position="absolute"
                  >
                    <Image
                      source={PolygonIconImage}
                      alt="Polygon Icon"
                      resizeMethod="resize"
                      resizeMode="contain"
                      style={{
                        transform: [{ rotate: '270deg' }]
                      }}
                    />
                    <Image
                      mt="10px"
                      source={PolygonIconImage}
                      alt="Polygon Icon"
                      resizeMethod="resize"
                      resizeMode="contain"
                      style={{
                        transform: [{ rotate: '90deg' }]
                      }}
                    />
                  </VStack>
                  <CardChapterName chapterName="Prefácio" />
                  <CardChapterName
                    isCurrentChapter
                    chapterName="Capítulo 1 - Aqui o texto livro começa de fato"
                  />
                  <CardChapterName
                    chapterName="Capítulo 2 - Fonte deve ser pequena"
                  />
                  <CardChapterName
                    chapterName="Capítulo 3 - Reticências para títulos longos"
                  />
                  <CardChapterName
                    chapterName="Capítulo 4 - Reticências para títulos longos"
                  />
                  <CardChapterName
                    chapterName="Capítulo 5 - Reticências para títulos longos"
                  />
                </VStack>
              </ScrollView>
            </HStack>
          </VStack>
        </VStack>
      </ScrollView>
      <BuyPhysicalBookFooter />
    </VStack>
  )
}