import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { useState } from "react";

export const CountAnimation = ({ n }) => {
    const [counterOn, setCounterOn] = useState(false)
    const [locked, setLocked] = useState(false)

    return (
        <>
            {!locked ? <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)} >
                <div>
                    {counterOn && <CountUp start={0} end={n} onEnd={() => { setLocked(true) }} duration={2} delay={0} />}
                </div>
            </ScrollTrigger> 
            :
            <div>{n}</div>
            }
        </>

    )
}