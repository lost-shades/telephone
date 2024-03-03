# Telephone System with Observers

This project implements a telephone system using the Observer design pattern in JavaScript. It allows users to add phone numbers, dial them, and observe the dialing process.

## Features

- **Add Phone Numbers:** Users can add phone numbers to the telephone system.
- **Dial Phone Numbers:** Users can dial phone numbers from the system.
- **Observer Pattern:** Implemented using observers to notify when phone numbers are dialed.
- **Flexible Design:** Easily extendable to add new features or observers.

## Installation

1. Clone the repository:
    - git clone https://github.com/lost-shades/telephone.git
2. Navigate to the project directory:
    - cd telephone

##Usage
// Create a new Telephone instance
const telephone = new Telephone();

// Create an observer
const observer = new Observer();

// Add the observer to the telephone system
telephone.addObserver(observer);

// Add phone numbers
telephone.addPhoneNumber("1234567890");
telephone.addPhoneNumber("2345678901");

// Dial a phone number
telephone.dialPhoneNumber("1234567890"); // Output: Dialing 1234567890

// Remove a phone number
telephone.removePhoneNumber("1234567890");

##Contact
adaezeugwuoke@gmail.com
