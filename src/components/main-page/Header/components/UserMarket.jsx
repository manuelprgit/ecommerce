function UserMarket({ userInfo }) {
    return (
        <>
            <div className="user-market">
                <p>
                    {(userInfo.length > 0) ? userInfo : 'Iniciar Sesión'}
                </p>
                <div className="cart-info">
                    
                </div>
            </div>
        </>
    )
}

export { UserMarket }