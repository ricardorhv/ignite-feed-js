import { PencilLine } from 'phosphor-react'
import { Avatar } from './Avatar'
import { useState } from 'react'

import styles from './Sidebar.module.css'

export function Sidebar({ profileInfo }) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [profile, setProfile] = useState(profileInfo)
  const [profileName, setProfileName] = useState(profile.name)
  const [profileRole, setProfileRole] = useState(profile.role)

  function handleOpenModal() {
    setIsModalOpen(true)
  }

  function handleCloseModal() {
    event.preventDefault()
    setIsModalOpen(false)
    setProfileName(profile.name)
    setProfileRole(profile.role)
  }

  function handleChangeProfileName() {
    setProfileName(event.target.value)
  }

  function handleChangeProfileRole() {
    setProfileRole(event.target.value)
  }

  function handleChangeProfileInfo() {
    setProfile({...profile, 
      name: profileName,
      role: profileRole,
    })
    setIsModalOpen(false)
  }

  return (
    <aside className={styles.sidebar}>
      <img 
        src="https://images.unsplash.com/photo-1566837945700-30057527ade0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
        className={styles.cover}
      />

      <div className={styles.profile}>
        <Avatar src={profile.avatarUrl}/>

        <strong>{profile.name}</strong>
        <span>{profile.role}</span>
      </div>
      
      <footer>
        <button onClick={handleOpenModal} type='button'>
          <PencilLine
            size={20}
          />
          Editar seu perfil
        </button>
      </footer>

      {
        isModalOpen ? (
          <form onSubmit={handleChangeProfileInfo} className={styles.modal}>
            <Avatar src="https://github.com/ricardorhv.png"/>
            
            <div className={styles.profileInfo}>
              <input type="text" value={profileName} onChange={handleChangeProfileName}/>
              <input type="text" value={profileRole} onChange={handleChangeProfileRole}/>
            </div>

            <footer>
              <button onClick={handleCloseModal} type='button'>Cancelar</button>
              <button type='submit'>Salvar</button>
            </footer>
          </form>
        ) : ''
      }

    </aside>
  )
}