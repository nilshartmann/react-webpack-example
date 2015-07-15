import React from 'react';

// "Data"
import cards from './cards.json';

// Our application
import GreetingCardApp from './GreetingCardApp';


React.render(<GreetingCardApp cards={cards} />, document.getElementById('mount'));
