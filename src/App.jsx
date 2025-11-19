import './App.css'
import BlogCard from "./components/BlogCard.jsx";

function App() {

  return (
    <div>
        <BlogCard
            image="/assets/images/BlogImage.png"
            category="HTML & CSS"
            title="Практична №3"
            description="Мета практичної роботи полягає в тому, щоб налаштувати середовище розробки VS Code, а також реалізувати картку блогу для вдосконалення фундаментальних навичок з HTML та CSS."
            author="Богдана"
        />
    </div>
  )
}

export default App
