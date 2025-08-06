import { storyblokInit, apiPlugin } from "@storyblok/react";
import TopNav from "./components/TopNav";

const components = {
  TopNav: TopNav,
};

storyblokInit({
  accessToken: process.env.STORYBLOK_ACCESS_TOKEN,
  use: [apiPlugin],
  components,
  apiOptions: {
    region: "",
  },
});

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
