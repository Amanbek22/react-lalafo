import Card from "../../components/card/Card";
import Loader from "../../components/loader/Loader";
import Title from "../../components/title/Title";
import css from "./HomePage.module.css";
import {useSelector} from "react-redux";

function HomePage() {
  const { isLoading, data } = useSelector((state) => state.houses)
  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className="page">
      <Title position="center">Последние объявления</Title>
      <div className={css.cardsWrapper}>
        {/* <Card text="Продаю 6км дом  в Бишкеке" price="50,000" /> */}
        {data.length ? (
          data.map((item) => (
            <Card
              key={item.id}
              text={item.title}
              price={item.price}
              img={item.imgUrl}
              id={item.id}
            />
          ))
        ) : (
          <h2>No adds</h2>
        )}
      </div>
      <br />
      <br />
      <Title position="center">Последние объявления по авто</Title>
    </div>
  );
}

export default HomePage;
