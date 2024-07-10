import React, { useContext } from 'react';
import { AuthContent } from '../FireBase/FirebaseProvider';

const useAuth = () => {
   

  const all = useContext(AuthContent);
    return all
        
    
};

export default useAuth;