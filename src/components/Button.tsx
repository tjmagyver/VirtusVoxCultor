import { Button as ButtonNativeBase, IButtonProps } from 'native-base';

interface ButtonProps extends IButtonProps {
  title: string;
  fontSize?: number;
  fontFamily?: string;
  rounded?: number;
}

export function Button({
  title,
  fontSize = 25,
  fontFamily = "jostRegular",
  rounded = 10,
  ...rest
}: ButtonProps) {
  return (
    <ButtonNativeBase
      {...rest}
      _text={{
        fontSize: `${fontSize}px`,
        fontFamily: `${fontFamily}`
      }}
      _pressed={{
        bg: "red.900",
        opacity: 0.9
      }}
      bg="red.900"
      borderRadius={rounded}
      py={0}
    >{title}</ButtonNativeBase>
  )
}