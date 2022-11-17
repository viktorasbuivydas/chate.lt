export default function ({ $gates, $auth, redirect }) {
  // If the user is not an admin
  if ($gates.hasRole("user")) {
    return redirect("/home");
  }
}
