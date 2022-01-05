
export default {
  namespaced: true,
  state: {
    name: 'zhangsan',
    tableData: [
      {
          todo: 'test1',
      },
      {
          todo: 'test2',
      },
      {
          todo: 'test3',
      },
    ],
  },
  getters: {
    getFuckName(state) {
      return `fuck ${state.name}`
    }
  },
  mutations: {
    deleteList(state,params){
      state.tableData.splice(params.index, 1)
    }
  },
  actions: {
  },
  modules: {
  }
}
