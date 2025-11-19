import React, { useContext } from 'react';
import { AuthContex } from '../Contex/AuthContex/AuthContex';

const useAuth = () => {
    const authInfo = useContext(AuthContex);
    return authInfo;
};

export default useAuth;