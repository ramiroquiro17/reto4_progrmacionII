import Navbar from '../components/barraNavegacion';
import CarouselPage from '../components/carousel';
import Recomendations from '../components/recomendations';
import Footer from '../components/footer';
import Categories from '../components/categories';


export default function Home(){
    return (
        <>
            <Navbar />
            <CarouselPage />
            <Categories />
            <Recomendations />
            <Footer/>
        </>
    )
}