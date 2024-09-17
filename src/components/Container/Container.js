export default function Container({ children, className }) {
  return (
    <div className={`col-10 col-lg-10 mx-auto ${className}`}>{children}</div>
  );
}
