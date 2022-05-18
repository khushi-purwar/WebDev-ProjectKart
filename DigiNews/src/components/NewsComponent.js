import React, { Component } from 'react'
import Loader from './Loader';
import NewsItems from './NewsItems'
import PropTypes from 'prop-types'

export class NewsComponent extends Component {
    static defaultProps = {
        country: 'in',
        pageSize: 9,
        category: 'general'
    }
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }

    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
        document.title = `Digi News - ${this.CapitaliseFirstLetter(this.props.category)}`
    }

    CapitaliseFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    async pageUpdater() {
        this.props.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9177b504f76a43f3a7677adff2d71502&page=${this.state.page} &pageSize=${this.props.pageSize}`
        this.setState({ loading: true })
        let data = await fetch(url);
        this.props.setProgress(30);
        let parsedData = await data.json()
        this.props.setProgress(70);
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        })
        this.props.setProgress(100);
    }
    async componentDidMount() {
        this.pageUpdater()
    }
    handlePrevClick = async () => {
        this.setState({ page: this.state.page - 1 })
        this.pageUpdater()
    }

    handleNextClick = async () => {
        this.setState({ page: this.state.page + 1 })
        this.pageUpdater()
    }
    render() {
        return (
            <div className='container' >
                <h2 style={{marginTop:'80px'}}>Digi News-Top Headlines</h2>
                {this.state.loading && <Loader />}
                <div className='row'>
                    {!this.state.loading && this.state.articles.map((element) => {

                        return <div className='col-md-4' key={element.url}>
                            <NewsItems title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""} imageUrl={element.urlToImage} newsUrl={element.url} date={element.publishedAt} source={element.source.name} />
                        </div>

                    })}

                </div>
                <div className='container my-3 d-flex justify-content-between'>
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                </div>
            </div>


        )
    }
}

export default NewsComponent
