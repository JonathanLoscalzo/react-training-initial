import React from 'react';
import PropTypes from 'prop-types';
import { Api } from '../utils/api';
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
                    .map((lang) => (<Language lang={lang} key={lang} onSelect={onSelect} selected={selected} />))}
            </ul>)
    }

}

class RepoItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { name, owner, html_url, stargazers_count } = this.props.repo;

        return (
            <li className="popular-item">
                <div className='popular-rank'>#{this.props.index + 1}</div>
                <ul className='space-list-items'>
                    <li>
                        <img
                            className='avatar'
                            src={owner.avatar_url}
                            alt={'Avatar for ' + owner.login}
                        />
                    </li>

                    <li><a href={html_url}>{name}</a></li>
                    <li>@{owner.login}</li>
                    <li>{stargazers_count} stars</li>
                </ul>
            </li>
        )
    }
}

class RepoGrid extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { repos } = this.props;
        return (
            <ul className="popular-list">
                {repos.map((r, i) => <RepoItem repo={r} key={r.id} index={i} />)}
            </ul>
        )
    }

}

export default class Popular extends React.Component {
    constructor() {
        super();
        this.state = {
            selectLanguage: "All",
            repos: []
        }
        this.Api = new Api();
    }

    componentDidMount() {
        this.updateLanguage(this.state.selectLanguage);
    }

    updateLanguage(lang) {
        this.setState({
            selectLanguage: lang,
            repos: []
        });
        console.log(this.Api);
        this.Api.fetchPopularRepos(lang)
            .then((data) => {
                this.setState({ repos: data });
            });
    }

    render() {
        return (
            <div>
                <SelectLanguage
                    selected={this.state.selectLanguage}
                    onSelect={(lang) => this.updateLanguage(lang)} />
                <RepoGrid repos={this.state.repos} />
            </div>
        );
    }
}