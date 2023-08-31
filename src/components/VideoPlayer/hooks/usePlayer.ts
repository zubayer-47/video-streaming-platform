import { useCallback, useEffect, useRef, useState } from "react";
import { ButtonClickHandler, InputType } from "../../../types/custom";

export type VisibleWindow =
  | "none"
  | "settings"
  | "playback"
  | "subtitle"
  | "quality";

export type PlayerSettingsType = {
  visibleWindow: VisibleWindow;
  playback: number;
  subtitle: "Off" | string;
  quality: string;
};

const usePlayer = () => {
  const parentRef = useRef<HTMLDivElement>(null);
  const vidRef = useRef<HTMLVideoElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const bufferRef = useRef<HTMLDivElement>(null);

  const [isWaiting, setWaiting] = useState(false);
  const [removeThumbnail, setRemoveThumbnail] = useState(false);
  const [isPlay, setPlay] = useState(false);
  const [isMuted, setMuted] = useState(false);
  const [duration, setDuration] = useState(0);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [volume, setVolume] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const [settings, setSettings] = useState<PlayerSettingsType>({
    visibleWindow: "none",
    playback: 1.0,
    subtitle: "Off",
    quality: "Default",
  });

  useEffect(() => {
    if (!vidRef?.current) return;
    let reachDuration = 5;
    const vidEl = vidRef?.current;

    const onFullscreenChange = () => {
      setIsFullScreen(!!document.fullscreenElement);
    };

    const loadedMetadata = () => {
      setVolume(vidEl.volume);
      // setDuration(+vidEl?.duration || 0);
      // console.log(vidEl.duration)
      // AutoPlay
      // play();
    };

    const watchedDuration = (sec: number) => {
      reachDuration = sec + 5;
      console.log("Watched:", sec);
    };

    const onProgress = () => {
      if (!vidEl.buffered || !bufferRef.current) return;
      if (!vidEl.buffered.length) return;
      const bufferedEnd = vidEl.buffered.end(vidEl.buffered.length - 1);
      const duration = vidEl.duration;
      if (bufferRef && duration > 0) {
        const bufPercent = (bufferedEnd / duration) * 100 + "%";
        bufferRef.current.style.width = bufPercent;
      }
    };

    const onTimeUpdate = () => {
      setWaiting(false);
      if (!vidEl.buffered || !progressRef.current) return;
      const duration = vidEl.duration;
      setDuration(duration);
      setTimeElapsed(vidEl.currentTime);
      if (progressRef && duration > 0) {
        const progressPercent = (vidEl.currentTime / duration) * 100 + "%";
        progressRef.current.style.width = progressPercent;
        const sec = Math.floor(vidEl?.currentTime);
        if (sec >= reachDuration) watchedDuration(sec);
      }
    };

    const onWaiting = () => {
      if (isPlay) setPlay(false);
      setWaiting(true);
    };

    const onPlay = () => {
      if (isWaiting) setWaiting(false);
      setPlay(true);
      // vidEl.play();
    };

    const onPause = () => {
      setPlay(false);
      setWaiting(false);
      // vidEl.pause();
    };

    const onEnd = () => {
      setPlay(false);
      const parent = parentRef?.current;
      if (parent && document.fullscreenElement) document.exitFullscreen();
    };

    const onContextMenu = (e: MouseEvent) => {
      //   e.preventDefault();

      console.log(e);
    };

    // Events
    vidEl.addEventListener("loadedmetadata", loadedMetadata);
    vidEl.addEventListener("timeupdate", onTimeUpdate);
    vidEl.addEventListener("waiting", onWaiting);
    vidEl.addEventListener("play", onPlay);
    vidEl.addEventListener("playing", onPlay);
    vidEl.addEventListener("pause", onPause);
    vidEl.addEventListener("ended", onEnd);
    // vidEl.addEventListener("contextmenu", onContextMenu);
    document.addEventListener("fullscreenchange", onFullscreenChange);
    //Clean up
    return () => {
      vidEl.removeEventListener("loadedmetadata", loadedMetadata);
      vidEl.removeEventListener("waiting", onWaiting);
      vidEl.removeEventListener("play", onPlay);
      vidEl.removeEventListener("playing", onPlay);
      vidEl.removeEventListener("pause", onPause);
      vidEl.removeEventListener("progress", onProgress);
      vidEl.removeEventListener("timeupdate", onTimeUpdate);
      vidEl.removeEventListener("ended", onEnd);
      document.removeEventListener("fullscreenchange", onFullscreenChange);
    };
  }, [isPlay, isWaiting]);

  const handlePlayPause = () => {
    if (!vidRef?.current) return;
    if (!removeThumbnail) setRemoveThumbnail(true);
    setPlay((prev) => !prev);
    const video = vidRef?.current;
    // console.log(video?.paused || video?.ended)
    if (video?.paused || video?.ended) {
      video.play();
    } else {
      video?.pause();
    }
  };

  const handleSeekPosition = (pos: number) => {
    if (!vidRef.current) return;
    if (pos < 0 || pos > 1) return;

    const durationMs = vidRef.current.duration * 1000 || 0;

    const newElapsedMs = durationMs * pos;
    const newTimeSec = newElapsedMs / 1000;
    vidRef.current.currentTime = newTimeSec;
  };

  const updateVolumeBar = (e: InputType) => {
    const video = vidRef?.current;

    if (video) {
      const selectVol = +e.target.value;
      video.volume = selectVol;
      setVolume(selectVol);
      setMuted(selectVol === 0);
      if (video.muted) video.muted = false;
    }
  };

  const toggleMute = () => {
    if (vidRef?.current) {
      setMuted((prev) => !prev);
      vidRef.current.muted = !vidRef.current.muted;
      if (volume === 0 && isMuted) {
        setVolume(0.4);
        vidRef.current.volume = 0.4;
      }
    }
  };

  const toggleFullScreen = useCallback(async () => {
    const parent = parentRef?.current;
    if (parent) {
      if (!document.fullscreenElement) {
        await parent.requestFullscreen();
      } else {
        await document.exitFullscreen();
      }
    }
  }, []);

  const handlePlaybackSeed: ButtonClickHandler = useCallback((e) => {
    const rate = +e.currentTarget.name || 1;
    const vid = vidRef?.current;
    if (vid) {
      setSettings((prev) => ({
        ...prev,
        visibleWindow: "none",
        playback: rate,
      }));
      vid.playbackRate = rate;
    }
  }, []);

  return {
    //Refs
    parentRef,
    vidRef,
    progressRef,
    bufferRef,
    // States
    isWaiting,
    removeThumbnail,
    isPlay,
    isMuted,
    duration,
    timeElapsed,
    volume,
    isFullScreen,
    settings,
    // Handlers
    handlePlayPause,
    handleSeekPosition,
    updateVolumeBar,
    toggleMute,
    toggleFullScreen,
    setSettings,
    handlePlaybackSeed,
  };
};

export default usePlayer;
