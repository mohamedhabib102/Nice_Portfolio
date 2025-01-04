import { useState } from "react";
import "./Services.css";


function Services(){
    const [activeIndex, setActiveIndex] = useState(0);
    const [iconIndex, setIconIndex] = useState(null);

    const icons = [
        "fas fa-globe-asia color-main",
        "fa-solid fa-code color-main",
        "fa-solid fa-wand-magic-sparkles color-main"
    ];

    const titlesServe = [
        "Web Design",
        "Web Development",
        "Branding"
    ]

    // const handelAccrdion = (index) =>{
    //     setActiveIndex(activeIndex === index ? null : index);
    // }
    return(
        <section className="services" id="services">
            <div className="coustom-container">
                <div className="head-serv mb-[30px]">
                    <h4 className="uppercase color-main text-center font-bold">Services</h4>
                    <span className="text-[30px] text-center color-bg font-bold block mb-[10px]">What Can I Do For You!.</span>
                    <p className="color-border-color text-center w-[70%] m-auto max-[991px]:w-full leading-[1.5rem]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta sint, cum dolor laudantium ut libero, obcaecati doloribus doloremque quia ipsam, nesciunt aut sapiente! Cupiditate cum eum totam porro in illo!</p>
                </div>
                <div className="content-services">
                    {
                        titlesServe.map((el, index) => {
                            return(
                                <div className={activeIndex === index ? "show-accrdion serve" : "serve"} key={index}
                                onClick={() => {
                                    setActiveIndex(activeIndex === index ? null : index);
                                }}
                                >
                                    <>
                                    <div className="start rounded-[8px] bg-eee p-[10px] flex justify-between items-center gap-[1rem] transition-all">
                                        <div className="flex items-center">
                                        <i className={`${icons[index]} mr-[10px] text-[19px]`}></i>
                                        <h2 className="text-[22px] font-bold bg-color">{el}</h2>
                                        </div>
                                        <i className="fa-solid fa-plus font-bold color-main text-[23px] cursor-pointer icon-x"></i>
                                    </div>
                                    <p className="mt-[10px] invisible opacity-0 transition-all color-border-color leading-[1.5rem]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic totam eum, eius sunt consectetur vero ad repellendus quod numquam veniam! Quidem maxime est omnis iure perspiciatis et incidunt, veniam inventore.</p>
                                    </>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}
export default Services;