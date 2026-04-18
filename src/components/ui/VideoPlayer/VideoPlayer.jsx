import { useState, useRef } from 'react'
import styles from './VideoPlayer.module.css'

export default function VideoPlayer({ src, poster, tagline, label }) {
  const [playing, setPlaying]   = useState(false)
  const videoRef                = useRef(null)

  const handlePlay = () => {
    setPlaying(true)
    videoRef.current?.play()
  }

  return (
    <div className={styles.wrapper}>
      <video
        ref={videoRef}
        className={styles.video}
        poster={poster}
        controls={playing}
        playsInline
        preload="none"
      >
        <source src={src} type="video/mp4" />
      </video>

      {!playing && (
        <div className={styles.overlay}>
          {tagline && <p className={styles.tagline}>{tagline}</p>}

          <button
            className={styles.playBtn}
            onClick={handlePlay}
            aria-label={label}
          >
            <svg width="60" height="60" viewBox="0 0 24 24" fill="white" aria-hidden="true">
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
        </div>
      )}
    </div>
  )
}
