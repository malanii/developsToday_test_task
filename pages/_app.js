import {wrapper} from '../redux/store'
import {getPosts} from "../redux/actions/postsAction";
import '../styles/global.css'

const MyApp = ({Component, pageProps, store}) => {
    return (
        <Component {...pageProps} />
    );
};
MyApp.getInitialProps = async ({Component, ctx}) => {
   await ctx.store.dispatch(getPosts());
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
    return {pageProps};
};
export default wrapper.withRedux(MyApp);