import React, { Component } from 'react'
import { Table } from 'reactstrap'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as productAction from '../../redux/actions/productActions'

class ProductList extends Component {
    componentDidMount() {
        this.props.actions.getProducts();
        console.log("asdasds")
    }
    render() {
        return (
            <div>
                <Table>
                    <thead>
                        <tr>
                            <th> #</th>
                            <th> First Name</th>
                            <th>Unit Price</th>
                            <th> Quantity</th>
                        </tr>
                    </thead>
                    <tbody>

                        {this.props.products.map(product => (
                            <tr key={product.id}>
                                <th scope="row"> {product.id}</th>
                                <td>{product.productName}</td>
                                <td> {product.unitPrice}</td>
                                <td>{product.quantityPerUnit}</td>
                            </tr>
                        ))}


                    </tbody>
                </Table>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        products: state.productReducer
    }
}
function mapDispatchToProps(dispatch) {
    return {
        actions: {
            getProducts: bindActionCreators(productAction.getProducts, dispatch)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList)