function Button({ title, clickHandler }) {
  return (
    <button
      style={{ width: "20%", marginRight: "3rem" }}
      onClick={clickHandler}
    >
      {title}
    </button>
  );
}

export default Button;
