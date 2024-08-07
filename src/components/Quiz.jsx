import { useState } from "react";

export default function Quiz() {
  const [questions, setQuestions] = useState(0);
  const [answers, setAnswers] = useState([]);

  return <p>Currently active Question</p>;
}
