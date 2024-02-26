import React, { Component } from 'react';
import clsx from 'clsx';
import styles from 'styles/Filter.module.css';

export class Filter extends Component {
    render() {
        const { filter, onFilterChange } = this.props;

        return (
            <input
                type="text"
                className={clsx(styles.input)}
                name="search"
                placeholder="Search by name"
                value={filter}
                onChange={ onFilterChange }
            />
        );
    }
}