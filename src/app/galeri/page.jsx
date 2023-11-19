import 'aos/dist/aos.css';
import 'tailwindcss/tailwind.css';
import AOS from 'aos';

function Galeri({ Component, pageProps }) {
 useEffect(() => {
    AOS.init({
      once: true,
    });
 }, []);

 return <Component {...pageProps} />;
}

export default Galeri;
