import React from 'react';
import css from 'styles/Section.module.css';

export class Section extends React.Component {
    render() {
        const { title, children } = this.props;
        return (
            <section>
                <h2 className={css.heading}>{title}</h2>
                {children}
            </section>
        );
    }
}