import Questions from "../../db.json";

export default function Cards() {
  return (
    <ul>
      {Questions.map((Question) => (
        <li key={Question.id}>
          <h2>Question.question</h2>
          <button>Bookmark</button>
          <p>Question.answer</p>
          <button>Show Answer</button>
          <ul>
            <li>html</li>
            <li>CSS</li>
            <li>flexbox</li>
          </ul>
        </li>
      ))}
    </ul>
  );
}
