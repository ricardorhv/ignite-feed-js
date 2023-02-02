import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { ThumbsUp, Trash } from 'phosphor-react'
import { useState } from 'react'
import { Avatar } from './Avatar'

import styles from './Comment.module.css'

/*
author
publishedAt
content
*/

export function Comment({publishedAt, content, commentID, onDeleteComment}) {
  const [likeCount, setLikeCount] = useState(0)

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  })
  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {locale: ptBR})

  function handleDeleteComment() {
    onDeleteComment(commentID)
  }

  function handleLikeComment() {
    setLikeCount(likeCount + 1)
  }

  return(
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/ricardorhv.png"/>

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Ricardo Vinciguerra</strong>
              <time
                dateTime={publishedAt.toISOString()}
                title={publishedDateFormatted}
              >
                {publishedDateRelativeToNow}
              </time>
            </div>
            <button onClick={handleDeleteComment} title='Deletar comentário'>
              <Trash size={24}/>
            </button>
          </header>

          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp/>
            Aplaudir <span>{likeCount }</span>
          </button>
        </footer>
      </div>
    </div>
  )
}