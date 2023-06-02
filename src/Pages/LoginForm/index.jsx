import LoginFormLeftSide from './Components/LoginFormLeftSide';
import RightSide from './Components/RightSide';
import "./index.css";
import Layout from "../../layouts/layout";
import useCheckLocalStorage from '../../helpers/hooks/useCheckLocalStorage';
import { useContext, useEffect } from 'react';
import { UserInfoContext } from '../../constants/providers';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
  useCheckLocalStorage();

  const [userInfo] = useContext(UserInfoContext);

  const navigate = useNavigate();
  
  useEffect(() => {
    if (userInfo)
      navigate("/")
  }, [userInfo, navigate])

  return (
    <Layout>
      <div className="lg:w-[90%] lg:mx-auto lg:shadow-[10px_10px_6px_rgba(0,0,0,0.16)] lg:rounded-[37px] flex lg:my-5 max-w-[1300px] min-w-[275px]">
        <LoginFormLeftSide />
        <RightSide />
      </div>
    </Layout>
  );
}

export default LoginForm;
