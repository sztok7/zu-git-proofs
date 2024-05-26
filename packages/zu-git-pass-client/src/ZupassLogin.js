// import { zuAuthRedirect } from './lib/pcd-zuauth.js';
import { useCallback } from 'react';
// import { constructZupassPcdGetRequestUrl } from '@pcd/passport-interface';
import { getWithoutProvingUrl } from '@pcd/passport-interface/PassportInterface';
import { zupassPopupExecute } from '@pcd/passport-interface';

const constructWhatev = () => {
  // constructZupassPcdGetRequestUrl('https://zupass.org', window.location.pathname, 'message-pcd', {});
  const result = getWithoutProvingUrl('https://zupass.org', window.location.href, 'message-pcd', true)

  console.log(result)

  return result
}


export default function ZupassLogin() {
  const login = useCallback(async () => {
    const route = constructWhatev();

    // await zupassPopupSetup()

    await zupassPopupExecute(route)
  }, []);

  return (
    <button onClick={login}>Login mit dem Zupass</button>
  );
}
