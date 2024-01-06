interface ImageProps {
    src: string
    alt: string
    w?: number
    h?: number
}

const Image = ({src, alt, w =0, h=0}:ImageProps) => {
  return <img width={w?w:"100%"} height={h?h:"100%"} src={src} alt={alt} />;
};

export default Image;
