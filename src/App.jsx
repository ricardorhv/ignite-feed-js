import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from './App.module.css'
import './global.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/ricardorhv.png',
      name: 'Ricardo Vinciguerra',
      role: 'Web Devoloper'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2023-01-26 08:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/ricardorhv.png',
      name: 'Ricardo Vinciguerra',
      role: 'Web Devoloper'
    },
    content: [
      { type: 'paragraph', content: 'Fala pessoall 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2023-01-27 09:50:00'),
  }
]

export function App() {
  return (
    <div>
      <Header/>
      
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          {
            posts.map(post => {
              return (
                <Post
                  author={post.author}
                  content={post.content}
                  publishedAt={post.publishedAt}
                  key={post.id}
                />
              )
            })
          }
        </main>
      </div>
    </div>
  )
}
