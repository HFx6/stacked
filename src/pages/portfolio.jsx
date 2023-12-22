import { useEffect, useState } from "react";

export default function Portfolio() {
  const [csvData, setCsvData] = useState("false");

  useEffect(() => {
    setCsvData(localStorage.getItem("csv"));
  }, []);

  return <p>{csvData}</p>;
}
