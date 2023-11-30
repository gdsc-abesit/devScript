import Masonry from 'react-masonry-css'
import styles from './PhotoGallery.module.scss'
import { Nunito } from 'next/font/google'
import { useEffect } from 'react'

const nunito = Nunito({
  weight: ['400', '800'],
  subsets: ['latin']
})

export function Button({ children, fontSize = '7rem', ...props }) {
  const handleClick = () => {
    import('js-confetti').then(({ default: Confetti }) => {
      const confetti = new Confetti()
      confetti.addConfetti({
        emojis: ['👾', '🕹️', '💻', '📸', '🎧', '🎨']
      })
    })
  }

  return (
    <button className={styles.button} onClick={handleClick} {...props}>
      <span className={styles.shadow} />
      <span className={styles.edge} />
      <span
        style={{ fontSize }}
        className={`${styles.front} ${nunito.className}`}>
        {children}
      </span>
    </button>
  )
}

function Image({ src, text }) {
  return (
    <div className={styles.photo}>
      <img src={src} width="auto" />
      <p>{text}</p>
    </div>
  )
}

export default function PhotoGallery() {
  useEffect(() => { }, [])
  return (
    <div className={styles.photoGallery}>
      <div className={styles.photos}>
        <Button>Hecka fun.</Button>
        <Image
          src="https://horizon.hackclub.com/images/slh.jpg"
          text="Probably, but who knows?"
        />
        <Image
          src="https://horizon.hackclub.com/images/2.jpg"
          text="We're almost at the end"
        />
        <Image
          src="https://horizon.hackclub.com/images/5.jpg"
          text="Look at all these people who have assembled."
        />
        <Image
          src="https://cloud-l2m072onj-hack-club-bot.vercel.app/0zephyr-vercel-kunal.jpg"
          text="Vercel HQ w/ Zephyrites. Creds: Kunal Botla"
        />
        <Image
          src="https://horizon.hackclub.com/images/0.jpg"
          text="Dinos! Dinos everywhere! Orpheus?"
        />
        <Button fontSize="2rem">9 hours of pure joy.</Button>
      </div>
    </div>
  )
}
