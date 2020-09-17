import NProgress from '../components/TopProgressBar';
import '../styles/cssreset.css';
import '../styles/global.css';
// import '../styles/nprogress.css';

// Import Swiper styles
import 'swiper/swiper-bundle.css';
// import '../styles/tailwind.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <NProgress />
      <Component {...pageProps} />
    </>
  );
}
