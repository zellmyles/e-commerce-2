import React from 'react';
const items = require('./storeItems.json');

class Products extends React.Component {

    constructor() {
        super()
        this.state = {
            originalArr: items.items,
            productList: items.items
        };

        this.handleClick = this.handleClick.bind(this);
    }

    //return a new array
    //new array will be the filtered list



    handleClick = (event) => {
        // Convert if statements to switch statements
        if (event.target.value === 'all') {
            this.setState({
                productList: this.state.originalArr
            });
        } else if (event.target.value === 'under30') {
            this.setState({
                productList: this.state.originalArr.filter(product => product.price < 30)
            });
        } else if (event.target.value === '30-49') {
            this.setState({
                productList: this.state.originalArr.filter(product => product.price < 50 && product.price > 29)
            });
        } else if (event.target.value === '50+') {
            this.setState({
                productList: this.state.originalArr.filter(product => product.price >= 50)
            });
        } else if (event.target.value === 'Tops'){
            this.setState({
                productList: this.state.originalArr.filter(product => product.category === 'Tops')
            });
        } else if (event.target.value === 'Bottoms'){
            this.setState({
                productList: this.state.originalArr.filter(product => product.category === 'Bottoms')
            });
        } 



        // console.log(this.state.productList);
    }



    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <head>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
                    </head>
                    <header>
                        <nav>
                            <ul className="products__navbar">
                                <li><a className="nav__links" href="home.html">Home</a></li>
                                <li><a className="nav__links" href="products.html">Products</a></li>
                                <li><a className="nav__links" href="contact.html">Contact</a></li>
                            </ul>
                        </nav>
                        <section className="heading">
                            <p>Women's Clothing</p>
                        </section>
                    </header>
                    <main className="content">

                        <section className="banner">
                            <article className="bannerImageContainer">
                                <img className="bannerImage" src="img/aesthetic.jpg" alt="Five women modeling clothes together." />
                            </article>
                            <article className="bannerTextContainer">
                                <div className="bannerText">
                                    <h1>Ladies find your style.</h1>
                                </div>
                            </article>
                        </section>
                        <div className="filter-btn">
                            <ul id="buttons">
                                <button value='all' onClick={this.handleClick}>All</button>
                                <button value='under30' onClick={this.handleClick}>Under $30</button>
                                <button value='30-49' onClick={this.handleClick}>$30-$49</button>
                                <button value='50+' onClick={this.handleClick}>$50+</button>
                                <button value='Tops' onClick={this.handleClick}>Tops</button>
                                <button value='Bottoms' onClick={this.handleClick}>Bottoms</button>
                            </ul>


                        </div>


                        <section className="product-grids">
                            <article className="womensGrid">
                                {/* bring in products.json file*/}
                                {this.state.productList && this.state.productList.map((item, key) => {
                                    return (
                                        <div className="womensGrid__items" key={key}>
                                            <div className="womensGrid__imageContainer">
                                                <img className="womensGrid__image" src={item.img} alt="ff" />
                                            </div>

                                            <div className="womensGrid__imageTextContainer">
                                                <p className="womensGrid__imageText">{item.name}</p>
                                                <p className="womensGrid__imageText2">${item.price}</p>
                                            </div>
                                        </div>
                                    )
                                })}
                            </article>
                        </section>

                    </main>

                    <footer className="footer-container">
                        <div className="footer__icons">
                            <a href="https://twitter.com/" className="fa fa-twitter"></a>
                            <a href="https://www.instagram.com/" className="fa fa-instagram"></a>
                            <a href="https://www.facebook.com/" className="fa fa-facebook"></a>
                        </div>
                        <section>
                            <p className="footer__copyright">29th & Swank. &copy;Copyright 2020. </p>
                        </section>
                    </footer>
                </div>
            </React.Fragment>

        )
    }
}



export default Products;