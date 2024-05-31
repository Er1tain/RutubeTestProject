import {useNavigate} from "react-router-dom";

export default function Redirect({url,children}: any) {
    const navigate = useNavigate();

    return (
        <div onClick={()=>navigate(url)}>
            {children}
        </div>
    );

}