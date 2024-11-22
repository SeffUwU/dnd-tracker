import NextAuth, { type DefaultSession } from "next-auth";
import authConfig from "./auth.config";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  pages: {
    signIn: "/auth/login",
    error: "/auth/error",
  },
  events: {
    // async linkAccount({ user }) {
    //   await db.user.update({
    //     where: { id: user.id },
    //     data: { emailVerified: new Date() },
    //   });
    // },
  },

  callbacks: {
    async signIn({ user, account }) {
      return true;
    },
    async session({ token, session }) {
      //   if (token.sub && session.user) {
      //     session.user.id = token.sub;
      //   }

      //   if (token.role && session.user) {
      //     session.user.role = token.role as UserRole;
      //   }

      //   if (session.user) {
      //     session.user.isTwoFactorEnabled = token.isTwoFactorEnabled as boolean;
      //     session.user.name = token.name;
      //     session.user.email = token.email;
      //     session.user.isOAuth = token.isOAuth as boolean;
      //   }

      return session;
    },
    async jwt({ token }) {
      if (!token.sub) return token;

      //   const existingUser = await getUserById(token.sub);

      //   if (!existingUser) return token;

      //   const existingAccount = await getAccountByUserId(existingUser.id);

      //   token.isOAuth = !!existingAccount;
      //   token.name = existingUser.name;
      //   token.email = existingUser.email;
      //   token.role = existingUser.role;
      //   token.isTwoFactorEnabled = existingUser.isTwoFactorEnabled;

      return token;
    },
  },
  session: { strategy: "jwt" },
  ...authConfig,
});
