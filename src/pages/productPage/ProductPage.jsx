import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../../components/loader/Loader';
import css from "./ProductPage.module.css";
import Title from "../../components/title/Title"
import ErrorBlock from '../../components/errorBlock/ErrorBlock';
import { Carousel } from 'react-responsive-carousel';
import { base_url } from '../../constants';

const imagesArray = [
  "https://www.rocketmortgage.com/resources-cmsassets/RocketMortgage.com/Article_Images/Large_Images/Stock-Stone-Faced-Tan-Home-That-Is-Newly-Built-And-Surrounded-By-Trees-AdobeStock28274676%20copy.jpg",
  "https://dnm.nflximg.net/api/v6/BvVbc2Wxr2w6QuoANoSpJKEIWjQ/AAAAQZUkwT6XhdDnNqAsPrZiQWWHvhpJo0cviRndWweNeFE0G6sOOa7ltzrwXSocCIsqRqAcruHZtEk-MBx_qLAJz-43yAbJAJXmEYKEMD78GRjJ3ro5x5T97jaAj0NwMiaHvO4mNGLRmwNAPE2yA0LWWV1UfQI.jpg?r=48b",
  "https://images.adsttc.com/media/images/629f/3517/c372/5201/650f/1c7f/large_jpg/hyde-park-house-robeson-architects_1.jpg?1654601149"
]

function ProductPage() {
  const params = useParams(); // get id from URl
  const [isLoading, setLoadin] = useState(true); // 
  const [detail, setDetail] = useState(null); // 
  const [error, setError] = useState(""); // 

  useEffect(() => {
    fetch(base_url + "houses/" + params.product_id) 
      .finally(() => {
        setLoadin(false)
      })
      .then((res) => {
        if(!res.ok) {
          setError("Something went wrong. Please try later!")
        }
        return res.json();
      })
      .then((data) => {
        setDetail(data)
      })
  }, [params.product_id]);


  if(isLoading || !detail ) return <Loader /> 
  if(error) return <ErrorBlock text={error} />
  return (
    <div className='page'>
      <div className={css.mainBlock}>
        <div>
          <Carousel swipeable showIndicators={false} >
            <img src={detail.imgUrl} alt={detail.title} />
            {
              imagesArray.map((item) => <img src={item} />)
            }
          </Carousel>
        </div>
        <div className={css.infoWrapper}>
          <Title>{detail.title}</Title>
          <Title>Цена: {detail.price}$</Title>
          <div>
            Президентская кампания Бориса Ельцина на выборах 1996 года началась де-юре 15 февраля 1996 года, когда действовавший президент Российской Федерации объявил о своём решении баллотироваться на второй президентский срок. Несмотря на свой возраст (ему было 65 лет на момент избрания), серьёзные проблемы со здоровьем и низкий предвыборный рейтинг, Ельцин решил принять участие в Президентская кампания Бориса Ельцина на выборах 1996 года началась де-юре 15 февраля 1996 года, когда действовавший президент Российской Федерации объявил о своём решении баллотироваться 
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductPage