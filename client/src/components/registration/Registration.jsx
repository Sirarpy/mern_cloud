import "./registration.scss"
import Input from "../../utils/input/Input";

const Registration = () => {
    return (
        <div className='registration'>
            <div className="registration__header">Registration</div>
            <Input type="text" placeholder="enter name" />
            <Input type="text" placeholder="enter name" />
            <Input type="text" placeholder="enter name" />
            <Input type="text" placeholder="enter name" />
            <button className="registration__btn">Sign Up</button>
        </div>
    );
};

export default Registration;