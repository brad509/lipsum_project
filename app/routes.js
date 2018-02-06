const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (comMod) => (componentModule) => {
  comMod(null, componentModule.default);
};

export default function createRoutes() {

  return [
      {
       path: '/',
       name: 'home',
       getComponent(nextState, comMod) {
         import('containers/Home')
           .then(loadModule(comMod))
           .catch(errorLoading);
       },
     },
      {
       path: '/AboutUs',
       name: 'AboutUs',
       getComponent(nextState, comMod) {
         import('containers/AboutUs')
           .then(loadModule(comMod))
           .catch(errorLoading);
        },
      },
     {
      path: '/OurSolutions',
      name: 'OurSolutions',
      getComponent(nextState, comMod) {
        import('containers/OurSolutions')
          .then(loadModule(comMod))
          .catch(errorLoading);
        },
      },
      {
       path: '/ContactUs',
       name: 'ContactUs',
       getComponent(nextState, comMod) {
         import('containers/ContactUs')
           .then(loadModule(comMod))
           .catch(errorLoading);
         },
       },
       {
        path: '/Careers',
        name: 'Careers',
        getComponent(nextState, comMod) {
          import('containers/Careers')
            .then(loadModule(comMod))
            .catch(errorLoading);
         },
       },
       {
        path: '/Employer',
        name: 'Employer',
        getComponent(nextState, comMod) {
          import('containers/Employer')
            .then(loadModule(comMod))
            .catch(errorLoading);
         },
       },
       {
        path: '/Member',
        name: 'Member',
        getComponent(nextState, comMod) {
          import('containers/Member')
            .then(loadModule(comMod))
            .catch(errorLoading);
         },
       },
       {
        path: '/Broker',
        name: 'Broker',
        getComponent(nextState, comMod) {
          import('containers/Broker')
            .then(loadModule(comMod))
            .catch(errorLoading);
         },
       },
       {
        path: '/Provider',
        name: 'Provider',
        getComponent(nextState, comMod) {
          import('containers/Provider')
            .then(loadModule(comMod))
            .catch(errorLoading);
         },
       },
     {
      path: '*',
      name: 'notfound',
      getComponent(nextState, comMod) {
        import('containers/NotFoundPage')
          .then(loadModule(comMod))
          .catch(errorLoading);
      },
    },
  ];
}
