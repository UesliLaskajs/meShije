import Navbar from "../components/Navbar/Navbar"
import { Link } from "react-router-dom"
// import backgroundImg from "../assets/images/background.jpg"
const Home = () => {
    return (
        <>
            <Navbar />
            <div className="hero_section">
                <section className="pt-[60px] ">
                    <div className="container   ">
                        <div className="flex flex-row justify-between align-center ">
                            <div className="flex flex-col justify-between gap-[45px] items-center">



                                <div className="w-[100%]">
                                    <h1 className="text-[3.5rem] leading-[56px]  text-heroColor font-700 ">
                                        Embark on a Culinary Journey, Where Every Recipe Tells a Story.
                                    </h1>
                                    <p className="text_para">Discover the Essence of Flavors, the Art of Presentation, and the Joy of Cooking.
                                    Explore Our Collection of Mouthwatering Recipes and Indulge Your Taste Buds in a World of Gastronomic Delights.</p>
                                    <Link to={"/"}>
                                        <button className="btn">Search</button>
                                    </Link>

                                </div>
                                <div className="flex justify-between w-[100%] items-center  ">
                                    <div>
                                        <h2 className="text-[3rem] font-700 leading-[54px] text-heroColor">15+</h2>
                                        <span className="w-[100px] h-2 bg-yellow-300 rounded-full block mt-[14px]"></span>
                                        <p className="text_para">Years Experience</p>
                                    </div>

                                    <div>
                                        <h2 className="text-[3rem] font-700 leading-[54px] text-heroColor">200+</h2>
                                        <span className="w-[100px] h-2 bg-purpleColor rounded-full block mt-[14px]"></span>
                                        <p className="text_para"> Recipes</p>
                                    </div>

                                    <div>
                                        <h2 className="text-[3rem] font-700 leading-[54px] text-heroColor">35+</h2>
                                        <span className="w-[100px] h-2 bg-red-300 rounded-full block mt-[14px]"></span>
                                        <p className="text_para">Countries</p>
                                    </div>
                                </div>



                            </div>
                            <div className="w-[100%] flex flex-row justify-between items-center p-[50px] ml-[100px]">
                                <div className="first_doctor w-[50%] h-[400px]  ">
                                    {/* <img src={} className="w-[100%] h-[400px]" /> */}
                                </div>
                                <div className="w-[50%] h-[400px] h-flex flex-col justify-center items-center p-[15px]">
                                    <div className="second_doctor mb-14">
                                        {/* <img src={} alt="" /> */}
                                    </div>
                                    <div className="second_doctor">
                                        {/* <img src={} alt="" /> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Home