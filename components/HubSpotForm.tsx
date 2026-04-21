"use client";

import { useEffect } from "react";
import styles from "./HubSpotForm.module.css";

export default function HubSpotForm() {
  useEffect(() => {
    const scriptId = "hs-forms-script";
    if (document.getElementById(scriptId)) return;

    const script = document.createElement("script");
    script.id = scriptId;
    script.src = "https://js-na2.hsforms.net/forms/embed/2457674.js";
    script.defer = true;
    document.head.appendChild(script);
  }, []);

  return (
    <div className={styles.wrapper}>
      <div
        className={`hs-form-frame ${styles.formContainer}`}
        data-region="na2"
        data-form-id="03ede4e1-48eb-4338-832b-7ab9d967b7ad"
        data-portal-id="2457674"
      />
    </div>
  );
}
