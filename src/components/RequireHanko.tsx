import { validateCurrentSession } from "@/lib/validateCurrentSession";
import { redirect } from 'next/navigation'

export default async function RequireHanko({ redirectTo = 'DONT_REDIRECT', children }: {redirectTo?:string, children: React.ReactNode }) {
  const isValid = await validateCurrentSession();

  if (!isValid) {
    if(redirectTo !== 'DONT_REDIRECT'){
      redirect(redirectTo);
    }
    return <div>Could not validate...</div>;
  }

  return <>{children}</>;
}


