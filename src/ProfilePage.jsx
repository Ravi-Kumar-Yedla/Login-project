import React,{useState,useEffect} from 'react'

const ProfilePage = () => {
    const[user,setUser] = useState(null);
  const[error,setError] = useState('');
   
     useEffect(()=>{
         const fetchUser =async ()=>{
            const storedUser = JSON.parse(localStorage.getItem('user'))
            if(storedUser && storedUser.id){
                try{
                    if(response.ok){
                        const userData = await response.json();
                        localStorage.setItem('user',JSON.stringify(data));
                        setUser(userData);
                      }else{
                        setError('Login Failed')
                      }
                    }catch(error){
                        setError('An Error occured');
                    }
            }else{
                setError('No data found!')
            }
         }
         fetchUser();
     },[])
  return (
    <div>
      <h1>Profile Page</h1>
      {user ? (
        <div>
          <p>ID: {user.id}</p>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
          {/* Add more user details here as needed */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
        
       

    </div>
  )
}

export default ProfilePage
