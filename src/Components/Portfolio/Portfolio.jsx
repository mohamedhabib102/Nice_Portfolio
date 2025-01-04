import "./portfolio.css";
import { useEffect, useState } from "react";
import axios from "axios";

function Portfolio() {
    const [projects, setProjects] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('All');
    const url = "/projects.json";

    useEffect(() => {
        fetchProjects();
    }, []);

    const fetchProjects = async () => {
        try {
            const res = await axios.get(url);
            setProjects(res.data.projects);
        } catch (err) {
            console.log(err);
        }
    };

    const categories = ['All', ...new Set(projects.map(project => project.category))];
    console.log(projects);

    const filterProjects = () => {
        if (selectedCategory === "All") {
            return projects;
        }
        return projects.filter(project => project.category === selectedCategory);
    };

    return (
        <>
            <section className="portfolio" id="portfolio">
                <div className="coustom-container">
                    <div className="head-profile mb-[30px]">
                        <h4 className="text-center uppercase color-main mb-[6px] font-bold">Portfolio</h4>
                        <span className="block text-center font-bold text-[30px] mb-[10px] max-[991px]:text-[25px]">Check Out Some Of My Works</span>
                        <p className="text-center mb-[25px] w-[75%] m-auto max-[991px]:w-full color-border-color">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet eligendi quibusdam, obcaecati, praesentium natus est assumenda at doloribus saepe sed perspiciatis modi provident explicabo nobis iure suscipit quo voluptas aliquid?
                        </p>
                    </div>

                    {/* Tabs section */}
                    <nav className="tabs-link mb-[25px]">
                        <ul className="flex items-center justify-center gap-[1rem] flex-coustom">
                            {categories.map((category, index) => (
                                <li
                                    key={index}
                                    className={selectedCategory === category ? "active link-tabs" : "link-tabs"}
                                    onClick={() => setSelectedCategory(category)}
                                >
                                    {category}
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Projects Grid */}
                    <div className="content-profiles flex flex-wrap">
                        {filterProjects().map((project, index) => (
                            <div key={index} className="profile min-[991px]:basis-2/4 basis-full">
                            <img className="profile-img" src={project.image} alt={project.name}/>
                                <div className="desc">
                                    <p className="color-main uppercase text-[19px] font-bold">{project.name}</p>
                                    <a className="text-black text-[17px] font-bold" href={project.link} target="_blank" rel="noopener noreferrer">You Can See</a>
                                    <span className="icons">
                                    {
                                        project.technologies.map((tech) => (
                                            <i className={tech.icon}></i>
                                        ))
                                    }
                                </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Portfolio;
