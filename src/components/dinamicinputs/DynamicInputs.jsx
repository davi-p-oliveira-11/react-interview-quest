import './dyncamicinputs.css'

function DynamicInputs() {
  return (
    <div className='dynamicinput'>
      <div className='input-container'>
        <input placeholder="Name" />
        <input placeholder="Age" />
        <input placeholder="Years of Experience" />
      </div>
      <button>Add New Group</button>
    </div>
  )
}

export default DynamicInputs;