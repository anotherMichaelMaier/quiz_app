import Questions from "../../db.json";

const bookmark = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    height="20"
    width="20"
  >
    <path d="M8.333 35V7.625q0-1.125.834-1.937.833-.813 1.958-.813h17.75q1.125 0 1.958.813.834.812.834 1.937V35L20 30Zm2.792-4.208L20 27l8.875 3.792V7.625h-17.75Zm0-23.167h17.75H20Z" />
  </svg>
);
const bookmarkFilled = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    height="20"
    width="20"
  >
    <path d="M8.333 35V7.625q0-1.125.834-1.937.833-.813 1.958-.813h17.75q1.125 0 1.958.813.834.812.834 1.937V35L20 30Z" />
  </svg>
);
export default function Cards() {
  return (
    <ul>
      {Questions.map((Question) => (
        <li key={Question.id}>
          <h2>{Question.question}</h2>
          <button>{Question.isFavorite ? bookmarkFilled : bookmark}</button>
          <p>{Question.answer}</p>
          <button>Show Answer</button>
          <ul>
            <li>Tag1</li>
            <li>Tag2</li>
            <li>Tag3</li>
          </ul>
        </li>
      ))}
    </ul>
  );
}
