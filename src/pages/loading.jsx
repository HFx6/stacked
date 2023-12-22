import { useEffect, useState } from "react";
import useStore from "../store";
import { shallow } from "zustand/shallow";

const selector = (state) => ({
  raw_csv: state.raw_csv,
});

export default function Loading() {
  const [csvData, setCsvData] = useState(null);
  const { raw_csv } = useStore(selector, shallow);

  

  useEffect(() => {
    console.log(raw_csv);
  }, []);

  return <p>Loading</p>;
}
