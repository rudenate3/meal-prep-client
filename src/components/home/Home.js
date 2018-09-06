import React, { Component } from 'react'
import PageHeader from '../common/ui/PageHeader'
import RecipeIndex from '../recipe/RecipeIndex'

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <PageHeader content="Home" />
        </div>
        <RecipeIndex />
      </div>
    )
  }
}
