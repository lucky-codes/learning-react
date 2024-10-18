

export const calldata = async()=>{
    try{
        const call =await fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              
              username: 'emilys',
              password: 'emilyspass',
              expiresInMins: 30, 
            }),
            credentials: 'include' // Include cookies (e.g., accessToken) in the request
          })
          if (!call.ok) {
            throw new Error(`HTTP error! status: ${call.status}`); // Throws error with status code
        }

   const data = await call.json()
   console.log(data)
   return data
    }
  catch(error){
   console.log("error occured",error)
  } 
};
calldata()