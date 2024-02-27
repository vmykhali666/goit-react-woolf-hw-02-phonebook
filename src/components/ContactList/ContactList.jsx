import React from 'react';
import { Notification } from 'components/Notification/Notification';
import styles from "styles/ContactList.module.css";

export const ContactList = ({ contacts, onRemove }) => {
  return (
    <ul className={styles.contactsList}>
      {contacts.length > 0 ? (
        contacts.map(contact => (
          <li key={contact.id} className={styles.element}>
            {contact.name + ' : ' + contact.number}
            <input
              type="button"
              value={'Delete'}
              onClick={() => onRemove(contact.id)}
              className={styles.button}/>
          </li>
        ))
      ) : (
        <Notification message="No contacts found" />
      )}
    </ul>
  );
}