import { NextPageContext } from 'next';

interface IProps {
  statusCode?: number;
}

function Error({ statusCode }: IProps) {
  return <p>{statusCode ? `An error ${statusCode} occurred on server` : 'An error occurred on client'}</p>;
}

export function getInitialProps({ res, err }: NextPageContext): IProps {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
}

export default Error;
