import React from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setIsCallModalVisible, setIsHeaderMenuVisible } from "../../redux/reducers/statesSlice";
import Menu from "../menu/Menu";

import "./HeaderMenu.scss";

//@ts-ignore
import gift from "../../images/icons/gift.svg";

//@ts-ignore
import stats from "../../images/icons/stats.svg";
import Button from "../UI/buttons/Button";

const HeaderMenu: React.FC = () => {
  const dispatch = useAppDispatch();

  const isMenuVisible = useAppSelector((state) => {
    return state.states.isHeaderMenuVisible;
  });

  return (
    <Menu isMenuVisible={isMenuVisible} closeMenuAction={setIsHeaderMenuVisible} title="Меню" className="header-menu">
      <nav className="header-menu-nav">
        <ul className="header-menu-list">
          <li className="header-menu-list__item">
            <Link to={"/"} className="header-menu-list__link">
              <img src={gift} alt="" /> Все акции
            </Link>
          </li>
          <li className="header-menu-list__item">
            <Link to={"/"} className="header-menu-list__link">
              <img src={stats} alt="" /> Сравнение
            </Link>
          </li>
          <li className="header-menu-list__item">
            <Link to={"/"} className="header-menu-list__link">
              О компании
            </Link>
          </li>
          <li className="header-menu-list__item">
            <Link to={"/"} className="header-menu-list__link">
              Оплата
            </Link>
          </li>
          <li className="header-menu-list__item">
            <Link to={"/"} className="header-menu-list__link">
              Доставка
            </Link>
          </li>
          <li className="header-menu-list__item">
            <Link to={"/"} className="header-menu-list__link">
              Возврат
            </Link>
          </li>
          <li className="header-menu-list__item">
            <Link to={"/"} className="header-menu-list__link">
              Отзывы
            </Link>
          </li>

          <li className="header-menu-list__item">
            <Link to={"/"} className="header-menu-list__link">
              Вопрос-ответ
            </Link>
          </li>
          <li className="header-menu-list__item">
            <Link to={"/"} className="header-menu-list__link">
              Новости
            </Link>
          </li>
          <li className="header-menu-list__item">
            <Link to={"/"} className="header-menu-list__link">
              Контакты
            </Link>
          </li>
        </ul>
      </nav>
      <div className="menu__container">
        <div className="header-order-call header-menu-order-call">
          <div className="header-order-call__period header-menu-order-call__period">Ежедневно, с 8:00 до 18:00</div>
          <a className="header-order-call__phone header-menu-order-call__phone" href="tel:8 800 444 00 65">
            8 800 444 00 65
          </a>
          <Button
            color="light"
            onClick={(e) => {
              // dispatch(setIsHeaderMenuVisible(false));
              dispatch(setIsCallModalVisible(true));
            }}
            className="header-order-call__button header-menu-order-call__button">
            Заказать звонок
          </Button>
        </div>
      </div>
    </Menu>
  );
};

export default HeaderMenu;
