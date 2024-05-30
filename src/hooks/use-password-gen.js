import { useState } from "react";

export function usePasswordGenerator() {
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  function generatePassword(checkboxData, passwordLength) {
    let charSet = "",
      generatedPassword = "";

    const selectedOption = checkboxData.filter(
      (checkboxItem) => checkboxItem.state
    );

    if (selectedOption.length === 0) {
      setErrorMessage("Select atleast one option.");
      setPassword("");
      return;
    }
    selectedOption.forEach((option) => {
      switch (option.title) {
        case "Include Uppercase Letters":
          charSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
          break;
        case "Include Lowercase Letters":
          charSet += "abcdefghijklmnopqrstuvwxyz";
          break;
        case "Include Numbers":
          charSet += "0123456789";
          break;
        case "Include Symbols":
          charSet += "!@#$%^&*()";
          break;
        default:
          break;
      }
    });

    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * charSet.length);
      generatedPassword += charSet[randomIndex];
    }
    setPassword(generatedPassword);
    setErrorMessage("");
  }

  return { password, errorMessage, generatePassword };
}
