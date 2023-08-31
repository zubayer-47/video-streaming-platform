function debounce(func: (...args: any[]) => void, delay: number): (...args: any[]) => void {
    let timeoutId: number;

    return (...args: any[]): void => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }

        timeoutId = setTimeout(() => {
            func(...args);
        }, delay * 1);
    };
}

export default debounce;