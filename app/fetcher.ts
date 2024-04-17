import wretch, { Wretch, WretchError } from "wretch";
import { AuthActions } from "@/app/auth/utils";

// Extract necessary functions from AuthActions utility.
const { handleJWTRefresh, storeToken, getToken } = AuthActions();

const api = () => {
    return (
        wretch("https://aujsapi.onrender.com/api")
            // Initialize authentication with the access token.
            .auth(`Bearer ${getToken("access")}`)
            // Catch 401 errors to refresh the token and retry the request.
            .catcher(401, async (error: WretchError, request: Wretch) => {
                try {
                    // Attempt to refresh the JWT token.
                    const { access } = (await handleJWTRefresh().json()) as { 
                        access: string 
                    };

                    // Store the new access token.
                    storeToken(access, "access");

                    // Replay the original request with the new access token.
                    return request
                        .auth(`Bearer ${access}`)
                        .fetch()
                        .unauthorized(() => {
                            window.location.replace("/auth/login");
                        })
                        .json();
                } catch (err) {
                    window.location.replace("/auth/login");
                }
            })
    );
};

export const fetcher = (url: string): Promise<any> => {
    return api().get(url).json();
}