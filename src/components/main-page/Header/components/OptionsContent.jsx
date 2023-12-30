import { MenuOptions } from './MenuOptions'
import '../header.scss';

function OptionsContent({ options, activeOption }) {
    return (
        <>
            <div className="options-content">
                <ul>
                    {options.map(option => {
                        return <MenuOptions
                            key={option.id}
                            optionProps={option}
                            activeOption={activeOption}
                        />
                    })}
                </ul>
            </div>
        </>
    )
}

export { OptionsContent }