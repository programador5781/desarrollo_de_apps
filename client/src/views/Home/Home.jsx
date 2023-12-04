 import CardsContainer from "../../components/CardsContainer/CardsContainer";
import style from "./Home.module.css";

function Home () {
    return (
        <div className={style.home}>
            <div className={style.CardsContainer}>
                <CardsContainer />
            </div>
        </div>
    )
}

export default Home;
