import { IInputProps, Input as NativeBaseInput } from 'native-base';

export function Input({ ...rest }: IInputProps) {
  return (
    <NativeBaseInput 
      {...rest}
      bg="gray.100"
      rounded="5px"
      h={10}
      px={4}
      fontSize='md'
      fontFamily="body"
      borderWidth={0}
      _focus={{
        bg: 'gray.100'
      }}
    />
  )
}