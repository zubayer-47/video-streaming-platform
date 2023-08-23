import { useCallback, useEffect, useRef, useState } from 'react';
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

const usePlayer = () => {
	const parentRef = useRef<HTMLDivElement>(null);
	const vidRef = useRef<HTMLVideoElement>(null);

	const [removeThumbnail, setRemoveThumbnail] = useState(false);
	const [isPlay, setPlay] = useState(false);
	const [isMuted, setMuted] = useState(false);
	const [duration, setDuration] = useState(0);
	const [timeElapsed, setTimeElapsed] = useState(0);
	const [volume, setVolume] = useState(0);
	const [isFullScreen, setIsFullScreen] = useState(false);

	const [settings, setSettings] = useState<PlayerSettingsType>({
		visibleWindow: 'none',
		playback: 1.0,
		subtitle: 'Off',
		quality: 'Default',
	});

	useEffect(() => {
		let reachDuration = 5;
		const vid = vidRef?.current;
		function onFullscreenChange() {
			setIsFullScreen(!!document.fullscreenElement);
		}

		const play = async () => {
			try {
				await vid!.play();
				setPlay(true);
				setRemoveThumbnail(true);
			} catch (error) {
				console.log('error :', error);
			}
		};

		const watchedDuration = (sec: number) => {
			reachDuration = sec + 5;
			console.log('Watched:', sec);
		};

		if (vid) {
			// Events
			vid.addEventListener('loadedmetadata', () => {
				setVolume(vid.volume);
				setDuration(+vid?.duration || 0);
				// console.log(vid.duration)
				// AutoPlay
				play();
			});

			vid.addEventListener('timeupdate', () => {
				setTimeElapsed(vid?.currentTime || 0);
				if (!vid.seeking) {
					const sec = Math.floor(vid?.currentTime);
					if (sec >= reachDuration) watchedDuration(sec);
				}
			});

			vid.addEventListener('ended', async () => {
				setPlay(false);
				const parent = parentRef?.current;
				if (parent && document.fullscreenElement)
					await document.exitFullscreen();
			});
		}

		document.addEventListener('fullscreenchange', onFullscreenChange);

		return () => {
			if (vid) {
				vid.removeEventListener('loadedmetadata', () => undefined);
				vid.removeEventListener('timeupdate', () => undefined);
				vid.removeEventListener('ended', () => undefined);
			}
			document.removeEventListener('fullscreenchange', onFullscreenChange);
		};
	}, []);

	const togglePlay = async () => {
		if (!removeThumbnail) setRemoveThumbnail(true);
		setPlay((prev) => !prev);
		const video = vidRef?.current;
		// console.log(video?.paused || video?.ended)
		if (video?.paused || video?.ended) {
			await video.play();
		} else {
			video?.pause();
		}
	};

	const updateSeekBar = (e: InputType) => {
		const video = vidRef?.current;

		if (video) {
			const selectDuration = +e.target.value || 0;
			setTimeElapsed(selectDuration);
			video.currentTime = +selectDuration;
		}
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
		// States
		removeThumbnail,
		isPlay,
		isMuted,
		duration,
		timeElapsed,
		volume,
		isFullScreen,
		settings,
		// Handlers
		togglePlay,
		updateSeekBar,
		updateVolumeBar,
		toggleMute,
		toggleFullScreen,
		setSettings,
		handlePlaybackSeed,
	};
};

export default usePlayer;
