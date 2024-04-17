import wretch from "wretch";
import Cookies from "js-cookie";


// Base API setup for makin HTTP requests
const api = wretch("https://aujsapi.onrender.com/api").accept("application/json");
const endpoint = "https://aujsapi.onrender.com/api";


/**
 * Stores a token in cookies.
 * @param {string} token The token to stored.
 * @param {"access" | "refresh"} type The type of token to store.
 */
const storeToken = (token: string, type: "access" | "refresh") => {
  Cookies.set(type + "Token", token);
};

/**
 * Retrieves a token from cookies.
 * @param {"access" | "refresh"} type The type of token to retrieve.
 * @returns {string} The token.
 */
const getToken = (type: string) => {
    return Cookies.get(type + "Token");
};

/**
 * Removes both access and refresh tokens from cookies.
 */

const removeTokens = () => {
    Cookies.remove("accessToken");
    Cookies.remove("refreshToken");
}


const login = (email: string, password: string) => {
    return wretch(`${endpoint}/user/login/`).accept("application/json")
        .post({ email: email, password: password});
};

const handleJWTRefresh = () => {
    const refreshToken = getToken("refresh");
    return wretch(`${endpoint}/user/token/refresh/`).accept("application/json")
        .post({ refresh: refreshToken });
};

export const AuthActions = () => {
    return {
        login,
        handleJWTRefresh,
        storeToken,
        getToken,
        removeTokens
    };
};