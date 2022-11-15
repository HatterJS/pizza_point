import chiefCook from '../../../assets/img/vacancies/vacancies-chef-cook.webp';
import littleCook from '../../../assets/img/vacancies/vacancies-little-cook.webp';
import deliveryman from '../../../assets/img/vacancies/vacancies-deliveryman.webp';
function Vacancies() {
  return (
    <div className="vacancies">
      <header>
        <div></div>
        <h1>Вакансії</h1>
        <div></div>
      </header>
      <article>
        <section className="vacancies__clean">
          <div className="vacancies__image">
            <img src={chiefCook} alt="clean" />
          </div>
          <div className="vacancies__content">
            <h2>Шеф-кухар</h2>
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
        <section className="vacancies__clean">
          <div className="vacancies__image">
            <img src={littleCook} alt="clean" />
          </div>
          <div className="vacancies__content">
            <h2>Помічник</h2>
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
        <section className="vacancies__clean">
          <div className="vacancies__image">
            <img src={deliveryman} alt="clean" />
          </div>
          <div className="vacancies__content">
            <h2>Доставник</h2>
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
export default Vacancies;
