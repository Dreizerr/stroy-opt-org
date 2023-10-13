import React, { FC } from "react";
import { DefaultProps } from "../../types";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setCatalogVisible, setCurrentTab } from "../../redux/reducers/catalogSlice";

interface IHeaderCatalogTogglerProps extends DefaultProps {}

const HeaderCatalogToggler = () => {
  const isCatalogVisible = useAppSelector((state) => {
    return state.catalog.isMenuVisible;
  });

  const dispatch = useAppDispatch();

  return (
    <button
      onClick={(e) => {
        if (isCatalogVisible) {
          setTimeout(() => {
            dispatch(setCurrentTab(""));
          }, 700);
        }
        dispatch(setCatalogVisible(!isCatalogVisible));
      }}
      className={`header-catalog-toggler ${isCatalogVisible ? "active" : ""}`}>
      <div className="header-catalog-toggler__lines">
        <div className="header-catalog-toggler__line-1"></div>
        <div className="header-catalog-toggler__line-2"></div>
      </div>
      <span>Каталог</span>
    </button>
  );
};

export default HeaderCatalogToggler;
