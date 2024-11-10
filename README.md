# MANSI - Mental Health Anonymous Support Initiative

## Project Overview

MANSI (Mental Health Anonymous Support Initiative) is a comprehensive web application designed to bridge the gap between individuals seeking mental health support and qualified professionals. The platform prioritizes user privacy through anonymous interactions while leveraging AI technology to provide personalized mental health support. Users can connect with mental health professionals through various communication channels, track their mental well-being, and receive AI-powered insights and recommendations.

## Features

### Core Functionality
* **Anonymous Support Options**
  * Text-based chat sessions
  * Audio calls with voice modulation
  * Video calls with optional face filtering
  * Emergency support hotline integration

### AI-Powered Support
* **Personalized Insights**
  * Mood pattern analysis
  * Behavioral trend identification
  * Custom coping strategy recommendations
  * Early warning detection system

### Professional Care
* **Smart Matching System**
  * Comprehensive diagnostic questionnaires
  * Professional-patient matching algorithm
  * Scheduling and appointment management
  * Progress tracking and reporting

### Healthcare Integration
* **Seamless Connectivity**
  * Integration with mental health facilities
  * Pharmaceutical provider network
  * Electronic prescription management
  * Secure medical record sharing

### Privacy & Security
* **Data Protection**
  * End-to-end encryption
  * Anonymous user profiles
  * HIPAA compliance
  * Regular security audits

## Technology Stack

### Frontend
* React.js with TypeScript
* Redux for state management
* Material-UI components
* WebRTC for real-time communication

### Backend
* Node.js with Express
* Python for AI/ML services
* WebSocket for real-time features
* JWT authentication

### Database
* MongoDB for user data
* PostgreSQL for structured data
* Redis for caching

### AI/ML Components
* TensorFlow for deep learning models
* BERT for natural language processing
* Random Forest for diagnostic assessments
* scikit-learn for machine learning pipelines

## Installation Instructions

### Prerequisites
```bash
# Required software
Node.js (v14 or higher)
Python 3.8+
MongoDB
PostgreSQL
Redis
```

### Setup Steps
1. Clone the repository:
```bash
git clone https://github.com/your-org/mansi.git
cd mansi
```

2. Install dependencies:
```bash
# Frontend dependencies
cd frontend
npm install

# Backend dependencies
cd ../backend
npm install

# Python dependencies
cd ../ml-service
pip install -r requirements.txt
```

3. Configure environment variables:
```bash
# Create .env files from templates
cp .env.example .env
```

4. Initialize databases:
```bash
# MongoDB
mongorestore --db mansi ./backup/mongodb

# PostgreSQL
psql -U postgres -d mansi -f ./backup/init.sql
```

5. Start the application:
```bash
# Start all services
docker-compose up
```

## Usage

### User Registration
1. Access the platform at `http://localhost:3000`
2. Choose "Anonymous Registration"
3. Complete the initial diagnostic questionnaire
4. Set up communication preferences

### Professional Matching
1. Review matched professional profiles
2. Schedule initial consultation
3. Choose preferred communication method
4. Begin sessions

### Support Features
1. Access mood tracking tools
2. Use journaling features
3. View AI-generated insights
4. Manage medications and appointments

## AI/ML Models

### Random Forest Implementation
* Used for diagnostic assessments
* Features include:
  * User questionnaire responses
  * Behavioral patterns
  * Communication preferences
  * Historical interaction data

### BERT Model Integration
* Sentiment analysis of user messages
* Natural language understanding for:
  * Emergency detection
  * Support prioritization
  * Content recommendation
  * Progress tracking

## Future Enhancements
* Group therapy sessions
* Multi-language support
* Mobile applications
* Integration with wearable devices
* Advanced biometric analysis
* Expanded professional network
* Community support features

## Contributing

### Getting Started
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

### Guidelines
* Follow the coding style guide
* Write unit tests for new features
* Update documentation as needed
* Respect user privacy in all contributions

### Code Review Process
1. Submit pull request
2. Address reviewer feedback
3. Pass automated tests
4. Await final approval
