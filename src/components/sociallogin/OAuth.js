import React from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import styles from "./OAuth.module.css";

const API_URL = "";
const OAuth = () => {
  const handleGoogleSuccess = async (response) => {
    try {
      const googleUserData = jwtDecode(response.credential);
      const { email, name } = googleUserData;

      const res = await fetch(`${API_URL}/auth/social-login/google`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: {
          email,
          name,
        },
      });

      if (!res.ok) {
        throw new Error("Google 로그인 처리 실패");
      }

      const { token } = await res.json();
      localStorage.setItem("token", token);

      console.log("로그인 성공");
    } catch (error) {
      console.error("로그인 실패", error);
    }
  };

  const handleGoogleFailure = (error) => {
    console.error("Google 로그인 실패", error);
  };
  return (
    <div className={styles.googleLoginButton}>
      <GoogleOAuthProvider clientId="34808270652-rs3fnkgusemkf4l3i1dc0mkda1bk5s7p.apps.googleusercontent.com">
        <GoogleLogin
          onSuccess={handleGoogleSuccess}
          onError={handleGoogleFailure}
        />
      </GoogleOAuthProvider>
    </div>
  );
};

export default OAuth;
