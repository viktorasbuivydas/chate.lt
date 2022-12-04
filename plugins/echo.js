import Echo from "laravel-echo";

window.Pusher = require("pusher-js");

export default (_context, inject) => {
  if (_context.app.$auth?.strategy) {
    const echo = new Echo({
      broadcaster: "pusher",
      key: "local", // .env
      wsHost: window.location.hostname,
      wsPort: 6001,
      forceTLS: false,
      disableStats: true,
      authEndpoint: "http://localhost:8000/broadcasting/auth",
      authModule: true,
      auth: {
        headers: {
          Authorization: _context.app.$auth?.strategy.token.get(),
        },
      },
    });
    inject("echo", echo);
  }
};
