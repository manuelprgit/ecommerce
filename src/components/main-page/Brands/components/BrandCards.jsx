function BrandCards({ brand }) {
    console.log(brand.img)
    return (
        <>
            {/* <div className="brand-card ">
                <div className="img-content hover">
                    <figure>
                        <img src={brand.img} alt={brand.description} />
                    </figure>
                </div>
                <div className="brand-description">
                    <p>{brand.description}</p>
                </div>
            </div> */}

            <div className="brand-card">
                <small>Enjoy</small>
                <h4>With</h4>
                <h2>EARPHONE</h2>
                <figure>
                    <img src={brand.img} alt={brand.description} />
                </figure>
            </div>
        </>
    )
}

export { BrandCards }