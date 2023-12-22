import React from "react";
import useStore from "../store";
import { shallow } from "zustand/shallow";

const selector = (state) => ({
  setRawCsv: state.setRawCsv,
});

function CsvUpload() {
  //   const [csvData, setCsvData] = React.useState("false");
  const { setRawCsv } = useStore(selector, shallow);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function () {
      // Use reader.result
      localStorage.setItem("csv", reader.result);
      setRawCsv(reader.result);
    };

    reader.readAsText(file);
  };

  return (
    <div>
      <input type="file" accept=".csv" onChange={handleFileUpload} />
      {/* <p>{csvData}</p> */}
    </div>
  );
}

export default CsvUpload;
