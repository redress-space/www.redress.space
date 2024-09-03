import * as React from "react";

interface EmailTemplateProps {
  verificationCode: string;
}

const EmailTemplate = ({ verificationCode }: EmailTemplateProps) => (
  <div lang="en" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
    <div
      style={{
        maxWidth: "600px",
        margin: "0 auto",
        backgroundColor: "#ffffff",
        padding: "20px",
        borderRadius: "10px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div style={{ textAlign: "center", paddingBottom: "20px" }}>
        <h1 style={{ color: "#333333" }}>REDRESS</h1>
      </div>
      <div style={{ textAlign: "center" }}>
        <p style={{ color: "#666666" }}>
          Thank you for signing up! To complete your registration, please verify
          your email address by entering the following verification code:
        </p>
        <div
          style={{
            fontSize: "24px",
            fontWeight: "bold",
            color: "#333333",
            padding: "10px",
            border: "2px solid #f0ff94",
            display: "inline-block",
            margin: "20px 0",
            borderRadius: "5px",
          }}
        >
          {verificationCode}
        </div>
        <p style={{ color: "#666666" }}>
          If you did not sign up for this account, you can ignore this email.
        </p>
      </div>
      <div
        style={{
          textAlign: "center",
          paddingTop: "20px",
          color: "#1f1f1f",
          fontSize: "18px",
        }}
      >
        <p>Thanks!</p>
        <p>2024 Redress team</p>
      </div>
    </div>
  </div>
);

export default EmailTemplate;
