import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';
import type { User, TokenRequest } from './app/lib/definitions';
import { login, storeToken, storeUser } from './app/lib/actions';
import { Session } from 'inspector';
import { use } from 'react';
 
export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  session: {strategy: 'jwt'},
  providers: [Credentials({
    async authorize(credentials) {

        const parsedCredentials = z
        .object({ email: z.string().email(), password: z.string().min(6) })
        .safeParse(credentials);

        if (parsedCredentials.success) {
            const { email, password } = parsedCredentials.data;
            const response = await login(email, password);

            // store tokens
            storeToken(response.access, 'access');
            storeToken(response.refresh, 'refresh');
            storeUser(response.user);
            
            return response.user as User;
        }

        console.log('Invalid credentials.')
        return null;
    }
  })],
  callbacks: {
    async session({session, token, user}) {
        session = {
            ...session,
            user: {
                ...session.user
            }
        }
        console.log('session', session);
        return session;
    }
  }
});