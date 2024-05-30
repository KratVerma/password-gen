export function Checkbox({ onChange, state, title }) {
  return (
    <div>
      <input type="checkbox" checked={state} onChange={onChange}></input>
      <label>{title}</label>
    </div>
  );
}
