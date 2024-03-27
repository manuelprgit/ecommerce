function MenuOptions({ optionProps,activeOption }) {
    return (
        <>
            <li>
                <a
                    onClick={(e) => {
                        activeOption(optionProps.id)
                    }}
                    href="#"
                    className={optionProps.isActivate ? 'active' : ''}
                >
                    {optionProps.description}
                </a>
            </li>
        </>
    )
}

export { MenuOptions }