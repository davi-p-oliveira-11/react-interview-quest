function InnerHTML() {
  let data = `<p style="font-size: 25px; color: red;">This is my name</p>`;
  return <div className="InnerHTML">
    <div dangerouslySetInnerHTML={{__html: data}}></div>
    <p style={{ fontSize: 25, color: "red"}}>This is my name</p>
  </div>
}

export default InnerHTML