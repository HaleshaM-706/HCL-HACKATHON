

export const SignOn = (body:any) => {
    return new Promise(async (resolve,reject)=>{
        const response = await fetch('http://localhost:3001/api/auth/login', {
            method: 'POST', // or PUT/PATCH
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              username: body.username,
              password: body.password,
            }),
          }).then(async (response)=>{
              const data = await response.json();
              console.log(data);
              resolve(data);
          }).catch((err:any)=>{
            reject(err);
          })
    })
   
  };

  export const checkAuth = () => {
    return new Promise(async (resolve,reject)=>{
        const response = await fetch('http://localhost:3001/api/auth/check-auth', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          }).then(async (response)=>{
              const data = await response.json();
              console.log(data);
              resolve(data.status);
          }).catch((err:any)=>{
            reject(err.response);
          })
    })
   
  };