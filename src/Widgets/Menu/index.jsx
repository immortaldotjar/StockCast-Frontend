import React, { useState } from "react";
import styles from './index.module.css'
import Bar from './Animation/Bar'
import Dot from './Animation/Dot'
const DropdownMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={styles.barSvg}>
            <span onClick={toggleDropdown}>
                {!isOpen ? <Dot /> : <Bar />}
            </span>
            {isOpen && (
                <ul
                    style={{
                        position: "absolute",
                        top: "100%",
                        left: 0,
                        backgroundColor: "#fff",
                        border: "1px solid #ccc",
                        listStyle: "none",
                        padding: "10px",
                        margin: 0,
                        width: "100px",
                        color: "black"
                    }}
                >
                    <li style={{ padding: "5px 0", color: "red" }}>Option 1</li>
                    <li style={{ padding: "5px 0" }}>Option 2</li>
                    <li style={{ padding: "5px 0" }}>Option 3</li>
                </ul>
            )}
        </div>
    );
};

export default DropdownMenu;
