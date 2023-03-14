import React from 'react';
import { create } from 'zustand'
import styles from "./layout.module.scss"

const useCarrotsStore = create((set) => ({
    orangeCarrots: 0,
    violetCarrots: 0,
    increaseOrange: () => set((state) => ({ orangeCarrots: state.orangeCarrots + 1 })),
    increaseViolet: () => set((state) => ({ violetCarrots: state.violetCarrots + 1 })),

}))
const Layout = () => {

    const { left, raight, main } = styles;
    function Counter(color) {
        switch (color) {
            case "orange":
                const orange = useCarrotsStore((state) => state.orangeCarrots)
                return <>{orange}</>;
            case "violet":
                const violet = useCarrotsStore((state) => state.violetCarrots)
                return <>{violet}</>;
            default: return (
                <div></div>
            );
        };
    };



    function Controls(color) {
        switch (color) {
            case "orange":
                const increaseOrange = useCarrotsStore((state) => state.increaseOrange)
                return <button onClick={increaseOrange}>+</button>;
            case "violet":
                const increaseViolet = useCarrotsStore((state) => state.increaseViolet)
                return <button onClick={increaseViolet}>+</button>;
            default: return (
                <div></div>
            );
        };
    }

        return (
            <div >
                <h1>Carrots</h1>
                <div className={main}>
                <div className={left}>
                    <h4>BUY</h4>
                    <div>
                        <p>orange
                         {Controls("orange")}</p>
                    </div>
                    <div>
                        <p>violet
                         {Controls("violet")}</p>
                    </div>
                </div>
                <div className={raight}>
                    <h4>OWNED</h4>
                    <div>
                        <p>orange
                        <span>{Counter("orange")}</span></p>
                    </div>
                    <div>
                        <p>violet
                            <span>{Counter("violet")}</span></p>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
    export default Layout