import React from 'react';
import styles from 'styles/Notification.module.css';

export class Notification extends React.Component {
  render() {
    return (
      <div className={styles.notification}>
        <p className={styles.message}>{this.props.message}</p>
      </div>
    );
  }
}