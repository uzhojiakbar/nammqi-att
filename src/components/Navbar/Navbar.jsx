import React, { useState } from "react";
import { ChangeLanguage, Logo, NavbarContainer } from "./style";
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

  return (
    <NavbarContainer>
      <Logo onClick={() => toHome("/")}>
        <img src={logoicon} alt="" />
        <MiniTite size={"16px"}>{translate("title")}</MiniTite>
      </Logo>
      <Dropdown
        overlayStyle={{ zIndex: "999999999" }}
        menu={{ items: langs }}
        trigger={["click"]}
      >
        <ChangeLanguage className={"inactive"}>{lang1}</ChangeLanguage>
      </Dropdown>
    </NavbarContainer>
  );
};

export default Navbar;
