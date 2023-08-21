import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { createNotification } from "utils/notifications";

import Input from "components/shared/Input/Input";
import InteractiveCard from "./components/InteractiveCard";
import Button from "components/shared/Button/Button";

import styles from "./about.module.scss";

const INITIAL_FORM_DATA = {
  user_name: "",
  user_email: "",
  message: "",
};

const FORM_FIELDS = [
  { id: 1, name: "user_name", label: "Your Name", multiline: false },
  { id: 2, name: "user_email", label: "Your E-mail", multiline: false },
  { id: 3, name: "message", label: "Message", multiline: true },
];

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
          {FORM_FIELDS.map((item) => {
            const { id, label, name, multiline } = item;
            return (
              <Input
                key={id}
                label={label}
                name={name}
                value={formData[name as "user_name"]}
                error={errors[name as "user_name"]}
                multiline={multiline}
                onChange={handleChange}
              />
            );
          })}
          <Button disabled={isLoading} type="submit" label="Send request" />
        </form>
      </div>
      <div className={styles.about__line} />
    </div>
  );
};

export default About;
