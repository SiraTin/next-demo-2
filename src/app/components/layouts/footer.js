

export default function Footer(){
    return (
        <footer className="bg-[#0b1d26] py-10">
            <div className="w-10/12  mx-auto text-white flex flex-col md:flex-row md:justify-between items-start lg:pt-16 ">
            <div className="flex flex-col justify-around w-8/12 ">
                <div>
                <a href="#">
                <img src="../images/logo.svg"/>
                </a>
                <p className="py-4">Get out there & discover your next slope, mountain & destination!</p>
                </div>
                <p className="lg:pt-10">Copyright 2023 MNTN, Inc. Terms & Privacy</p>
            </div>
            <div className="py-4">
                <h2 className="text-[#FBD784]">More on The Blog</h2>
                <ul className="py-4">
                    <li><a href="#">About MNTN</a></li>
                    <li><a href="#">Contributors & Writers</a></li>
                    <li><a href="#">Write For Us</a></li>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                </ul>
            </div>
            <div className="hidden lg:block">
            <h2>More on MNTN</h2>
                <ul>
                    <li><a href="#">The Team</a></li>
                    <li><a href="#">Jobs</a></li>
                    <li><a href="#">Press</a></li>
                </ul>
            </div>
            </div>
        </footer>
    );
}