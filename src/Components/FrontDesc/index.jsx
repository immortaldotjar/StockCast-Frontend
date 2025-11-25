import { TypeAnimation } from 'react-type-animation';
import styles from './frontDesc.module.css'
import NavBar from '../NavBar';
import Button2 from '../../Widgets/Button2';
import { Link } from 'react-router-dom';
const FrontDesc = () => {
    const stock = "D:/StockCast/Frontend/public/stock.gif"
    
    return (

        <>
            <div className={styles.desc}>

                <TypeAnimation
                    sequence={[

                        'We forecast Stocks.',
                        2000,
                        'We forecast Trends.',
                        2000,
                        'We forecast Risks.',
                        2000,
                        'We forecast Patterns.',
                        2000

                    ]}
                    wrapper="span"
                    speed={50}
                    className={styles.typeWriter}
                    repeat={Infinity}
                />
                <p>We Provide the Precise Infomation and Finest trends to You.</p>
                {/* <div className={styles.gifContainer}>
                    
                </div> */}
                <div style={{width:"200px",height:"40px", userSelect:"none",marginTop: "30px"}}>

                    <Link to ="/signup"><Button2 text="Get Started" /></Link>
                </div>
            </div>

        </>

    );
};

export default FrontDesc