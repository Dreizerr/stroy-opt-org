import React, { useState } from "react";
import { useAppSelector } from "../../redux/hooks";
import { DefaultProps } from "../../types";
import Modal from "../UI/modal/Modal";

import { useForm, SubmitHandler } from "react-hook-form";

import { setIsCallModalVisible } from "../../redux/reducers/statesSlice";
import Input from "../UI/inputs/Input";
import ModalTitle from "../UI/modal/ModalTitle";

import { useIMask } from "react-imask";
import CheckBox from "../UI/inputs/Checkbox";
import Button from "../UI/buttons/Button";
import "./CallModal.scss";

interface ICallModalProps extends DefaultProps {}

interface IFormData {
  name: string;
  phone: string;
  checkBox: boolean;
}

const CallModal: React.FC<ICallModalProps> = () => {
  const { isCallModalVisible } = useAppSelector((state) => {
    return state.states;
  });

  const { register, handleSubmit, formState } = useForm<IFormData>();

  const onSubmit: SubmitHandler<IFormData> = (data) => {
    console.log(data);
  };

  return (
    <Modal
      isAbleToClose={true}
      className="call-modal"
      isModalVisible={isCallModalVisible}
      setModalVisible={setIsCallModalVisible}>
      <ModalTitle className="call-modal-body__title">Заказать обратный звонок</ModalTitle>
      <form noValidate onSubmit={handleSubmit(onSubmit)} className="call-form">
        <Input
          {...register("name", { required: `Заполните обязательные поля!` })}
          autoComplete="off"
          className="call-form__input"
          placeholder="Как к вам обращаться?"
          type="text"
          labelText="Ваше имя"
          isRequired={true}
        />
        <Input
          {...register("phone", {
            required: `Заполните обязательные поля!`,
            minLength: {
              value: 11,
              message: "Заполните обязательные поля!",
            },
          })}
          autoComplete="off"
          className="call-form__input"
          placeholder="+7 (     )       -        -"
          type="text"
          labelText="Номер телефона"
          isRequired={true}
          mask={"+7 (999) 999-99-99"}
        />

        <CheckBox
          {...register("checkBox", { required: "Поставьте все обязятельные флажки!" })}
          classNamesPrefix="call-modal">
          Согласен с обработкой персональных данных в соответствии с политикой конфиденциальности
        </CheckBox>
        <Button color="blue" className="call-form__button">
          Перезвоните мне
        </Button>
        {/* {JSON.stringify(formState.errors)} */}
      </form>
    </Modal>
  );
};

export default CallModal;
