export function Button({ onClick, classes, text }) {
  return (
    <button className={classes} onClick={onClick}>
      {text}
    </button>
  );
}
