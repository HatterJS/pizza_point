import cook from '../../../assets/img/about/cook.webp';
import clean from '../../../assets/img/about/clean.webp';
import ingredients from '../../../assets/img/about/ingredients.webp';
function About() {
  return (
    <div className="about">
      <header>
        <div></div>
        <h1>Про&nbsp;нас</h1>
        <div></div>
      </header>
      <article>
        <section className="about__goal">
          <h2>Мета</h2>
          <p>
            Наша мета - це передусім <strong>створення приємних вражень</strong>.
          </p>
          <p>
            Розуміємо, що довіра у приготуванні страв накладає особливу відповідальність та є актом
            Вашої довіри, яку ми не можемо втратити. Саме тому увага приділяється кожному кроку,
            задля впевненості, що здійснивши замовлення в <strong>Pizza Point</strong> Ви отримаєте
            не тільки смачні страви але й сервіс гідний уваги.
          </p>
        </section>
        <section className="about__cook">
          <div className="about__content">
            <h2>Вотвори мистецтва</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur aliquid praesentium
              modi voluptas omnis qui nihil velit magnam, unde error blanditiis inventore soluta,
              maiores amet magni pariatur corporis, nulla veniam?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur aliquid praesentium
              modi voluptas omnis qui nihil velit magnam, unde error blanditiis inventore soluta,
              maiores amet magni pariatur corporis, nulla veniam?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur aliquid praesentium
              modi voluptas omnis qui nihil velit magnam, unde error blanditiis inventore soluta,
              maiores amet magni pariatur corporis, nulla veniam?
            </p>
          </div>
          <div className="about__image">
            <img src={cook} alt="cook" />
          </div>
        </section>
        <section className="about__clean">
          <div className="about__image">
            <img src={clean} alt="clean" />
          </div>
          <div className="about__content">
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
        <section className="about__ingredients">
          <h2>Таємний інгредієнт</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, laudantium? Nobis,
            ullam? Nobis nesciunt voluptates nisi modi ratione, aliquid recusandae animi accusantium
            aperiam, eos enim eveniet. Debitis dolorem quisquam saepe.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, laudantium? Nobis,
            ullam? Nobis nesciunt voluptates nisi modi ratione, aliquid recusandae animi accusantium
            aperiam, eos enim eveniet. Debitis dolorem quisquam saepe.
          </p>
          <div className="about__image">
            <img src={ingredients} alt="ingredients" />
          </div>
        </section>
      </article>
    </div>
  );
}
export default About;
