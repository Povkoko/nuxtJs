/**
 * Created by vuthy on 5/16/19.
 */
export default function ({ store, redirect,route}) {
  // If the user is not authenticated
  if (!store.state.auth) {
    return redirect('/auth');
  }
}
