export const Hero = () => {
    return <main className="hero">
        <div className='heroContent'>
            <div>
                <h1 className="heroContentMainLine">YOUR FEET DESERVE THE BEST</h1>
                <p className="pTag">YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
            </div>
            <div className="buttonDiv">
                <button className="shopNowButton">Shop Now</button>
                <button className="categoryButton">Category</button>
            </div>
            <div>
                <p className="imageDivPTag">Also Available On</p>
                <img className="flipkartImg" src = "public/images/flipkart.png"  />
                <img className="amazonImg" src = "public/images/amazon.png"  />
            </div>
        </div>
        <div className="shoeImgDiv">
            <img className="shoeImg" src = "public/images/shoe_image.png" />
        </div>
    </main>
}