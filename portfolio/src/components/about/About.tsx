import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { createNotification } from "../../utils/notifications";

import Input from "../shared/Input/Input";
import InteractiveCard from "./components/InteractiveCard";

import styles from "./about.module.scss";

const INITIAL_FORM_DATA = {
  user_name: "",
  user_email: "",
  message: "",
};

const validate = (values: { [key: string]: string }) => {
  const errors = Object.entries(values).reduce((acc, [key, value]) => {
    if (!value) {
      return {
        ...acc,
        [key]: "error",
      };
    }

    return acc;
  }, INITIAL_FORM_DATA);

  return errors;
};

const About = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const [errors, setErrors] = useState(INITIAL_FORM_DATA);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setErrors((prev) => {
      return {
        ...prev,
        [name]: "",
      };
    });

    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errors = validate(formData);
    setErrors(errors);

    const isErrorExist = Object.values(errors).some(Boolean);
    const isShouldPreventSubmit = isLoading || isErrorExist;

    if (isShouldPreventSubmit) {
      return;
    }

    try {
      setIsLoading(true);
      await emailjs.sendForm(
        "service_jfts3g7",
        "template_lv3j79d",
        form.current || "",
        "yRKltbjBObGL7ATsy"
      );
      createNotification("success");
      setFormData(INITIAL_FORM_DATA);
    } catch (e) {
      createNotification("error");
    }

    setIsLoading(false);
  };

  return (
    <div className={styles.about}>
      <div className={styles.about__line} />
      <div className={styles.about__contentWrapper}>
        <div style={{ marginBottom: 50 }}>
          <InteractiveCard />
        </div>
        <form
          ref={form}
          onSubmit={sendEmail}
          className={styles.about__formWrapper}
        >
          <Input
            onChange={handleChange}
            value={formData.user_name}
            error={errors["user_name"]}
            name="user_name"
            label="Your Name"
          />
          <Input
            onChange={handleChange}
            value={formData.user_email}
            error={errors["user_email"]}
            name="user_email"
            label="Your E-mail"
          />
          <Input
            onChange={handleChange}
            value={formData.message}
            error={errors["message"]}
            name="message"
            label="Message"
            multiline
          />
          <button
            disabled={isLoading}
            type="submit"
            className={styles.about__formWrapper_btn}
          >
            Send request
          </button>
        </form>
      </div>
      <div className={styles.about__line} />
    </div>
  );
};

export default About;
