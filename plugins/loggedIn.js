export default function ({ $axios, $auth }) {
  $axios.onError((error) => {
    if (error.response.status === 401) {
      if ($auth.loggedIn) {
        $auth.logout();
      }
      $auth.login();
    }
  });
}
