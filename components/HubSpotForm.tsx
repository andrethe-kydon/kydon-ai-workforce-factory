"use client";

import { useEffect, useRef } from "react";
import styles from "./HubSpotForm.module.css";

interface HubSpotFormProps {
  portalId: string;   // Your HubSpot Portal ID  e.g. "12345678"
  formId: string;     // Your HubSpot Form ID     e.g. "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
  region?: string;    // e.g. "na1" or "eu1"
}

declare global {
  interface Window {
    hbspt?: {
      forms: {
        create: (config: Record<string, unknown>) => void;
      };
    };
  }
}

export default function HubSpotForm({
  portalId,
  formId,
  region = "na1",
}: HubSpotFormProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const loaded = useRef(false);

  useEffect(() => {
    if (loaded.current) return;
    loaded.current = true;

    // Load HubSpot script once
    const scriptId = "hs-forms-script";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "//js.hsforms.net/forms/embed/v2.js";
      script.async = true;
      script.onload = () => createForm();
      document.head.appendChild(script);
    } else {
      createForm();
    }

    function createForm() {
      if (window.hbspt && containerRef.current) {
        window.hbspt.forms.create({
          region,
          portalId,
          formId,
          target: `#hs-form-target-${formId}`,
        });
      }
    }
  }, [portalId, formId, region]);

  return (
    <div className={styles.wrapper}>
      <div
        id={`hs-form-target-${formId}`}
        ref={containerRef}
        className={styles.formContainer}
      />
    </div>
  );
}
