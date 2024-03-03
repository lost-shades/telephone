class Observer {
    notify(phoneNumber) {
        console.log("Phone number dialed:", phoneNumber);
    }
}

class Telephone {
    constructor() {
        this.phoneNumbers = [];
        this.observers = [];
    }

    // Method to add observers
    addObserver(observer) {
        this.observers.push(observer);
    }

    // Method to remove observers
    removeObserver(observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    // Method to notify observers
    notifyObservers(phoneNumber) {
        this.observers.forEach(observer => observer.notify(phoneNumber));
    }

    // Method to add a new phone number
    addPhoneNumber(phoneNumber) {
        this.phoneNumbers.push(phoneNumber);
    }

    // Method to remove a phone number
    removePhoneNumber(phoneNumber) {
        const index = this.phoneNumbers.indexOf(phoneNumber);
        if (index !== -1) {
            this.phoneNumbers.splice(index, 1);
        }
    }

    // Method to dial a phone number
    dialPhoneNumber(phoneNumber) {
        if (this.phoneNumbers.includes(phoneNumber)) {
            console.log(`Dialing ${phoneNumber}`);
            this.notifyObservers(phoneNumber);
        } else {
            console.log("Phone number not found.");
        }
    }
}

// Sample Usage
const telephone = new Telephone();

const observer1 = new Observer();

telephone.addObserver(observer1);

telephone.addPhoneNumber("08163055344");
telephone.addPhoneNumber("08132604499");

telephone.dialPhoneNumber("08163055344");
telephone.dialPhoneNumber("08132604499");
telephone.dialPhoneNumber("09134673367");
