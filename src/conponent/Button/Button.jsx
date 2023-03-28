import React from 'react';
import styles from "./button.module.scss"

const Button = () => {
    const {add} = styles
    return (
        <button className={add}>+</button>
    )
}
export default Button