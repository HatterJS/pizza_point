import hotPizza from '../../../assets/img/delivery/hot.webp';
import deliveryPizza from '../../../assets/img/delivery/delivery.webp';
function Delivery() {
  return (
    <div className="delivery">
      <header>
        <div></div>
        <h1>Доставка</h1>
        <div></div>
      </header>
      <article>
        <section className="delivery__hotPizza">
          <div className="delivery__content">
            <h2>Гаряча піца</h2>
            <p>
              Ми робимо все можливе, щоб Ви змогли відчути неповторний смак гарячої та запашної
              піци, а також отримали незабутні відчуття.
            </p>
            <p>
              Ми робимо все можливе, щоб Ви змогли відчути неповторний смак гарячої та запашної
              піци, а також отримали незабутні відчуття.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur aliquid praesentium
              modi voluptas omnis qui nihil velit magnam, unde error blanditiis inventore soluta,
              maiores amet magni pariatur corporis, nulla veniam?
            </p>
          </div>
          <div className="delivery__image">
            <img src={hotPizza} alt="cook" />
          </div>
        </section>
        <section className="delivery__deliveryman">
          <div className="delivery__image">
            <img src={deliveryPizza} alt="clean" />
          </div>
          <div className="delivery__content">
            <h2>Естетика</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore eligendi inventore
              aliquam amet mollitia maiores eum, quia harum quod nihil. Quidem obcaecati cupiditate
              fugit vero nam veniam distinctio assumenda. Magni.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore eligendi inventore
              aliquam amet mollitia maiores eum, quia harum quod nihil. Quidem obcaecati cupiditate
              fugit vero nam veniam distinctio assumenda. Magni.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore eligendi inventore
              aliquam amet mollitia maiores eum, quia harum quod nihil. Quidem obcaecati cupiditate
              fugit vero nam veniam distinctio assumenda. Magni.
            </p>
          </div>
        </section>
      </article>
    </div>
  );
}
export default Delivery;
