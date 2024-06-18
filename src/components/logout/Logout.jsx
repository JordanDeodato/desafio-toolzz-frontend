import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Logout() {
    const navigate = useNavigate();

    useEffect(() => {
        localStorage.removeItem('userToken');

        navigate('/login', { replace: true });
    }, [navigate]);

    return null;
}

export default Logout;