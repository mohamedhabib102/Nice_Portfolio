import { useState } from "react";
import "./Contact.css";
import axios from "axios";
import Footer from "../Footer/Footer";



function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [mesg, setMesg] = useState("");


    const resteValueInputs = () => {
        setName("")
        setEmail("")
        setPhone("")
        setMesg("")
    }

    async function sendEmail(e) {
        e.preventDefault()
        try {
            const res = await axios.post("http://senddata.runasp.net/api/SendEmail", {
                name: name,
                email: email,
                phone: phone,
                message: mesg
            }, 
            {            
            headers: { 
                'Content-Type': 'application/json',
            }});
            resteValueInputs();
        } catch (error) {
            console.log(error);
        }
    }
    return(
        <section className="contact">
            <div className="coustom-container">
                <div className="head-contact text-center mb-[60px]">
                    <h4 className="color-main uppercase mb-[10px] font-bold">Contact Us</h4>
                    <span className="font-bold text-white text-[30px] mb[10px]">I'd Love To Hear From You.</span>
                    <p className="text-white leading-[1.5rem] w-[75%] max-[991px]:w-[100%] m-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quo illum expedita accusantium eius. Quia incidunt, quis, repellendus ipsa molestiae officiis maiores, repellat libero nam inventore pariatur dolorem praesentium perspiciatis!</p>
                </div>
                <form className="content"
                onSubmit={sendEmail}
                >
                    <div className="box">
                        <input 
                        className="input" 
                        type="text" 
                        id="name" 
                        required 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        />
                        <label htmlFor="name">Name</label>
                        <span></span>
                    </div>
                    <div className="box">
                        <input 
                        className="input" 
                        type="email" 
                        id="email" 
                        required 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        />
                        <label htmlFor="email">Email</label>
                        <span></span>
                    </div>
                    <div className="box">
                        <input 
                        className="input" 
                        type="text" 
                        id="phone" 
                        required 
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        />
                        <label htmlFor="phone">Phone</label>
                        <span></span>
                    </div>
                    <div className="box">
                        <textarea 
                        className="input mesg-input" 
                        id="message" 
                        required 
                        value={mesg}
                        onChange={(e) => setMesg(e.target.value)}
                        ></textarea>
                        <label className="label-mesg" htmlFor="message">Message</label>
                        <span></span>
                    </div>
                    <button className="button" type="submit">Submit</button>
                </form>
                <div className="details grid grid-cols-3 pt-[50px] pb-[15px] gap-[1rem] max-[991px]:grid-cols-1">
                    <div className="item text-center p-[15px]">
                        <i className="fa-solid fa-location-dot fa-3x text-white mb-[30px]"></i>
                        <h4 className="mb-[10px] color-main uppercase font-bold">Where To Find Me</h4>
                        <span className="block mb-[8px] color-border-color">Egypt, Dakahlia, Mounsoura</span>
                        <span className="color-border-color">inside the university - Room No. 300</span>
                    </div>
                    <div className="item text-center p-[15px]">
                        <i className="fa-regular fa-envelope fa-3x text-white mb-[30px]"></i>
                        <h4 className="mb-[10px] color-main uppercase font-bold">Email me at</h4>
                        <span className="block mb-[8px] color-border-color">mohamedhabib7000@gmail.com</span>
                        <span className="color-border-color">bayylky43@gmail.com</span>
                    </div>
                    <div className="item text-center p-[15px]">
                        <i className="fa-solid fa-phone fa-3x text-white mb-[30px]"></i>
                        <h4 className="mb-[10px] color-main uppercase font-bold">Call me at</h4>
                        <span className="block mb-[8px] color-border-color">phone: (+20) 1027227796</span>
                    </div>
                </div>
                <Footer />
            </div>
        </section>
    )
}
export default Contact;