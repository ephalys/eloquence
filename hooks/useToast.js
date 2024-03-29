import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

export const useToast = () => {
    const [showToast, setShowToast] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setShowToast(true);
            toast();
        }, 1000);

        return () => {
            clearTimeout(timeout);
            toast.remove();
        };
    }, [showToast]);      
    return showToast;
};
