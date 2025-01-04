import "./Footer.css";



function Footer() {
    const currentYear = new Date()
    return (
        <footer className="text-center">
            <div className="foot flex justify-between items-center gap-[1rem] max-[991px]:flex-col">
                <div className="color-border-color">
                    &copy; Copyrght Mohamed Habib <span>{currentYear.getFullYear()}</span> Design By <span className="uppercase color-main font-bold">El Professor</span>
                </div>
                <ul className="links-social">
                    <li className="pt-0 pb-0 pl-[15px] pr-[15px] text-[25px]"><a className="c-white transition-all" href='#'><i className="fa-brands fa-facebook-f"></i></a></li>
                    <li className="pt-0 pb-0 pl-[15px] pr-[15px] text-[25px]"><a className="c-white transition-all" href='#'><i className="fa-brands fa-github"></i></a></li>
                    <li className="pt-0 pb-0 pl-[15px] pr-[15px] text-[25px]"><a className="c-white transition-all" href='#'><i className="fa-brands fa-linkedin"></i></a></li>
                </ul>
            </div>
        </footer>
    )
}
export default Footer;