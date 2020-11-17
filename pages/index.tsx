import {Posts} from "./posts";
import MainLayout from "../components/mainLayout/MainLayout";

 export default function Home() {
    return (
        <MainLayout title={'Home'}>
            <Posts />
        </MainLayout>
    )
}
