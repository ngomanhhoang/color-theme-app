import { useEffect, useState } from "react";

export default function ColorCopy({ hex }) {
  const [copied, setCopied] = useState(false);

  async function writeClipboardText() {
    try {
      await navigator.clipboard.writeText(hex);
      console.log(hex);
      
      setCopied(true);
    } catch (error) {
      console.error(error.message);
    }
  }
  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => setCopied(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [copied]);
  return (
    <button onClick={writeClipboardText}>{copied ? "COPIED!!" : "COPY"}</button>
  );
}
