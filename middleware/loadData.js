import useInit from "uses/useInit.js";

export default function (ctx) {
  if (ctx.app.$auth.$state.loggedIn) {
    console.log(useInit);
  }
}
