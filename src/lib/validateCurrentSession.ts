import { cookies } from 'next/headers';
const hankoApiUrl = process.env.NEXT_PUBLIC_HANKO_API_URL || '';

export async function validateCurrentSession(){
    const allCookies = await cookies();
    const cookieToken = allCookies.get("hanko")?.value;

    const validationOptions = { 
        method: 'GET',
        headers: {
            'Cookie': `hanko=${cookieToken}` // If using cookie
            // 'Authorization': `Bearer ${token}` // If using Authorization header
        }
    }

      try {
        const response = await fetch(hankoApiUrl + '/sessions/validate', validationOptions);
    
        if (!response.ok) throw new Error('Session validation failed');
        
        
        const verifiedResponse = await response.json();
        console.log(verifiedResponse)

        return verifiedResponse.is_valid;
        
      } catch (error) {
        console.log(error)
        return false;
      }
}
