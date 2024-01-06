import Button, { ButtonProps } from "./Button";
import Image from "@components/Image/Image";

export interface IconButtonProps extends ButtonProps {
  src: string;
  alt: string;
}

const IconButton = ({ src, alt, ...props }: IconButtonProps) => {
  return (
    <Button {...props}>
      <Image w={24} h={24} src={src} alt={alt} />
    </Button>
  );
};

export default IconButton;
