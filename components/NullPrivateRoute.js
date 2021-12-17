import { useEffect, React } from 'react';
import { useRouter } from 'next/router';
const csvornull = null;
if (typeof window !== 'undefined') {
  csvornull = localStorage.getItem("csvdata");
}
export default function NullPrivateRoute({ nullProtectedRoutes, children }) {
  const router = useRouter();
 

  const pathIsProtected = nullProtectedRoutes.indexOf(router.pathname) !== -1;

  useEffect(() => {
    if (csvornull == null && pathIsProtected) {
      // Redirect route, you can point this to /login
      router.push('/');
    }
  }, [router, pathIsProtected]);

  // if (csvornull && pathIsProtected) {
  //   return <div>loading. . .</div>;
  // }

  return children;
}