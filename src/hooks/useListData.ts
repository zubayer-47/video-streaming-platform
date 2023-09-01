import { isAxiosError } from 'axios';
import { useEffect, useState } from 'react';
import useAxiosPrivate from './useAxiosPrivate';

const useListData = <T>(uri = '') => {
	const axiosPrivate = useAxiosPrivate();
	const [state, setState] = useState<{
		page: number;
		pages: number;
		data: T[] | [];
		isLoading: boolean;
	}>({
		page: 0,
		pages: 0,
		data: [],
		isLoading: true,
	});

	useEffect(() => {
		if (!uri) return;
		const controller = new AbortController();

		(async () => {
			try {
				const res = await axiosPrivate.get(uri, {
					signal: controller.signal,
				});
				const resData = res?.data;
				setState({
					page: resData?.page || 0,
					pages: resData?.pages || 0,
					data: resData?.data || [],
					isLoading: false,
				});
			} catch (error) {
				if (isAxiosError(error)) {
					const message = error.response?.data?.message;
					console.log('message :', message);
				}
			}
		})();

		return () => {
			controller.abort();
		};
	}, [axiosPrivate, uri]);

	return {
		state,
	};
};

export default useListData;
