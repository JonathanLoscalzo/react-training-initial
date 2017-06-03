import React from 'react';
import PropTypes from 'prop-types';

/**
 * @note debería ser un stateless functional, o stateless component
 */

class Language extends React.Component {
    render() {
        var lang = this.props.lang;
        return (
            <li 
                onClick={() => this.props.onSelect(lang)}
                style={lang === this.props.selected ? { color: '#d0021b' } : null}>
                {lang}
            </li>
        )
    }
}
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

        const { selected, onSelect } = this.props;

        return (
            <ul className="languages">
                {languages
                    .map((lang) => (<Language lang={lang} key={lang} onSelect={onSelect} selected={selected}/>))}
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