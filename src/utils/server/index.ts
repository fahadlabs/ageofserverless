import { NextPageContext } from 'next';
import { parseCookies } from 'nookies';
import admin from 'src/firebase/admin';

export async function getServerSideAuth(ctx: NextPageContext) {
  try {
    const { token } = parseCookies(ctx);
    const user = await admin.auth().verifyIdToken(token);
    return user;
  } catch (error) {
    throw error;
  }
}
