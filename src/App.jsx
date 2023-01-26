import { Header } from "./components/Header";
import styles from './App.module.css'
import { Post } from "./Post";
import { Sidebar } from "./components/Sidebar";

export function App() {
  return (
    <div>
      <Header/>
      
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          <Post
            author="Ricardo Vinciguerra"
            content="Consectetur dolore voluptate eiusmod cillum aliquip qui."
          />
          <Post
            author="Júlia Vinciguerra"
            content="New post about criminal law..."
          />
        </main>
      </div>
    </div>
  )
}
