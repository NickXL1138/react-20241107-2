export const Layout = ({ children, sidebar }) => {
  return (
    <div>
      <header>HEADER</header>
      {sidebar}
      {children}
      <footer>FOOTER</footer>
    </div>
  );
};
