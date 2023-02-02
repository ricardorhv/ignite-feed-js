import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { useState } from 'react'
import { Avatar } from './Avatar'
import { Comment } from './Comment'

import styles from './Post.module.css'

export function Post({ author, content, publishedAt }) {
  const [comments, setComments] = useState([])
  const [commentText, setCommentText] = useState('')

  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {locale: ptBR})
  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  })
  let cont = 0

  function handleCreateNewComment() {
    event.preventDefault()
    setComments([...comments, {
      id: comments.length + 1,
      publishedAt: new Date(),
      content: commentText
    }])
    setCommentText('')
  }

  function handleNewCommentChange() {
    event.target.setCustomValidity('')
    setCommentText(event.target.value)
  }

  function handleNewCommentInvalid() {
    event.target.setCustomValidity('Esse campo é obrigatório!')
  }

  function deleteComment(commentToDeleteID) {
    const commentsWithoutDeletedOne = comments.filter(comment => comment.id !== commentToDeleteID)
    setComments(commentsWithoutDeletedOne)
  }

  const isNewCommentEmpty = commentText.length === 0
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl}/>
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
      </header>

      <div className={styles.content}>
        {content.map(line => line.type === 'paragraph' 
          ? <p key={cont++}>{line.content}</p> 
          : <p key={cont++}><a href="">{line.content}</a></p>
        )}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          placeholder='Deixe um comentário'
          name="comment"
          value={commentText}
          onChange={handleNewCommentChange}
          required
          onInvalid={handleNewCommentInvalid}
        />
        <footer>
          <button type='submit' disabled={isNewCommentEmpty}>Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map(comment =>
          (<Comment 
            publishedAt={comment.publishedAt}
            content={comment.content}
            commentID={comment.id}
            onDeleteComment={deleteComment}
            key={comment.id}
          />)
        )}
      </div>
    </article>
  )
}