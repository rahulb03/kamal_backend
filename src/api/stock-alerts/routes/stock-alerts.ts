export default {
  routes: [
    {
     method: 'GET',
     path: '/stock-alerts',
     handler: 'stock-alerts.getAlerts',
     config: {
       policies: [],
       middlewares: [],
     },
    },
  ],
};
