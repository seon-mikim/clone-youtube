interface SectionProps {
  children: React.ReactNode;
}

const Section = ({ children, ...props }: SectionProps) => {
  return <section {...props}>{children}</section>;
};

export default Section;
