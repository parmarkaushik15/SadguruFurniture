export const navigation = [
    {
      name: 'Dashboard',
      url: '/app/dashboard',
      icon: 'icon-speedometer'
    }, {
      name: 'Client Management',
      url: '/app/user',
      icon: 'icon-user',
      children: [
        {
          name: 'Client',
          url: '/app/user/client',
          icon: 'icon-user'
        }, {
          name: 'Architect',
          url: '/app/user/architect',
          icon: 'icon-user'
        }, {
          name: 'Worker',
          url: '/app/user/worker',
          icon: 'icon-user'
        }
      ]
    }, {
      name: 'Work Management',
      url: '/app/work',
      icon: 'icon-wrench',
      children: [
        {
          name: 'Site',
          url: '/app/work/site',
          icon: 'icon-wrench'
        }, {
          name: 'Quatation',
          url: '/app/work/quatation',
          icon: 'icon-wrench'
        }, {
          name: 'Worker Attendance',
          url: '/app/work/worker/attendance',
          icon: 'icon-user'
        }
      ]
    }, {
      name: 'Account',
      url: '/app/account',
      icon: 'icon-wallet',
      children: [
        {
          name: 'Financial Year',
          url: '/app/account/financialyear',
          icon: 'icon-calendar'
        }, {
          name: 'Payment',
          url: '/app/account/payment',
          icon: 'icon-credit-card'
        }, {
          name: 'Balance Sheet',
          url: '/app/account/payment',
          icon: 'icon-docs'
        }
      ]
    }, {
      name: 'Company Profile',
      url: '/app/company',
      icon: 'icon-notebook'
    }
];
