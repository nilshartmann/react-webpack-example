"use strict";
import React from 'react';

// Styling
import styles from './styles/styles.css';

// "Data"
import cards from './cards.json';

// Our application
import GreetingCardApp from './GreetingCardApp';


React.render(<GreetingCardApp cards={cards} />, document.getElementById('mount'));
