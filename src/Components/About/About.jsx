import { useState, useEffect, useRef } from 'react';
import "./About.css";
import axios from "axios";
import { Link } from 'react-scroll';
import { jsPDF } from "jspdf";


function About(props) {
    const [profile, setProfile] = useState({});

    const url = "/myData.json";
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(url);
                setProfile(res.data.profile);
            } catch (err) {
                console.log(err);
            }
        }
        fetchData();
    }, []);

    const downloadCVThisPage = () => {
        try {
            const doc = new jsPDF('p', 'mm', 'a4')

            doc.text("This PDF File", 10, 10);
            
            doc.html(document.body, {
                callback: (doc) => {
                    doc.save("CV.pdf")
                },
                margin: [10, 10, 10, 10],
                x: 10,
                y: 10,
                html2canvas: {
                    scale: 2,
                    useCORS: true,
                }
            })
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <section className="about" id="about">
            <div className="coustom-container">
                <div className="about-me">
                    <h4 className="text-center uppercase main-color mb-[10px] font-bold">About Us</h4>
                    <h3 className="text-center text-[30px] mb-[15px] max-[991px]:text-[25px]">Let me introduce myself.</h3>
                    <div className="profile m-auto w-[75%] max-[991px]:w-full flex justify-between items-center gap-[2rem] max-[991px]:flex-col">
                        <img className="rounded-full" src={props.image} style={{ width: "150px" }} alt="about" />
                        <p className="border-color w-[75%] p-[10px] max-[991px]:w-full max-[991px]:text-[15px] max-[991px]:text-center">{profile.aboutMe}</p>
                    </div>
                    <div className="skills-box mt-[15px] pt-[15px] content-profile mb-[25px]">
                    <div className="box w-[70%] max-[991px]:w-full">
                            <div className="top">
                                <span className="text-[25px] font-bold uppercase bg-color mb-[15px] max[991px]:text-center block">Profile</span>
                                <p className="text-[17px] border-color mb-[15px]">{profile.profilText}</p>
                            </div>
                            <div className="profile max-[575px]:text-center">
                                <div className="box mb-[10px]">
                                    <h3 className='bg-color text-[17px] font-bold uppercase'>Full Name:</h3>
                                    <span className="border-color text-[14px]">{profile.fullName}</span>
                                </div>
                                <div className="box mb-[10px]">
                                    <h3 className='bg-color text-[17px] font-bold uppercase'>Birth day:</h3>
                                    <span className="border-color text-[14px]">{profile.date}</span>
                                </div>
                                <div className="box mb-[10px]">
                                    <h3 className='bg-color text-[17px] font-bold uppercase'>Job:</h3>
                                    <span className="border-color text-[14px]">{profile.job}</span>
                                </div>
                                <div className="box mb-[10px]">
                                    <h3 className='bg-color text-[17px] font-bold uppercase'>website:</h3>
                                    <span className="border-color text-[14px]">{profile.website}</span>
                                </div>
                                <div className="box mb-[10px]">
                                    <h3 className='bg-color text-[17px] font-bold uppercase'>email:</h3>
                                    <span className="border-color text-[14px]">{profile.email}</span>
                                </div>
                            </div>
                        </div>
                        <div className="box w-[30%] max-[991px]:w-full">
                            <div className="top">
                                <span className="text-[25px] font-bold uppercase bg-color mb-[15px] max[991px]:text-center block">Skills</span>
                                <p className="text-[17px] border-color mb-[15px]">{profile.skillsText}</p>
                            </div>
                            <div className="skills">
                                {
                                    profile.scoors && 
                                    profile.skills.map((skill, index) => (
                                        <div className="skill mb-[16px]" key={index}>
                                            <div className="name flex justify-between">
                                                <h4>{skill}</h4>
                                                {
                                                    profile.scoors[index] &&
                                                    <span className="bg-page text-center text-white w-[35px] mb-[3px] rounded-[2px]" >{
                                                    // <Number n={profile.scoors[index]} start={scoring} />
                                                    profile.scoors[index]
                                                    }%</span>
                                                }
                                            </div>
                                            <div className="progers relative w-full border-color-back h-[5px]">
                                                {
                                                    profile.scoors[index] &&
                                                    <span className="absolute bg-page left-0 top-0 h-full" style={{width: `${profile.scoors[index]}%`}} ></span>
                                                }
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    <div className="buttons flex flex-col gap-[1.5rem] items-center">
                    <Link to="contact" smooth={true} duration={500}
                    className="cursor-pointer w-[180px] pt-[10px] pb-[10px] pr-[20px] pl-[20px] 
                    uppercase border-page-3 text-center block transition-all back-transparent-reverse text-bold"
                    >Hire Me</Link>
                    <button  onClick={downloadCVThisPage} className="cursor-pointer text-white text-center w-[180px] pt-[10px] pb-[10px] pr-[20px] pl-[20px] uppercase 
                    border-page-3 bg-color-back block back-transparent transition-all text-bold">
                    Download Cv</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;
