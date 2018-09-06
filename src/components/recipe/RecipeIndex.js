import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getRecipes } from '../../actions/recipeActions'
import RecipeCard from './RecipeCard'
import Loading from '../common/ui/Loading'

class RecipeIndex extends Component {
  componentDidMount() {
    this.props.getRecipes()
  }

  render() {
    const { recipes, loading } = this.props.recipes,
      columns = 4,
      recipeMarkup = []

    let recipeCardArray = [],
      recipeContent,
      row = 1

    recipes.forEach((recipe, i) => {
      // TODO This can be handled better with CSS grid which will be implemented later in mp-62
      recipeCardArray.push(<RecipeCard key={recipe.id} recipe={recipe} />)
      if ((i + 1) % columns === 0 || i === recipes.length - 1) {
        recipeMarkup.push(
          <div key={row} className="row">
            {recipeCardArray}
          </div>
        )
        recipeCardArray = []
        row++
      }
    })
    if (recipes === null || loading) {
      recipeContent = <Loading />
    } else {
      recipeContent = recipeMarkup
    }
    return <React.Fragment>{recipeContent}</React.Fragment>
  }
}

RecipeIndex.propTypes = {
  getRecipes: PropTypes.func.isRequired,
  recipes: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  recipes: state.recipes
})

export default connect(
  mapStateToProps,
  { getRecipes }
)(RecipeIndex)
