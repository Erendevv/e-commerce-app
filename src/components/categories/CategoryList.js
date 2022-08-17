import React, { Component } from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'
import { bindActionCreators } from 'redux'
import * as categoryActions from '../../redux/actions/categoryActions'
import * as productActions from '../../redux/actions/productActions'
import { connect } from 'react-redux'
class CategoryList extends Component {
    componentDidMount() {
        this.props.actions.getCategories();
    }
    selectCategory(category){
        this.props.actions.changeCategory(category);
        this.props.actions.getProducts(category.id);
    }
    render() {
        return (
            <div>
                <ListGroup>
                    {this.props.categories.map(category => (
                        <ListGroupItem active={this.props.currentCategory.id===category.id ? true : false} onClick={()=>this.selectCategory(category)} key={category.id}>
                            {category.categoryName}
                        </ListGroupItem>
                    ))}

                </ListGroup>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        categories: state.categoryReducer,
        currentCategory: state.changeCategoryReducer
    }
}
function mapDispatchToProps(dispatch) {
    return {
        actions: {
            getCategories: bindActionCreators(categoryActions.getCategories, dispatch),
            changeCategory:bindActionCreators(categoryActions.changeCategory,dispatch),
            getProducts:bindActionCreators(productActions.getProducts,dispatch)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList)
