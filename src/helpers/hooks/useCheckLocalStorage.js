import { useContext, useEffect } from "react"
import { UserInfoContext } from "../../constants/providers"
import { getLocalStorage } from "../localStorage/localStorage";

const useCheckLocalStorage = () => {
    const [userInfo, setUserInfo] = useContext(UserInfoContext);
    useEffect(() => {
        if (!userInfo)
            setUserInfo(getLocalStorage("userInfo"))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userInfo, getLocalStorage("userInfo")])
}

export default useCheckLocalStorage