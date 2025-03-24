// index.js
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Home = () => {
    const router = useRouter();
    useEffect(() => {
        if (!sessionStorage.getItem("lang")){
            sessionStorage.setItem("lang","ar");
        }
        router.push('/accueil');
    }, [router]);

    return null;
};

export default Home;