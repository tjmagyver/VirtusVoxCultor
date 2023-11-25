import {
  Box, CloseIcon, IBoxProps, IconButton, Text
} from 'native-base';

interface NoteDetails {
  noteNumber: string;
  note: string;
}

interface PageNoteDetailsProps extends IBoxProps {
  page: string;
  notes: NoteDetails[];
  isPersonalNote?: boolean;
}

export function PageNoteDetails({
  page,
  notes,
  isPersonalNote = false,
  ...rest
}: PageNoteDetailsProps) {
  return (
    <Box
      {...rest}
    >
      <Text
        fontSize="12px"
        fontFamily="inriaRegular"
        color="gray.350"
        letterSpacing="0.7px"
      >
        ...............................................................................................Pág {page}
      </Text>
      {
        notes.map(note => (
          <Box
            w="318px"
          >
            {
              isPersonalNote && (
                <IconButton 
                  ml="auto"
                  mr="8px"
                  icon={
                    <CloseIcon color="white" size="10px" />
                  }
                  rounded={0}
                  bg="gray.100"
                  w="10px"
                  h="12px"
                  mt="10px"
                  mb="-10px"
                  px="6px"
                  py="6px"
                  _pressed={{
                    bg: "gray.100",
                    opacity: 0.9
                  }}
                />
              )
            }
            <Text
              key={note.noteNumber}
              fontSize="11px"
              fontFamily="inriaLight"
              color="gray.350"
              letterSpacing="0.5px"
              mt="16px"
            >
              {note.noteNumber} - {note.note}
            </Text>
          </Box>
        ))
      }
    </Box>
  )
}