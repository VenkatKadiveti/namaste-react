import { useEffect, useState } from "react";

const useOnlineStatus = () => {
    const [onLineStatus, setonLineStatus] = useState(true);

    useEffect(() => {
        window.addEventListener('offline', () => {
            setonLineStatus(false)
        });

        window.addEventListener('online', () => {
            setonLineStatus(true)
        })
    }, [])

    return onLineStatus;
}

export default useOnlineStatus;