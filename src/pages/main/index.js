import React, { Component } from 'react';
import api from '../../services/api';
import './styles.css';


export default class Main extends Component{

    // sempre utilizar este padrao
    // sempre que uma variavel de state for alterada, o metodo render sera executado
    state = {
        products: []
    }


    // é executado assim que o component for exibido em tela
    componentDidMount(){
        this.loadProducts();
    }

    // quando não for um metodo do react, precisa ser em formato de arrow function
    loadProducts = async () =>{
        const response = await api.get('/products');
        
        this.setState({ products: response.data.docs });

        //console.log(response);
        //console.log(response.data.docs);
    };
    
    render(){
        //return <h1>Hello, rocketseat!</h1>
        //return <h1>Contagem de produtos: { this.state.products.length }</h1>

        const { products } = this.state;

        return (
            <div className="product-list">
                {products.map(product => (
                    // <h2 key={product._id}>{product.title}</h2>

                    <article key={product._id}>
                        <strong>{product.title}</strong>
                        <p>{product.description}</p>

                        <a href="">Acessar</a>

                    </article>

                ))}
            </div>
        )        
    }
}