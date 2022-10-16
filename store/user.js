export const state = () => ({
    user: {},
})

export const getters = {
    user: (state) => state.user,
}

export const mutations = {
    add(state, userPayload) {
        state.user = userPayload
    },
}
