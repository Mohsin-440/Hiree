import React, { useEffect } from 'react'
import { getLocalStorage } from '../../helpers/localStorage/localStorage'
import { useNavigate } from 'react-router-dom'

const Index = () => {
    const navigate = useNavigate()
    useEffect(() => {
        if (!getLocalStorage("userInfo")?.firstName)
            navigate("/user/details")
    }, [navigate])
    return (
        <div>index</div>
    )
}

export default Index