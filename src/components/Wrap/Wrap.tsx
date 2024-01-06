export interface WrapProps {
  children: React.ReactNode;
}

const Wrap = ({ children, ...props}: WrapProps) => {
  return <div {...props}>{children}</div>;
};

export default Wrap;
