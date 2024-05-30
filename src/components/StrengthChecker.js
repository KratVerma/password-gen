import React from "react";

export function PasswordStrengthChecker({ password = "" }) {
  function getPasswordStrength() {
    const passwordLength = password.length;
    if (passwordLength < 1) {
      return "";
    } else if (passwordLength < 4) {
      return "Very Weak";
    } else if (passwordLength < 8) {
      return "Poor";
    } else if (passwordLength < 12) {
      return "Medium";
    } else if (passwordLength < 16) {
      return "Strong";
    } else {
      return "Very Strong";
    }
  }

  const passStrength = getPasswordStrength();
  if (!passStrength) return <React.Fragment />;
  return (
    <div
      style={{
        color: "white",
        paddingBottom: 10,
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      Strength: <span style={{ fontWeight: "bold" }}>{passStrength}</span>
    </div>
  );
}
