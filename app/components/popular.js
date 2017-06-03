import React from 'react';
import PropTypes from 'prop-types';



class SelectLanguage extends React.Component {

    static propTypes = {
        selected: PropTypes.string.isRequired,
        onSelect: PropTypes.func.isRequired,
    }

    shouldComponentUpdate(prevState, nextState) {
        return this.props.selected != prevState.selected
    }

    constructor(props) {
        super(props);
    }

    render() {
        var languages = [
            "All",
            "Javascript",
            "Ruby",
            "Java",
            "CSS",
            "Python"
        ];

        const {selected, onSelect} = this.props;

        return (
            <ul className="languages">
                {languages.map(
                    (lang) =>
                        <li key={lang}
                            onClick={() => onSelect(lang)}
                            style={lang === selected ? { color: '#d0021b' } : null}>
                            {lang}
                        </li>)}
            </ul>)
    }

}

export default class Popular extends React.Component {
    constructor() {
        super();
        this.state = {
            selectLanguage: "All"
        }
    }

    updateLanguage(lang) {
        this.setState({
            selectLanguage: lang,
        })
    }

    render() {
        return (
            <div>
                <SelectLanguage
                    selected={this.state.selectLanguage}
                    onSelect={(lang) => this.updateLanguage(lang)} />
            </div>
        );
    }
}