import Image from "next/image"
import styles from './Macbook.module.scss'
import { useState } from "react"

const Macbook = () => {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <div className={styles.Macbook}>
        <Image className={!visible ? styles.dBlock : styles.dNone} src='/about/photo.png' width={408.231} height={271.629} alt='macbook' />
        <button className={!visible ? styles.dBlock : styles.dNone} onClick={() => setVisible(!visible)}><Image src='/about/icon.png' width={60.914} height={60.914} /></button>
        <iframe className={!visible ? styles.dNone : styles.video} width="408.231" height="270" src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=7_M3B1hcQ-QDoThl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
    </>
  )
}

export default Macbook