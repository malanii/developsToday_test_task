import { wrapper } from "../redux/store";
import { getPosts } from "../redux/actions/postsActions";
import "../styles/global.css";
import { AppProps } from "next/app";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};
MyApp.getInitialProps = async ({ Component, ctx }) => {
  await ctx.store.dispatch(getPosts());
  const pageProps = Component.getInitialProps
    ? await Component.getInitialProps(ctx)
    : {};
  return { pageProps };
};
export default wrapper.withRedux(MyApp);
