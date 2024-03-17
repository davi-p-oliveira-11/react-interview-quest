function InnerHTML() {
  // HTML
  let data = `<p style="font-size: 25px; color: red;">This is my name</p>`;
  let data2 = `<b style="font-size: 25px; color: red;">This is my name</bcd s>`;
  return (
    <div className="InnerHTML">
      <div dangerouslySetInnerHTML={{ __html: data }}></div>
      <div dangerouslySetInnerHTML={{ __html: data2 }}></div>
      {/* JSX */}
      <p style={{ fontSize: 25, color: "red" }}>This is my name</p>
    </div>
  );
}

export default InnerHTML;
