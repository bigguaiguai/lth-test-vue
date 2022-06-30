
const VUE_APP_BASE_API = process.env.VUE_APP_BASE_API;
const api =  {
  updateRequirement: VUE_APP_BASE_API + '/requirement/update',
  addRequirement: VUE_APP_BASE_API + '/requirement/add',
};

export  {api}