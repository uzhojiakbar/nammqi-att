import React, { useState } from "react";
import {
  BurgerMenu,
  ChangeLanguage,
  Link,
  Links,
  Logo,
  NavbarContainer,
  NavCenter,
} from "./style";
import logoicon from "../../assets/logo.png";
import { MiniTite } from "../Body/style";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import { Dropdown } from "antd";

const Navbar = () => {
  const nav = useNavigate();

  const [lang1, setLanguage2] = useState(localStorage.getItem("lang") || "ru");
  const { translate, language, setLanguage } = useLanguage(); // useLanguage hook'ini chaqiramiz

  const toHome = (path) => {
    if (document.location.pathname !== path) {
      nav(path);
    }
  };

  const languages = [
    { value: "ru", label: "Русский", icon: "" },
    { value: "en", label: "English", icon: "" },
    { value: "uz", label: "O'zbek", icon: "" },
  ];

  const handleLanguageChange = (value) => {
    setLanguage2(value); // Holatni yangilash
    setLanguage(value);
    localStorage.setItem("lang", value); // Tanlangan tilni saqlash
  };

  const langs = languages.map((lang) => ({
    key: lang.value,
    label: (
      <div
        onClick={() => handleLanguageChange(lang.value)}
        style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
      >
        {lang.label}
      </div>
    ),
  }));

  const NavbarBurgerMenu = () => {
    return [
      {
        key: 1,
        label: <Link to={"/"}>{translate("homePage")}</Link>,
      },
      {
        key: 2,
        label: <Link to={"/direction"}>{translate("map")}</Link>,
      },
      {
        key: 3,
        label: <Link to={"/about"}>{translate("info")}</Link>,
      },
    ];
  };

  return (
    <NavbarContainer>
      <Logo onClick={() => toHome("/")}>
        <img src={logoicon} alt="" />
        <MiniTite size={"16px"}>{translate("title")}</MiniTite>
      </Logo>

      <NavCenter>
        <Links>
          <Link to={"/"}>{translate("homePage")}</Link>
          <Link to={"/direction"}>{translate("map")}</Link>
          <Link to={"/about"}>{translate("info")}</Link>
        </Links>

        <Dropdown
          overlayStyle={{ zIndexPopupBase: "999999999" }}
          menu={{ items: langs }}
          trigger={["click"]}
        >
          <ChangeLanguage className={"inactive"}>{lang1}</ChangeLanguage>
        </Dropdown>

        <Dropdown
          overlayStyle={{ zIndexPopupBase: "999999999" }}
          menu={{ items: NavbarBurgerMenu() }}
          trigger={["click"]}
        >
          <BurgerMenu>
            <i className="fa-solid fa-bars"></i>
          </BurgerMenu>
        </Dropdown>
      </NavCenter>
    </NavbarContainer>
  );
};

export default Navbar;
