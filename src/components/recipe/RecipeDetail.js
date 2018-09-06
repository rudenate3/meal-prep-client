import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Loading from '../common/ui/Loading'
import { getRecipe } from '../../actions/recipeActions'
import Button from '../common/ui/Button'

class RecipeDetail extends Component {
  componentDidMount() {
    this.props.getRecipe(this.props.match.params.id)
  }
  render() {
    const { recipe, loading } = this.props.recipe

    let recipeContent, owner

    if (recipe === null || loading || Object.keys(recipe).length === 0) {
      recipeContent = <Loading />
    } else {
      if (localStorage.user) {
        owner = JSON.parse(localStorage.user).id === recipe.author.id
      }

      const ingredients = recipe.ingredients.map(ingredient => {
        return (
          <li
            key={ingredient.id}
            className="list-group-item list-group-item-dark"
          >
            <span>
              {ingredient.quantity} {ingredient.quantityType} {ingredient.title}
            </span>
          </li>
        )
      })

      const tags = recipe.tags.map(tag => {
        return (
          <h4 key={tag.id} className="badge badge-secondary m-3">
            {tag.title}
          </h4>
        )
      })

      recipeContent = (
        <div className="col-md-12">
          <div className="card">
            <img
              className="card-img-top"
              src="https://via.placeholder.com/350x150" // TODO handle image
              alt="Recipe"
            />

            <div className="card-body bg-dark text-white">
              <div className="row">
                <div className="col-md-12">
                  <h3 className="card-title">{recipe.title}</h3>
                </div>

                <div className="col-md-6">
                  <span className="lead">{recipe.author.email}</span>
                </div>
                <div className="col-md-6 text-center">
                  <span className="lead">{tags}</span>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 mb-4">
                  <p className="card-text">{recipe.description}</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <ul className="list-group list-group-flush">{ingredients}</ul>
                </div>
              </div>
            </div>

            {owner && (
              <div
                className="card-footer bg-dark"
                style={{ display: 'inline-block' }}
              >
                <div className="row">
                  <div className="col-md-6">
                    <Button
                      content="Edit Recipe"
                      buttonType="secondary"
                      block={true}
                    />
                  </div>
                  <div className="col-md-6">
                    <Button
                      styles="mr-auto"
                      content="Delete Recipe"
                      buttonType="danger"
                      block={true}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )
    }

    return <React.Fragment>{recipeContent}</React.Fragment>
  }
}

RecipeDetail.propTypes = {
  getRecipe: PropTypes.func.isRequired,
  recipe: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  recipe: state.recipes
})

export default connect(
  mapStateToProps,
  { getRecipe }
)(RecipeDetail)
