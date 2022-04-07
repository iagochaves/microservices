import { getAccessToken, getSession, useUser } from '@auth0/nextjs-auth0';
import { GetServerSideProps } from 'next';

export default function Home() {
  const { user } = useUser();
  console.log(user);

  return null;
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = getSession(req, res);
  console.log('token', getAccessToken(req, res));
  if (!session) {
    return {
      redirect: {
        destination: '/api/auth/login',
        permanent: false,
      },
    };
  }

  return {
    redirect: {
      destination: '/app',
      permanent: false,
    },
  };
};
