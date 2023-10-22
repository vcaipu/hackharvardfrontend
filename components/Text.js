import { useContext } from "react";
import PContext from "../config/context";
import autoscroll from "../config/autoscroll";

export default function Text(){
    const [data,setData] = useState([]);
    const [isLoading,setIsLoading] = useState(false);
    const [loadingProgress,setLoadingProgress] = useState(0);
    const {stage,nums} = useContext(PContext);

    useEffect(()=>{
        if(stage == 3){

        }
    },[stage])

    const generateData = async () => {
        return 
    }

    const generateSingleData = async () => {
        return 
    }

    const continueFunc = () =>{
        autoscroll("videoContainer")
    }

    return <div id="textStoryContainer">
        <button className="sb" onClick={()=>continueFunc()}>Continue</button>
    </div>
} 