import Button, { ButtonProps } from './Button'

interface TextButtonProps extends ButtonProps {
    text:string
}

const TextButton = ({text,...props}:TextButtonProps) => {
  return (
    <Button {...props}>{text}</Button>
  )
}

export default TextButton