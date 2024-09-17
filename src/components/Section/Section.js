import Container from "../Container/Container";

export default function Section({
  children,
  pt,
  pb,
  py,
  mt,
  mb,
  my,
  className,
}) {
  const styling = {
    paddingTop: pt || py,
    paddingBottom: pb || py,
    marginTop: mt || my,
    marginBottom: mb || my,
  };

  return (
    <section style={styling} className={className}>
      {children}
    </section>
  );
}
