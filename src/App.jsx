import BoxContent from "./components/BoxContent/BoxContent";
import Header from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";

export default function App() {
    return (
        <>
            <BoxContent>
                <Header />
                <MainContent />
            </BoxContent>
        </>
    );
}
