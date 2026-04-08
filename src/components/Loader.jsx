import React, { useEffect, useState, useRef, useCallback } from 'react';
import styled from 'styled-components';

// --- CONFIGURATION ---
const PLAYBACK_SPEED = 5; // Increase/Decrease this to change video speed
const SLIDE_DURATION = 0.3; // Duration of the "pull-up" animation in seconds
// ---------------------

export default function Loader({ onStartReveal, onComplete }) {
  const [fading, setFading] = useState(false);
  const videoRef = useRef(null);

  const endIntro = useCallback(() => {
    setFading(true);
    onStartReveal();
    setTimeout(() => {
      onComplete();
    }, SLIDE_DURATION * 1000);
  }, [onStartReveal, onComplete]);

  // Fallback in case video fails to load or autoplay doesn't trigger
  useEffect(() => {
    const backupTimer = setTimeout(() => {
      endIntro();
    }, 5000);
    return () => clearTimeout(backupTimer);
  }, [endIntro]);

  // Handle video playback speed
  const handleCanPlay = () => {
    if (videoRef.current) {
      videoRef.current.playbackRate = PLAYBACK_SPEED;
    }
  };

  return (
    <LoaderWrapper className={fading ? 'fade-out' : ''}>
      <div className="video-container">
        <video
          ref={videoRef}
          className="intro-video"
          src="/sign video.mp4"
          autoPlay
          muted
          playsInline
          onCanPlay={handleCanPlay}
          onEnded={endIntro}
          onError={endIntro}
          style={{ width: '100%', height: '100%', objectFit: 'contain' }}
        />
      </div>
    </LoaderWrapper>
  );
}

const LoaderWrapper = styled.div`
  position: fixed;
  inset: 0;
  z-index: 99999;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--intro-bg);
  transition: transform ${SLIDE_DURATION}s cubic-bezier(0.85, 0, 0.15, 1);

  &.fade-out {
    transform: translateY(-100%);
  }

  .video-container {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
  }

  .intro-video {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
