import { useEffect, useState } from "react";

export default function ClientOnlyComponent() {
  const [width, setWidth] = useState<number | null>(null);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return <div>Client width: {width}</div>;
}
