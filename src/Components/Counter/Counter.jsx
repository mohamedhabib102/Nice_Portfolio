import { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";
import "./Counter.css";


function Counter(){
    const [counterOn, setCounterOn] = useState(false);
    const counterRef = useRef(null);

    const iconsCount = [
        "fa-solid fa-wand-magic-sparkles",
        "fa-solid fa-users",
        "fa-solid fa-award",
        "fa-regular fa-lightbulb",
        "fa-solid fa-mug-hot",
        "fa-regular fa-clock"
    ]
    const nameCounter = [
        "Projects Completed",
        "Happy Clients",
        "Awards Received",
        "Crzy Ideas",
        "Coffee Cups",
        "Hours"
    ]
    const numberCount = [
        900,
        600,
        200,
        120,
        500,
        200
    ]

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const [entry] = entries;
                setCounterOn(entry.isIntersecting); 
                /* 
                true: if the section at top of page, false: if the section not at top of page
                */
            },
            { threshold: 0.5 } // if value: 50%, work Counter
        );

        // check if real elements dom
        if (counterRef.current) {
            observer.observe(counterRef.current);
        }


        // cleanup function
        return () => {
            if (counterRef.current) {
                observer.unobserve(counterRef.current);
            }
        };
    }, []);

    return(
        <section  className="counter" id="" ref={counterRef}>
            <div className="coustom-container">
                <div className="count-content pt-[30px] pb-[30px] relative grid grid-cols-3 max-[991px]:grid-cols-1">
                    {
                        nameCounter.map((ele, index) => {
                            return(
                                <div className="count relative p-[15px] mb-[15px] text-center" key={index}>
                                    <i className={`${iconsCount[index]} text-[3em] mb-[15px] color-main`}></i>
                                    <span className="block text-[40px] font-bold text-white">
                                        {
                                            counterOn ? <CountUp start={0} end={numberCount[index]} duration={2} delay={0}/>
                                            : 0
                                        }
                                    </span>
                                    <h3 className="coustom-color uppercase">{ele}</h3>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}
export default Counter;