import Echo from "laravel-echo";

window.Pusher = require("pusher-js");

export default (_context, inject) => {
  if (_context.app.$auth?.strategy) {
    const echo = new Echo({
      broadcaster: "pusher",
      key: _context.$config.pusher.key,
      wsHost: window.location.hostname,
      wsPort: _context.$config.pusher.debug ? 6001 : 6002,
      wssPort: _context.$config.pusher.debug ? 6001 : 6002,
      forceTLS: !_context.$config.pusher.debug,
      disableStats: true,
      enabledTransports: ["ws", "wss"],
      authEndpoint: _context.$config.pusher.authEndpoint,
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
