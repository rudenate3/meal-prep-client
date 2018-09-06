import React, { Component } from 'react'
import Button from '../common/ui/Button'
import { Link } from 'react-router-dom'

export default class RecipeCard extends Component {
  render() {
    const { recipe } = this.props
    return (
      <div className="col-md-3 mt-3">
        <div className="card">
          <div className="card-header bg-danger text-center text-white">
            <h3 className="card-title">{recipe.title}</h3>
          </div>
          <img
            className="card-img-top"
            src="https://via.placeholder.com/350x150" // TODO handle image
            alt="Recipe"
          />

          <div className="card-body bg-dark text-white">
            <p className="card-text">{recipe.description}</p>
          </div>
          <Link to={`/recipe/${recipe.id}`}>
            <Button content="View Recipe" buttonType="danger" block={true} />
          </Link>
        </div>
      </div>
    )
  }
}
