import { Link } from "react-router-dom";
import Card from "../../components/card/Card";
import Loader from "../../components/loader/Loader";
import Title from "../../components/title/Title";
import css from "../homePage/HomePage.module.css";

function DasboardPage({ isLoading, housesArray }) {
  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className="page">
      <Title position="center">Мои объявления</Title>
      <Link className="btn-primary" to="/create-ad">+ Create new element</Link>
      <div className={css.cardsWrapper}>
        {/* <Card text="Продаю 6км дом  в Бишкеке" price="50,000" /> */}
        {housesArray.length ? (
          housesArray.map((item) => (
            <Card
              key={item.id}
              text={item.title}
              price={item.price}
              img={item.imgUrl}
              id={item.id}
              isAdmin={true}
            />
          ))
        ) : (
          <h2>No adds</h2>
        )}
      </div>
    </div>
  );
}

export default DasboardPage;
