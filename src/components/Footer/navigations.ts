interface IRoute {
  name: string;
  url: string;
}

const navigations: { [name: string]: IRoute[] } = {
  dns: [
    {
      name: 'A record',
      url: '/a',
    },
  ],
  email: [
    {
      name: 'SPF check',
      url: '/spf',
    },
  ],
  website: [
    {
      name: 'Favicon',
      url: '/favicon',
    },
  ],
  name: [
    {
      name: 'Test',
      url: '/test',
    },
  ],
};

export default navigations;
