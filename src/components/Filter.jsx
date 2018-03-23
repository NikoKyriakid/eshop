import React, { Component } from 'react';
import FilterSmartLink from './FilterSmartLink'
import { VisibilityFilters } from './../actions/actions.js'

class Filter extends Component {
    render() {
        return (
            <ul className='filter filter__box__list'>
                <span>Availability: </span>
                <FilterSmartLink filter={VisibilityFilters.SHOW_ALL}>
                All
                </FilterSmartLink>
                <FilterSmartLink filter={VisibilityFilters.SHOW_AVAILABLE}>
                Available
                </FilterSmartLink>
                <br/>
                <span>Clothes Size: </span>
                <FilterSmartLink filter={VisibilityFilters.SHOW_S}>
                S
                </FilterSmartLink>
                <FilterSmartLink filter={VisibilityFilters.SHOW_M}>
                M
                </FilterSmartLink>
                <FilterSmartLink filter={VisibilityFilters.SHOW_L}>
                L
                </FilterSmartLink>
                <FilterSmartLink filter={VisibilityFilters.SHOW_XL}>
                XL
                </FilterSmartLink>
                <FilterSmartLink filter={VisibilityFilters.SHOW_XXL}>
                XXL
                </FilterSmartLink>
            </ul>
        )
    }
}

export default Filter