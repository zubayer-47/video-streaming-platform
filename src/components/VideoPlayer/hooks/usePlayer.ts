import { useCallback, useEffect, useRef, useState } from 'react';
import { BASE_URL } from '../../../libs/axios';
import { ButtonClickHandler, InputType } from '../../../types/custom';

export type VisibleWindow =
	| 'none'
	| 'settings'
	| 'playback'
	| 'subtitle'
	| 'quality';

export type PlayerSettingsType = {
	visibleWindow: VisibleWindow;
	playback: number;
	subtitle: 'Off' | string;
	quality: string;
};

export type AdsType = {
	title: string;
	desc: string;
	link: string;
	vidSrc: string;
};

const usePlayer = (videoId: string) => {
	const parentRef = useRef<HTMLDivElement>(null);
	const vidRef = useRef<HTMLVideoElement>(null);
	const vidSrcRef = useRef<HTMLSourceElement>(null);
	const progressRef = useRef<HTMLDivElement>(null);
	const bufferRef = useRef<HTMLDivElement>(null);
	const contextRef = useRef<HTMLUListElement>(null);

	const [isWaiting, setWaiting] = useState(false);
	const [removeThumbnail, setRemoveThumbnail] = useState(false);
	const [isPlay, setPlay] = useState(false);
	const [isMuted, setMuted] = useState(false);
	const [duration, setDuration] = useState(0);
	const [timeElapsed, setTimeElapsed] = useState(0);
	const [volume, setVolume] = useState(0);
	const [isFullScreen, setIsFullScreen] = useState(false);
	const [ads, setAds] = useState<AdsType[]>([]);

	const [settings, setSettings] = useState<PlayerSettingsType>({
		visibleWindow: 'none',
		playback: 1.0,
		subtitle: 'Off',
		quality: 'Default',
	});

	useEffect(() => {
		if (!vidRef?.current || !vidSrcRef?.current) return;
		const vidEl = vidRef?.current;
		const src = vidSrcRef.current;
		// console.log('videoId :', videoId);
		src.src = `${BASE_URL}/videos/str/${videoId}`;
		vidEl.load();

		// load ads
		// handleAds();

		if (!vidEl.paused) {
			setRemoveThumbnail(false);
		} else {
			setRemoveThumbnail(true);
		}
	}, [videoId]);

	useEffect(() => {
		if (!vidRef?.current || !parentRef.current) return;
		let reachDuration = 5;
		const vidEl = vidRef?.current;
		const parentEl = parentRef?.current;

		const onFullscreenChange = () => {
			setIsFullScreen(!!document.fullscreenElement);
		};

		const loadedMetadata = () => {
			setVolume(vidEl.volume);
			setDuration(vidEl.duration);

			// setDuration(+vidEl?.duration || 0);
			// console.log(vidEl.duration)
			// AutoPlay
			// play();
		};

		const watchedDuration = (sec: number) => {
			reachDuration = sec + 5;
			console.log('Watched:', sec);
		};

		const onProgress = () => {
			if (!vidEl.buffered || !bufferRef.current) return;
			if (!vidEl.buffered.length) return;
			const bufferedEnd = vidEl.buffered.end(vidEl.buffered.length - 1);
			console.log({ bufferedEnd });
			const duration = vidEl.duration;
			if (bufferRef && duration > 0) {
				const bufPercent = (bufferedEnd / duration) * 100 + '%';
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
				const progressPercent = (vidEl.currentTime / duration) * 100 + '%';

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
			// contextRef.current.

			// vidEl.pause();
		};

		const onEnd = () => {
			setPlay(false);
			const parent = parentRef?.current;
			if (parent && document.fullscreenElement) document.exitFullscreen();
		};

		const onKeyDown = (e: KeyboardEvent) => {
			const key = e.key.toLowerCase();
			if (key === 'arrowright') {
				setTimeElapsed((prev) => prev + 10);
				vidEl.currentTime += 10;
			} else if (key === 'arrowleft') {
				setTimeElapsed((prev) => prev - 10);
				vidEl.currentTime -= 10;
			}
		};

		// Events
		vidEl.addEventListener('loadedmetadata', loadedMetadata);
		vidEl.addEventListener('timeupdate', onTimeUpdate);
		vidEl.addEventListener('waiting', onWaiting);
		vidEl.addEventListener('play', onPlay);
		vidEl.addEventListener('playing', onPlay);
		vidEl.addEventListener('pause', onPause);
		vidEl.addEventListener('ended', onEnd);
		document.addEventListener('fullscreenchange', onFullscreenChange);
		parentEl.addEventListener('keydown', onKeyDown);
		//Clean up
		return () => {
			vidEl.removeEventListener('loadedmetadata', loadedMetadata);
			vidEl.removeEventListener('waiting', onWaiting);
			vidEl.removeEventListener('play', onPlay);
			vidEl.removeEventListener('playing', onPlay);
			vidEl.removeEventListener('pause', onPause);
			vidEl.removeEventListener('progress', onProgress);
			vidEl.removeEventListener('timeupdate', onTimeUpdate);
			vidEl.removeEventListener('ended', onEnd);
			parentEl.removeEventListener('keydown', onKeyDown);
			document.removeEventListener('fullscreenchange', onFullscreenChange);
		};
	}, [isPlay, isWaiting]);

	const handleAds = () => {
		// fetch ads here
		setAds((prev) => [...prev, { desc: '', link: '', title: '', vidSrc: '' }]);
	};

	const stopAds = () => {
		// fetch ads here
		setAds([]);
	};

	const handleContextMenu: React.MouseEventHandler<HTMLDivElement> = (e) => {
		e.preventDefault();
		const ulElem = contextRef.current;

		// hide context menu when ads exist
		if (!ulElem || ads.length) return;

		ulElem.classList.remove('hidden');
		ulElem.classList.add('block');
		ulElem.style.position = 'absolute';
		ulElem.style.top = `${e.pageY}px`;
		ulElem.style.left = `${e.pageX}px`;
	};

	const removeContext = () => {
		const ulEl = contextRef?.current;
		if (!ulEl) return;

		ulEl.classList.remove('block');
		ulEl.classList.add('hidden');
	};

	const handlePlayPause = () => {
		if (!vidRef?.current) return;
		if (!removeThumbnail) setRemoveThumbnail(true);
		setPlay((prev) => !prev);
		const video = vidRef?.current;

		removeContext();
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

		removeContext();
		const durationMs = vidRef.current.duration * 1000 || 0;

		const newElapsedMs = durationMs * pos;
		const newTimeSec = newElapsedMs / 1000;
		vidRef.current.currentTime = newTimeSec;
	};

	const updateVolumeBar = (e: InputType) => {
		const video = vidRef?.current;

		removeContext();
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
			removeContext();
			vidRef.current.muted = !vidRef.current.muted;
			if (volume === 0 && isMuted) {
				setVolume(0.4);
				vidRef.current.volume = 0.4;
			}
		}
	};

	const toggleFullScreen = useCallback(async () => {
		const parent = parentRef?.current;

		removeContext();
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

		removeContext();
		if (vid) {
			setSettings((prev) => ({
				...prev,
				visibleWindow: 'none',
				playback: rate,
			}));
			vid.playbackRate = rate;
		}
	}, []);

	return {
		//Refs
		parentRef,
		vidRef,
		vidSrcRef,
		progressRef,
		bufferRef,
		contextRef,
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
		ads,
		// Handlers
		handleContextMenu,
		handlePlayPause,
		handleSeekPosition,
		updateVolumeBar,
		toggleMute,
		toggleFullScreen,
		setSettings,
		handlePlaybackSeed,
		stopAds,
	};
};

export default usePlayer;
