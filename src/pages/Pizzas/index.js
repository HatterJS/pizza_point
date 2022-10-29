import React from 'react';
import GoodsItem from '../../components/GoodsItem';

function Pizzas(props) {
  const pizzasArr = [
    {
      id: 1,
      image: 'img/pizzas/1.png',
      goodsTitle: 'Веганська',
      goodsDescription: 'помідори, моцарела, зелень',
      size: ['26 см', '30 см', '40 см'],
      cost: ['180 грн.', '200 грн.', '220 грн.'],
    },
    {
      id: 2,
      image: 'img/pizzas/2.png',
      goodsTitle: 'Селянська',
      goodsDescription: 'шампіньони, бекон, помідори, оливки, моцарела',
      size: ['26 см', '30 см', '40 см'],
      cost: ['230 грн.', '270 грн.', '310 грн.'],
    },
    {
      id: 3,
      image: 'img/pizzas/3.png',
      goodsTitle: 'Мисливська',
      goodsDescription: 'ковбаски, бекон, моцарела',
      size: ['26 см', '30 см', '40 см'],
      cost: ['250 грн.', '290 грн.', '340 грн.'],
    },
    {
      id: 4,
      image: 'img/pizzas/4.png',
      goodsTitle: 'Мексікано',
      goodsDescription: 'курка, кукурудза, моцарела, перець',
      size: ['26 см', '30 см', '40 см'],
      cost: ['250 грн.', '290 грн.', '340 грн.'],
    },
    {
      id: 5,
      image: 'img/pizzas/5.png',
      goodsTitle: 'Пепероні',
      goodsDescription: 'салямі, моцарела, рукола',
      size: ['26 см', '30 см', '40 см'],
      cost: ['250 грн.', '290 грн.', '340 грн.'],
    },
    {
      id: 6,
      image: 'img/pizzas/6.png',
      goodsTitle: 'Чотири сира',
      goodsDescription: 'моцарела, горгонзола, пармезан, ементаль',
      size: ['26 см', '30 см', '40 см'],
      cost: ['250 грн.', '290 грн.', '340 грн.'],
    },
    {
      id: 7,
      image: 'img/pizzas/7.png',
      goodsTitle: 'Маргарита',
      goodsDescription: 'моцорела, помідори, рукола',
      size: ['26 см', '30 см', '40 см'],
      cost: ['250 грн.', '290 грн.', '340 грн.'],
    },
    {
      id: 8,
      image: 'img/pizzas/8.png',
      goodsTitle: 'Американо',
      goodsDescription: 'бекон, салямі, броколі, моцарела',
      size: ['26 см', '30 см', '40 см'],
      cost: ['250 грн.', '290 грн.', '340 грн.'],
    },
  ];

  return (
    <div className="goods">
      <div className="goods__tittle">
        <div></div>
        <h1>Піцца</h1>
        <div></div>
      </div>
      <div className="goods__itemBlock">
        {pizzasArr.map((obj) => (
          <GoodsItem
            key={obj.id}
            className={'goods__item'}
            {...obj}
            setLocalFavorites={props.setLocalFavorites}
            favorites={props.favorites}
          />
        ))}
      </div>
      <div className="goods__pages">
        <input type="radio" name="page" label="1" defaultChecked />
        <input type="radio" name="page" label="2" />
        <input type="radio" name="page" label="3" />
        <input type="radio" name="page" label="4" />
      </div>
    </div>
  );
}

export default Pizzas;
