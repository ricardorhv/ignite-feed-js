import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from './App.module.css'
import './global.css'

const profileInfo = {
  id: 1,
  name: 'Ricardo Vinciguerra',
  role: 'Web Developer',
  avatarUrl: 'https://github.com/ricardorhv.png',
}

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/ricardorhv.png',
      name: 'Ricardo Vinciguerra',
      role: 'Web Devoloper'
    },
    content: [
      { type: 'paragraph', content: 'Fala pessoall 👋' },
      { type: 'paragraph', content: 'Acabei de terminar um projeto feito junto com o curso Ignite da Rocketseat. Bora que foguete não ré!!!🚀' },
      {type: 'link', content: 'fundamento-react-js'}
    ],
    publishedAt: new Date('2023-02-01 09:50:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Sênior Web Dev'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2023-01-26 08:00:00'),
  },
]

export function App() {
  return (
    <div>
      <Header/>
      
      <div className={styles.wrapper}>
        <Sidebar profileInfo={profileInfo}/>
        <main>
          {
            posts.map(post => {
              return (
                <Post
                  key={post.id}
                  author={post.author}
                  content={post.content}
                  publishedAt={post.publishedAt}
                />
              )
            })
          }
        </main>
      </div>
    </div>
  )
}
