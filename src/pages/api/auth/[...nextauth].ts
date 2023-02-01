import { query as q } from 'faunadb';

import NextAuth from "next-auth"
import Providers from "next-auth/providers"
import { getProviders } from "next-auth/react"
import GithubProvider from "next-auth/providers/github"

import { fauna } from '../../../services/fauna';

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      scope: 'read-user'
    }),
    // ...add more providers here
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      
      try {
        await fauna.query(
          q.Create(
            q.Collection('users'),
            { data: { email : user.email } }
          
          )
        )
        return true
      }catch{
        return false
      }
     
    },
  }
}
export default NextAuth(authOptions)