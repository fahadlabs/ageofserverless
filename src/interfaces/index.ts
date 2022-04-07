export interface IServerSideProps {
  props?: { [name: string]: unknown };
  notFound?: boolean;
  redirect?: {
    destination?: string;
    permanent?: boolean;
    statusCode?: number;
  };
}
