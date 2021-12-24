
const VUE_APP_BASE_API = process.env.VUE_APP_BASE_API;
const api =  {
  login: VUE_APP_BASE_API + '/login/login',
  register: VUE_APP_BASE_API + '/login/register',
};

export  {api}