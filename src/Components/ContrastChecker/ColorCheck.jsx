import { useEffect, useState } from "react";
import "./ColorChecker.css";

export default function ColorChecker({ hex, contrastText }) {
  const [isAccessible, setIsAccessible] = useState("");
  useEffect(() => {
    async function postFetch() {
      const response = await fetch(
        "https://www.aremycolorsaccessible.com/api/are-they",
        {
          method: "POST",
          body: JSON.stringify({ colors: [hex, contrastText] }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      console.log(data);
      setIsAccessible(data.overall);
    }
    postFetch();
  }, [hex, contrastText]);
  return (
    <p>
      <span
        className={
          isAccessible === "Yup"
            ? "bg-green"
            : isAccessible === "Kinda"
            ? "bg-yellow"
            : "bg-red"
        }
      >
        Overall Contrast Score: {isAccessible}
      </span>
    </p>
  );
}
