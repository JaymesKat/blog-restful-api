import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Article from './Article';
import AddArticle from './AddArticle';

class Main extends Component {
    constructor() {

        super();
        this.state = {
            articles: [],
            currentArticle: null

        }
         this.handleAddArticle = this.handleAddArticle.bind(this);
    }

    componentDidMount() {
        fetch('/api/articles')
            .then(response => {
                return response.json();
            })
            .then(articles => {
                this.setState({ articles });
            });
    }

    renderArticles() {

        return this.state.articles.map(article => {
            return (
                <li className="list-group-item" onClick={
                    () =>this.handleClick(article)} key={article.id} >
                    <p className="lead text-left"><strong>{ article.title }</strong></p> <small>published: {article.created_at}</small>
                </li>
            );
        })
    }

    handleClick(article) {
        this.setState({currentArticle:article})
    }

    handleAddArticle(article) {

        fetch( 'api/articles/', {
            method:'post',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },

            body: JSON.stringify(article)
        })
        .then(response => {
            return response.json();
        })
        .then( data => {

            this.setState((prevState)=> ({
                articles: prevState.articles.concat(data),
                currentArticle: data
            }))
        })
    }

    render() {

        const mainDivStyle =  {
            display: "flex",
            flexDirection: "row"
        }

        const divStyle = {

            justifyContent: "flex-start",
            padding: '10px',
            width: '35%',
            background: '#f0f0f0',
            padding: '20px 20px 20px 20px',
            margin: '30px 10px 10px 30px'

        }

        return (
            <div>
          <div style= {mainDivStyle}>
            <div style={divStyle}>
                <h3> <strong>All articles</strong> </h3>
                  <ul className="list-group">
                    { this.renderArticles() }
                  </ul>

            </div>
                <Article article={this.state.currentArticle} />
                <AddArticle onAdd={this.handleAddArticle} />
          </div>

        </div>
        );
    }
}

export default Main;

if (document.getElementById('root')) {
    ReactDOM.render(<Main />, document.getElementById('root'));
}
