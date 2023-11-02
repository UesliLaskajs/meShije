import foodHome from "../../assets/imgs/foodhome.jpg"
const Learn = () => {
    return (
        <section>
            <div className="container">
                <div className="heading text-center container mb-[50px]">Learn More</div>
                <div className="flex justify-between items-center w-[100%]">
                    <div className="image_container w-[50%] flex justify-center items-center">
                        <img className="w-[500px] h-[600px]" src={foodHome} alt="" />
                    </div>
                    <div className="hero_sec flex flex-col w-[40%] h-[560px] items-center ">
                        <h1 className="heading">The Recipe App</h1>
                        <div className="text_para">
                            Welcome to our recipe app, where culinary creativity meets the convenience of modern technology! Explore a world of flavors and aromas right at your fingertips. Whether you re a seasoned chef or a beginner in the kitchen, our app is your go-to source for delicious inspiration. From quick and easy weeknight dinners to elaborate gourmet desserts, our curated collection of recipes caters to every taste and occasion. Each recipe is carefully crafted with detailed step-by-step instructions, accompanied by vibrant photos that will make your mouth water. We believe that cooking is not just a task; it s a delightful journey of discovery and self-expression. Our app not only provides you with recipes but also offers cooking tips, ingredient substitutions, and personalized recommendations based on your preferences.
                            Embrace the joy of cooking and transform your home into a culinary paradise.
                            Get ready to embark on a gastronomic adventure like never before – happy cooking!
                        </div>
                        <a href="aboutus">
                            <button className="btn">About Us</button>
                        </a>

                    </div>

                </div>
            </div>
        </section>
    )
}

export default Learn