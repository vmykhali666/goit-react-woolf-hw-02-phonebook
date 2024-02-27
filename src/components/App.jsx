import React, { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Section } from './Section/Section';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleFilterChange = e => {
    this.setState({ filter: e.target.value });
  };

  onAddContact = newContact => {
    if (this.state.contacts.some(contact => contact.name === newContact.name)) {
      alert(`${newContact.name} is already in contacts`);
      return;
    }

    this.setState(({ contacts }) => ({
      contacts: [newContact, ...contacts],
    }));
  };

  onRemoveContact = id => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== id),
    }));
  };

  getFilteredContacts = () => {
    return this.state.filter !== ''
      ? this.state.contacts.filter(contact =>
          contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
        )
      : this.state.contacts;
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 20,
          color: '#010101',
        }}
      >
        <Section title="Phone Book">
          <ContactForm onAddContact={this.onAddContact} />
        </Section>
        <Section title="Contacts">
          <Filter
            filter={this.state.filter}
            onFilterChange={this.handleFilterChange}
          />
          <ContactList
            contacts={this.getFilteredContacts()}
            onRemove={this.onRemoveContact}
          />
        </Section>
      </div>
    );
  }
}
