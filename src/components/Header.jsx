import logoImage from "../assets/quiz-logo.png";

export default function Header() {
  return (
    <header>
      <img src={logoImage} alt="Quiz Logo" />
      <h1>Quiz</h1>
    </header>
  );
}
