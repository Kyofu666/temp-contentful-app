import heroImg from './assets/hero.svg'
const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-center">
                <div className="hero-title">
                    <h1>Contentful CMS</h1>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad est eaque esse veritatis eos aperiam perspiciatis a itaque recusandae, autem temporibus doloribus dolore fuga blanditiis doloremque praesentium sed, harum deleniti.
                    </p>
                </div>
                <div className="img-container">
                    <img src={heroImg} alt="woman and the browser" />
                </div>
            </div>
        </section>
    )
}

export default Hero
