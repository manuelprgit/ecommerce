function BrandCards({ brand }) {
    return (
        <>
            <div className="brand-card">
                <div className="img-content">
                    <figure>
                        <img src={brand.img} alt={brand.description} />
                    </figure>
                </div>
                <div className="brand-description">
                    <p>{brand.description}</p>
                </div>
            </div>
        </>
    )
}

export { BrandCards }