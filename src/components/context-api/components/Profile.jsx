export default function Profile({ setName }) {
  return (
    <div>

      <button onClick={() => setName("John")}>Change the name</button>
    </div>
  );
}
