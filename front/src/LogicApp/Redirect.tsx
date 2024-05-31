import {useNavigate} from "react-router-dom";

export default function Redirect({children}: any) {
    const navigate = useNavigate();

    return (
        <div onClick={()=>navigate("/questions")}>
            {children}
        </div>
    );

}