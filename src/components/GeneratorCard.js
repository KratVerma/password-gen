import { useState } from "react";
import classes from "../components/GeneratorCard.module.css";
import { usePasswordGenerator } from "../hooks/use-password-gen";
import { PasswordStrengthChecker } from "./StrengthChecker";
import { Button } from "./Button";
import { Checkbox } from "./Checkbox";

export function GeneratorCard() {
  const [length, setLength] = useState(4);
  const [checkboxData, setCheckboxData] = useState([
    { title: "Include Uppercase Letters", state: false },
    { title: "Include Lowercase Letters", state: false },
    { title: "Include Numbers", state: false },
    { title: "Include Symbols", state: false },
  ]);
  const [copied, setCopied] = useState(false);

  const { password, errorMessage, generatePassword } = usePasswordGenerator();

  function handleCheckboxChange(i) {
    const updatedCheckboxData = [...checkboxData];
    updatedCheckboxData[i].state = !updatedCheckboxData[i].state;
    setCheckboxData(updatedCheckboxData);
  }

  function handleCopy() {
    navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1500);
  }
  return (
    <>
      {password && (
        <div className={classes.header}>
          <div className={classes.title}>{password}</div>
          <Button
            text={copied ? "Copied" : "Copy"}
            classes={classes.cpyBtn}
            onClick={handleCopy}
          />
        </div>
      )}
      <div className={classes.charLength}>
        <span>
          <label>Character Length</label>
          <label>{length}</label>
        </span>
        <input
          type="range"
          min="4"
          max="20"
          value={length}
          onChange={(e) => setLength(e.target.value)}
        />
      </div>
      <div className={classes.checkboxes}>
        {checkboxData.map((cbd, idx) => (
          <Checkbox
            key={"k" + idx}
            state={cbd.state}
            onChange={() => handleCheckboxChange(idx)}
            title={cbd.title}
          />
        ))}
      </div>
      <PasswordStrengthChecker password={password} />
      {errorMessage && (
        <div className={classes.errorMessage}>{errorMessage}</div>
      )}
      <Button
        text="Generate Password"
        classes={classes.generateBtn}
        onClick={() => generatePassword(checkboxData, length)}
      />
    </>
  );
}
