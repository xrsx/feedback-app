function Header({ text }) {
  return (
    <header className="container">
      <h2>{text}</h2>
    </header>
  );
}

Header.defaultProps = {
  text: "Feedback UI",
  bgColor: "rgba(0,0,0,0,4)",
  textColor: "#ff6a9"
};

export default Header;
