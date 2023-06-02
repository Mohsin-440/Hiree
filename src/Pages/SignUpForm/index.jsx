import SignupFormLeftSide from "./Components/SignupFormleftSide";
import RightSide from "../LoginForm/Components/RightSide";
import "./index.css";
import Layout from "../../layouts/layout";

function SignupForm() {
  return (
    <Layout>
      <div className="lg:w-[90%] lg:mx-auto lg:shadow-[10px_10px_6px_rgba(0,0,0,0.16)] lg:rounded-[37px] flex lg:my-5 max-w-[1300px] min-w-[275px]">
        <SignupFormLeftSide />
        <RightSide />
      </div>
    </Layout>
  );
}

export default SignupForm;
