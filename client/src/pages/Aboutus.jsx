import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import video from "../assets/video/cook.mp4";

function AboutUs() {
    return (
        <>
            <Navbar />
            <section className="bg-gray-100 py-8">
                <div className="container mx-auto">
                    <div className="bg-white p-8 rounded-lg shadow-md">
                        <h1 className="text-4xl font-bold text-teal-700 mb-8">Discover Our Story</h1>

                        <div className="flex flex-col md:flex-row mb-8">
                            <div className="w-full md:w-1/2">
                                <p className="text-lg text-gray-700 mb-4">
                                    Welcome to <span className="text-teal-700 font-semibold">MeShije</span>, where the art of cooking meets the joy of sharing. Our culinary journey is not just about recipes; it s about building a community of food lovers, passionate home cooks, and culinary enthusiasts.

                                    At MeShije, we believe that cooking is more than just a routine; it s an experience. Our story began with a simple idea: to make the world of cooking accessible, enjoyable, and memorable. We re here to inspire and empower you to explore the diverse world of cuisine, discover new flavors, and share your culinary creations with the world. Our mission is to bring people together through the love of food. Whether you re a seasoned chef or just starting your culinary adventure, we re here to guide you. We offer a wide range of recipes, from quick weeknight meals to special occasion dishes, tailored to different cuisines, dietary preferences, and skill levels. Each recipe comes with step-by-step instructions, helpful tips, and mouthwatering photos to tantalize your taste buds.
                                </p>
                            </div>
                            <div className="w-full md:w-1/2 pr-4">
                                <video width="100%" controls autoPlay loop>
                                    <source src={video} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </div>

                        <p className="text-lg text-gray-700">
                            Thank you for choosing <span className="text-teal-700 font-semibold">MeShije</span>. Happy cooking! Let s explore, cook, and share the joy of food together.
                        </p>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default AboutUs;