import React from "react";
import sushiImage from "../../Assets/sushi.jpg"
import styles from "./Header.module.css"
import HeaderCartButton from "./HeaderCartButton";

function Header(props){

    return(
        <>
            <header className={styles.header}>
                <h1>JapanFood</h1>
                <HeaderCartButton onClick={props.onShowCart}/>
            </header>
            <div className={styles['main-image']}>
                <img src={sushiImage} alt="SushiPhoto"/>
            </div>
        </>
    )
}

export default Header;

