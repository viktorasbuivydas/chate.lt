export const state = () => ({
    roles: [],
    permissions: []
})

export const getters = {
    user: (state) => state.user,
}

export const mutations = {
    setUserRoles(state, payload) {
        state.roles = payload;
        this.$gates.setRoles(payload);
    },
    setUserPermissions(state, payload) {
        state.permissions = payload
        this.$gates.setPermissions(payload);
    }
}

export const actions = {
    setUserRoles(context, payload) {
      context.commit('setUserRoles', payload);
    },
    setUserPermissions(context, payload) {
        context.commit('setUserPermissions', payload);
      },
      nuxtServerInit (context, { req, $gates }) {
        console.log('aaaa');
        // const user = req.session.user
        // if (user) {
        //   $gates.setRoles(user.roles)
        //   $gates.setPermissions(user.permissions)
    
        //   commit('user', user)
        }
  }