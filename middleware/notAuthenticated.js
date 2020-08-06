/**
 * Created by vuthy on 5/16/19.
 */
export default function ({ store, redirect}) {
  // If the user is authenticated redirect to home page
  if (store.state.auth) {
    return redirect('/')
  }
}
