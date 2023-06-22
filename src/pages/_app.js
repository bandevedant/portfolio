import Theme from '../styles/theme';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
// "scripts": {
//   "build": "next build && next export",
//   "start": "next start"
// },