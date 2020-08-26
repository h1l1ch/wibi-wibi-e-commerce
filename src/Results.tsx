import React from 'react';
import ShoppingElementsRow from './ShoppingElementsRow';
import { Pagination } from '@material-ui/lab';

const Results: React.FC= () => {

    return (
        <section className="results-section">
            <select name="SortBy" className="results-section__sortBy">
                <option value="created-ascending">Date, old to new</option>
                <option value="manual">Featured</option>
                <option value="best-selling">Best Selling</option>
                <option value="title-ascending">Alphabetically, A-Z</option>
                <option value="title-descending">Alphabetically, Z-A</option>
                <option value="price-ascending">Price, low to high</option>
                <option value="price-descending">Price, high to low</option>
                <option value="created-descending">Date, new to old</option>
            </select>
            <ShoppingElementsRow/>
            <ShoppingElementsRow/>
            <ShoppingElementsRow/>
            <Pagination count={10} shape="rounded" />
        </section>
    );
};

export default Results;