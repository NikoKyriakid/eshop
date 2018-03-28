import React, { Component } from 'react';
import FilterSmartLink from './FilterSmartLink'
import { VisibilityFilters } from './../actions/actions.js'
class Filter extends Component {
    render() {
        return (
            <div className='filter_wrapper'>
                <div className="filter">
                    <div className='filter_inner'>
                        <div className='filter_box_wrapper'>
                            <div className="filter_box">
                                <h6 className="filter_box_title">Availability</h6>
                                <div>
                                    <div className="filter_scroll">
                                        <ul className='filter_box_list'>
                                            <FilterSmartLink filter={VisibilityFilters.SHOW_ALL}>
                                            All
                                            </FilterSmartLink>
                                            <FilterSmartLink filter={VisibilityFilters.SHOW_AVAILABLE}>
                                            Available
                                            </FilterSmartLink>
                                            <br/>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="filter_box">
                                <h6 className="filter_box_title">Clothes Size</h6>
                                <div>
                                    <div className="filter_scroll">
                                        <ul className='filter_box_list'>
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
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Filter