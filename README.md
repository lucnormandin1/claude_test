# Healthcare Nurse Training Platform

A comprehensive e-learning platform for nurse training with interactive features and patient assessment form with database integration.

## Project Structure

```
├── index.html              # Main HTML file with all sections
├── styles.css              # External CSS stylesheet
├── api_client.js           # JavaScript API client for form submission
├── server.js               # Express.js server (Node.js)
├── db.js                   # SQLite database management (Node.js)
├── patient_assessments.db  # SQLite database (created on first run)
├── package.json            # Node.js dependencies
└── README.md              # This file
```

## Features

- **Dashboard**: Overview of training modules
- **Video Modules**: Embedded video tutorials
- **Questionnaires**: Interactive quiz sections
- **Patient Assessment Form**: Data collection form with database integration
- **REST API**: Full CRUD operations for patient assessments
- **SQLite Database**: Persistent storage of patient data

## Setup Instructions

### 1. Install Node.js Dependencies

```bash
npm install
```

### 2. Start the Server

```bash
npm start
```

The server will start on `http://localhost:5000`

### 3. Open the Application

- Navigate to `http://localhost:5000` in your browser, or
- Open `index.html` directly in your browser

## API Endpoints

### Get All Assessments
```
GET /api/assessments
```

### Get Specific Assessment
```
GET /api/assessments/{id}
```

### Create New Assessment
```
POST /api/assessments
Content-Type: application/json

{
    "patient_name": "John Doe",
    "patient_age": 45,
    "medical_condition": "Hypertension",
    "vital_signs": "BP: 140/90, HR: 72",
    "medications": "Lisinopril",
    "notes": "Patient presenting with elevated blood pressure"
}
```

### Update Assessment
```
PUT /api/assessments/{id}
Content-Type: application/json

{
    "patient_name": "John Doe",
    "patient_age": 45,
    "medical_condition": "Hypertension",
    "vital_signs": "BP: 140/90, HR: 72",
    "medications": "Lisinopril",
    "notes": "Patient presenting with elevated blood pressure"
}
```

### Delete Assessment
```
DELETE /api/assessments/{id}
```

### Health Check
```
GET /api/health
```

## Usage

1. **Fill out the Patient Assessment Form** with:
   - Patient Name
   - Age
   - Medical Condition
   - Vital Signs
   - Medications
   - Clinical Notes

2. **Click "Submit Assessment"** to save to the database

3. **View all stored assessments** below the form

4. The form will show a success message with the assessment ID

## Database Schema

### patient_assessments table

| Column | Type | Description |
|--------|------|-------------|
| id | INTEGER | Primary key (auto-increment) |
| patient_name | TEXT | Patient's full name |
| patient_age | INTEGER | Patient's age in years |
| medical_condition | TEXT | Primary medical condition |
| vital_signs | TEXT | Vital signs reading (e.g., "BP: 140/90, HR: 72") |
| medications | TEXT | Current medications |
| notes | TEXT | Clinical notes and observations |
| created_at | TIMESTAMP | When the record was created |
| updated_at | TIMESTAMP | When the record was last updated |

## Viewing the Database

### Option 1: Using DB Browser (GUI)
1. Download [DB Browser for SQLite](https://sqlitebrowser.org/)
2. Open `patient_assessments.db` file
3. Browse and edit data visually

### Option 2: Using SQLite CLI
```bash
sqlite3 patient_assessments.db
SELECT * FROM patient_assessments;
```

## Troubleshooting

### Port 5000 Already in Use
If port 5000 is already in use, modify `server.js`:
```javascript
const PORT = 5001;  // Change port number
```

### CORS Issues
The Express app has CORS enabled. If you still get errors, check that the API_BASE_URL in `api_client.js` matches your server URL.

### Database Errors
Delete `patient_assessments.db` and restart the server to reinitialize the database.

### Dependencies Not Installed
If you get module errors, run:
```bash
npm install
```

## Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript
- **Backend**: Node.js, Express.js
- **Database**: SQLite3
- **API**: RESTful with JSON

## Future Enhancements

- User authentication and authorization
- Data export to CSV/PDF
- Advanced analytics and reporting
- Multi-user support
- Data encryption
- Backup and recovery features

