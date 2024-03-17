import { useState } from 'react';
import ReactQuill from 'react-quill';
import "react-quill/dist/quill.snow.css"

{/*
function InnerHTML() {
  const [quill, setQuill] = useState("");
  // HTML
  let data = `<p style="font-size: 25px; color: red;">This is my name</p>`;
  let data2 = `<b style="font-size: 25px; color: red;">This is my name</bcd s>`;

  const getQuillData = (value) => {
    setQuill(value)
  console.log(quill)
  return (
    <div className="InnerHTML">
      <div dangerouslySetInnerHTML={{ __html: data }}></div>
      <div dangerouslySetInnerHTML={{ __html: data2 }}></div>
      {/* JSX */}
      {/*}
      <p style={{ fontSize: 25, color: "red" }}>This is my name</p>

      <ReactQuill onChange={getQuillData}/>
    </div>
  );
}

/*}

*/}
