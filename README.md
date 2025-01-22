# MediConnect - Medical Booking System

## Overview
**MediConnect** is a TypeScript-based medical booking system designed using Object-Oriented Programming (OOP) principles. It provides patients with the ability to book appointments with doctors either in person or online, offering a modular and scalable design for future enhancements.

---

## Features
1. **User Management:**
   - Patients can register and maintain medical histories.
   - Doctors have specializations for precise patient-doctor mapping.

2. **Booking System:**
   - Schedule in-person appointments with location details.
   - Schedule online appointments with meeting links.

3. **Extensible Design:**
   - Built with abstraction, inheritance, and polymorphism to accommodate additional features like prescription management or notifications.

---

## Folder Structure
```
medical-booking-system/
├── src/
│   ├── entities/         # Core entities like Doctor, Patient, etc.
│   ├── value-objects/    # Small, reusable objects like Specialization, Address, etc.
│   ├── bookings/         # Booking-related classes and interfaces
│   ├── services/         # Service classes for business logic
│   ├── utils/            # Helper functions (if needed)
│   ├── index.ts          # Entry point
├── tests/                # Unit and integration tests
├── tsconfig.json         # TypeScript configuration
├── package.json          # Project metadata and dependencies
├── README.md             # Project overview and instructions
```

---

## Installation
### Prerequisites
- [Node.js](https://nodejs.org/) (v16+ recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/MediConnect.git
   cd MediConnect
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Compile the TypeScript code:
   ```bash
   npm run build
   # or
   yarn build
   ```

4. Run the application:
   ```bash
   npm start
   # or
   yarn start
   ```

---

## Usage
- **Schedule an In-Person Booking:** Provide patient, doctor, date, and location details.
- **Schedule an Online Booking:** Provide patient, doctor, date, and meeting link.
- **Extend Functionality:** Add new features like notifications or prescription handling by leveraging the modular OOP design.

---

## Example Code
Here is an example of creating a booking:
```typescript
import { Patient, Doctor, Specialization, Address, InPersonBooking, OnlineBooking } from './src';

// Create a Doctor with Specialization
const specialization = new Specialization("Cardiologist");
const doctor = new Doctor(1, "Dr. Smith", "drsmith@example.com", specialization);

// Create a Patient with Medical History
const patient = new Patient(2, "John Doe", "johndoe@example.com", ["High Blood Pressure"]);

// Create an In-Person Booking
const inPersonBooking = new InPersonBooking(
  patient,
  doctor,
  new Date(),
  new Address("New York", "NY")
);
console.log(inPersonBooking.schedule());

// Create an Online Booking
const onlineBooking = new OnlineBooking(
  patient,
  doctor,
  new Date(),
  "https://meet.example.com/doctor-appointment"
);
console.log(onlineBooking.schedule());
```

---

## Testing
Run unit tests using:
```bash
npm test
# or
yarn test
```

---

## Contributing
Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch for your feature/fix.
3. Commit your changes with clear messages.
4. Open a pull request.

---

## License
This project is licensed under the [MIT License](LICENSE).

---

## Author
- **Your Name** - [LinkedIn](https://linkedin.com/in/yourprofile) | [GitHub](https://github.com/yourusername)

---

## Acknowledgements
- TypeScript Documentation
- OOP Design Principles

