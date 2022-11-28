export default function (ctx) {
  if (ctx.app.$auth.$state.loggedIn) {
    console.log("loaded");
  }
}
