import React from 'react';
import ShoppingElement from './ShoppingElement';
import { Pagination } from '@material-ui/lab';
import { Select } from '@material-ui/core';
import { MenuItem } from '@material-ui/core';

const ids = [0, 1];

// const listedElementsStyles = {
//     fontFamily: "Montserrat"
// };

const Results: React.FC= () => {

    return (
        <section className="results-section">
            <Select name="SortBy" className="results-section__sortBy">
                <MenuItem style = {listedElementsStyles} value="manual">Featured</MenuItem>
                <MenuItem style = {listedElementsStyles} value="created-ascending">Date, old to new</MenuItem>
                <MenuItem style = {listedElementsStyles} value="best-selling">Best Selling</MenuItem>
                <MenuItem style = {listedElementsStyles} value="title-ascending">Alphabetically, A-Z</MenuItem>
                <MenuItem style = {listedElementsStyles} value="title-descending">Alphabetically, Z-A</MenuItem>
                <MenuItem style = {listedElementsStyles} value="price-ascending">Price, low to high</MenuItem>
                <MenuItem style = {listedElementsStyles} value="price-descending">Price, high to low</MenuItem>
                <MenuItem style = {listedElementsStyles} value="created-descending">Date, new to old</MenuItem>
            </Select>
            <div className="results-section__row">
                <ShoppingElement id = {ids[0]}/>
                <ShoppingElement id = {ids[1]}/>
            </div>
            <div className="results-section__row">
                <ShoppingElement id = {ids[0]}/>
                <ShoppingElement id = {ids[1]}/>
            </div>
            <div className="results-section__row">
                <ShoppingElement id = {ids[0]}/>
                <ShoppingElement id = {ids[1]}/>
            </div>
            <Pagination count={10} shape="rounded" />
        </section>
    );
};

export default Results;