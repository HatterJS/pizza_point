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
        <section className="vacancies__benefits">
          <div className="vacancies__about">
            <h2>Чому варто обрати нашу компанію</h2>
            <p>
              «Pizza point» прогресивна та амбітна компанія, яка дбає аби смачн та гаряча піца піца
              у найшвидший спосіб потрапляли до наших замовників. Ми дбаємо аби наші працівники були
              забезпечені відповідним обладнанням та мали можливість підвищити кваліфікацію.
            </p>
          </div>
          <ul>
            <h2>Ми пропонуємо</h2>
            <li>Наставництво від досвідчених кухарів</li>
            <li>Постійно зростаюча заробітна платня</li>
            <li>Забезпечення відповідним обладнанням</li>
            <li>Знижки на все меню нашого закладу</li>
            <li>Оплачуване стажування</li>
            <li>Доаставка додому після роботи</li>
          </ul>
        </section>
        <section className="vacancies__chiefCook">
          <div className="vacancies__image">
            <img src={chiefCook} alt="chiefCook" />
          </div>
          <div className="vacancies__content">
            <h2>Шеф-кухар</h2>
            <div className="vacancies__description">
              <ul>
                <h4>Вимоги:</h4>
                <li>Досвід роботи на кухні 2 роки</li>
                <li>Вміння організувати робочий процес</li>
                <li>Знання технології приготування піци</li>
                <li>Відповідальність за результат</li>
                <li>Бажання експерементувати</li>
              </ul>
              <ul>
                <h4>Обов'язки:</h4>
                <li>Організація та контроль роботи на кухні</li>
                <li>Приготування піци та десертів</li>
                <li>Наставництво молодих працівників</li>
                <li>Дотримання санітарно-гігієнічних норм праці</li>
              </ul>
            </div>
          </div>
        </section>
        <section className="vacancies__littleCook">
          <div className="vacancies__image">
            <img src={littleCook} alt="littleCook" />
          </div>
          <div className="vacancies__content">
            <h2>Піцайоло</h2>
            <div className="vacancies__description">
              <ul>
                <h4>Вимоги:</h4>
                <li>Досвід роботи на кухні</li>
                <li>Пунктуальність та відповідальність</li>
                <li>Бажання навчатись</li>
                <li>Швидке приготування без впливу на якість</li>
                <li>Інтерес до готування</li>
              </ul>
              <ul>
                <h4>Обов'язки:</h4>
                <li>Приготування піци. Багато піци!</li>
                <li>Дотримання технології приготування страв</li>
                <li>Дотримання санітарно-гігієнічних норм праці</li>
              </ul>
            </div>
          </div>
        </section>
        <section className="vacancies__deliveryman">
          <div className="vacancies__image">
            <img src={deliveryman} alt="deliveryman" />
          </div>
          <div className="vacancies__content">
            <h2>Кур'єр</h2>
            <div className="vacancies__description">
              <ul>
                <h4>Вимоги:</h4>
                <li>Власний транспорт</li>
                <li>Поважне відношення до об'єкту доставки</li>
                <li>Ввічлевість та охайність</li>
              </ul>
              <ul>
                <h4>Обов'язки:</h4>
                <li>Доставка замовлень</li>
                <li>Збереження цілісності страв</li>
                <li>Відповідальність за об'єкт доставки</li>
              </ul>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
}
export default Vacancies;
