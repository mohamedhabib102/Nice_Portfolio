import "./TimeLine.css";


function TimeLine(){
    return (
        <section className="time-line" id="resume">
            <div className="coustom-container">
                <div className="header-time mb-[25px] text-center w-[70%] m-auto max-[991px]:w-full">
                    <h4 className="color-main mb-[10px] uppercase font-bold">Resume</h4>
                    <h2 className="color-bg text-[30px] mb-[10px] block font-bold">More of my credentials</h2>
                    <p className="color-border-color leading-[1.5rem]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis odit doloremque velit fugit optio blanditiis consequuntur dolorem. Autem, magnam doloribus nulla vero exercitationem accusantium nisi. Excepturi veritatis inventore nemo ipsam.</p>
                </div>
                <h3 className="color-main font-bold mb-[35px] text-[25px] text-center">Work Experience</h3>
                <div className="time-content relative overflow content-before">
                    <div className="year">2023</div>
                    <div className="left media-of-content">
                        <div className="content-time coustom-shadow">
                            <h3 className="mb-[10px] text-[19px] color-main font-bold">Personal Projects</h3>
                            <p className="mt-[10px] mb-[10px] color-bg leading-[1.5rem] text-[15px]" >
                                Developed interactive website interfaces using HTML, CSS, and JavaScript. Created responsive, user-friendly designs by implementing the Bootstrap framework and Tailwind CSS.
                                Applied modern design principles to enhance user engagement and interaction, ensuring optimal
                                performance across devices.
                                Focused on building clean, efficient code for better maintainability and scalability.
                            </p>
                        </div>
                    </div>
                    <div className="clear"></div>
                    <div className="year">2024</div>
                    <div className="right media-of-content">
                        <div className="content-time coustom-shadow">
                            <h3 className="mb-[10px] text-[19px] color-main font-bold">Online Store</h3>
                            <p className="mt-[10px] mb-[10px] color-bg leading-[1.5rem] text-[15px]" >
                                I developed an e-commerce store project that displays products and allows users to add items to the cart
                                and favorites, in addition to performing a mock interactive purchase process. I learned how to work with
                                tokens (Token) and determine user roles (such as user and admin) based on them. The regular user is
                                directed to the main site, while the admin is redirected to the dashboard after token verification. I also
                                learned how to work with APIs to perform POST, GET, DELETE, and PUT operations to manage data
                                dynamically. In this project, I used React.js to build the frontend, Bootstrap to design responsive and
                                attractive interfaces, and Context API to effectively manage the state.
                            </p>
                        </div>
                    </div>
                    <div className="clear"></div>
                    <div className="left media-of-content">
                        <div className="content-time coustom-shadow">
                            <h3 className="mb-[10px] text-[19px] color-main font-bold">Portfolio Project</h3>
                            <p className="mt-[10px] mb-[10px] color-bg leading-[1.5rem] text-[15px]" >
                                I am currently developing a personal portfolio using React.js and Tailwind CSS to showcase my skills
                                and previous projects. The portfolio is designed to provide an interactive and responsive experience,
                                highlighting my expertise in front-end development and web design. I am leveraging Vite as a build tool
                                for fast development and optimized performance, ensuring a smooth user experience. Additionally, I am
                                integrating an API to dynamically display project data, allowing visitors to explore my work in a detailed
                                and organized manner. This project reflects my ability to build modern, efficient, and scalable web
                                applications
                            </p>
                        </div>
                    </div>
                </div>
                <h3 className="color-main font-bold mt-[35px] mb-[35px] text-[25px] text-center">Education</h3>
                <div className="time-content relative overflow content-before">
                    <div className="year">2025</div>
                    <div className="right media-of-content">
                        <div className="content-time coustom-shadow">
                            <h3 className="mb-[10px] text-[19px] color-main font-bold">Academy of Integrated Systems</h3>
                            <p className="mt-[10px] mb-[10px] color-bg leading-[1.5rem] text-[15px]" >
                            During my university studies, I learned to use Microsoft Office 2010 for document preparation, along with studying the fundamentals of networking (part of the CCNA curriculum). I gained skills in design using Adobe Photoshop and InDesign, and learned HTML, CSS, JavaScript, PHP, and MySQL applications. I also studied computer maintenance. Currently, I am applying these skills through practical projects in networking, web development, and design.
                            <span className="font-bold block text-[17px]">Mansoura University (2022-2025)</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default TimeLine;