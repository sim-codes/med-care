"use server";

import wretch from "wretch";
import { cookies } from "next/headers";
import { User } from "./definitions";
import { signIn } from '@/auth';
import { AuthError } from 'next-auth';
import { TokenRequest } from "./definitions";
import { string } from "zod";

const endpoint = "https://aujsapi.onrender.com/api";

export async function storeToken(token: string, type: "access" | "refresh") {
    cookies().set({
        name: type + "Token",
        value: token,
        httpOnly: true,
        sameSite: "strict",
        secure: true,
        expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30),
    })
}

export async function storeUser(user: User)  {
    cookies().set({
        name: "MedUser",
        value: JSON.stringify(user),
        httpOnly: true,
        sameSite: "strict",
        secure: true,
        expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30),
    })
}

// get the token from the cookies
export async function getToken(type: string) {
    const token = await cookies().get(type + "Token")?.value;
    return token;
}

// remove the tokens from the cookies
export async function removeUserTokens() {
    cookies().delete("accessToken");
    cookies().delete("refreshToken");
    cookies().delete("MedUser");
}

// handleJWTRefresh function
export async function handleJWTRefresh() {
    const refreshToken = await getToken("refresh");
    return await wretch(`${endpoint}/user/token/refresh/`)
        .accept("application/json")
        .post({ refresh: refreshToken })
        .json();
}

export async function login(email: string, password: string): Promise<any | undefined>{
    const data = await wretch(`${endpoint}/user/login/`)
        .accept("application/json")
        .post({ email, password });
    return data.json()
;
}

export async function authenticate(
    prevState: string | undefined,
    formData: FormData,
  ) {
    try {
      await signIn('credentials', formData);
    } catch (error) {
      if (error instanceof AuthError) {
        switch (error.type) {
          case 'CredentialsSignin':
            return 'Invalid credentials.';
          default:
            return 'Something went wrong.';
        }
      }
      throw error;
    }
}