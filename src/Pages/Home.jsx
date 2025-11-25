import NavBar from "../Components/NavBar"
import FrontDesc from "../Components/FrontDesc"

import Chart from "../Components/Chart"


const Home = () => {
    return (
        <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", overflowX: "hidden", backgroundColor: "black", position: "relative" ,overflowY:"hidden"}}>
            <FrontDesc />
            <Chart/>
        </div>
    )
}

export default Home