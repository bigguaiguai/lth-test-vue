
const VUE_APP_BASE_API = process.env.VUE_APP_BASE_API;
const api =  {
  addPerson: VUE_APP_BASE_API + '/users/addPerson',
  removePerson: VUE_APP_BASE_API + '/users/removePerson',
  updatePerson: VUE_APP_BASE_API + '/users/updatePerson',
  getPerson: VUE_APP_BASE_API + '/users/getPerson',
  getPersonDetail: VUE_APP_BASE_API + '/users/getPersonDetail',
};

export  {api}