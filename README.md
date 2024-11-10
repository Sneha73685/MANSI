# MANSI: Mental Assistance and Network for Supportive Interactions

MANSI is a mental health web application that provides accessible, private, and reliable support. It leverages AI-driven recommendations to connect users with certified mental health professionals, creating a secure, welcoming space for individuals seeking mental health assistance.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
  - [User Verification & Privacy](#user-verification--privacy)
  - [Diagnostic Questionnaire](#diagnostic-questionnaire)
  - [AI-Powered Personalized Recommendations](#ai-powered-personalized-recommendations)
  - [Comprehensive Care Partnerships](#comprehensive-care-partnerships)
  - [Data Privacy & Anonymity](#data-privacy--anonymity)
  - [AI/ML Integration](#aiml-integration)
- [Optional Features](#optional-features)
- [Project Goals](#project-goals)
- [Technology Stack](#technology-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)

---

## Overview

MANSI is designed to provide a supportive environment where users can safely seek mental health guidance and consultation. Through a secure user experience and personalized AI-driven recommendations, MANSI addresses individual mental health needs by connecting users with certified professionals.

## Features

### User Verification & Privacy

- **Secure Sign-In and Account Creation:** Users can create accounts and verify their identity in a secure environment.
- **Anonymity Options:** MANSI prioritizes user comfort and confidentiality by providing options for anonymity.
- **Encrypted Data Storage:** All sensitive data is encrypted to ensure maximum privacy.

### Diagnostic Questionnaire

Upon signing in, users complete an initial diagnostic questionnaire to evaluate their mental state, including factors like anxiety, depression, and stress. The results of this assessment form the basis for personalized recommendations.

### AI-Powered Personalized Recommendations

- **Random Forest Model:** MANSI uses an AI-powered Random Forest model to analyze questionnaire responses, categorizing users’ needs to offer targeted recommendations.
- **Professional Matching:** Based on the analysis, MANSI connects users with mental health specialists, such as therapists, psychologists, or psychiatrists, suited to their specific situation.

### Comprehensive Care Partnerships

To ensure users have access to complete support, MANSI partners with:

- **Mental Health Hospitals:** Collaborations provide access to qualified professionals for consultations and ongoing care.
- **Pharmaceutical Companies:** In cases where treatment requires prescriptions, partnerships facilitate seamless access to necessary medication.

### Data Privacy & Anonymity

MANSI upholds strict data privacy standards, safeguarding user identities and encrypting sensitive information to ensure confidentiality.

### AI/ML Integration

- **Random Forest Model**: Processes diagnostic responses to classify mental health needs, ensuring that recommendations are accurate and relevant.

## Optional Features

1. **Sentiment Analysis:** MANSI can apply sentiment analysis on open-ended responses to better understand users' emotional tones.
2. **Progress Tracking:** Tracking users' mood trends over time helps users and professionals monitor and respond to changing needs.

## Project Goals

MANSI aims to provide a safe, accessible, and private platform where users can gain insights into their mental health and seamlessly transition to receiving professional care.

## Technology Stack
### Frontend
- **HTML:** Structure and layout of web pages.
- **CSS:** Styling, including custom styles for consistency in appearance.
- **JavaScript:** Dynamic behavior and client-side interactions.
- **Locomotive Scroll:** Smooth scrolling and parallax effects for an engaging user experience.
- **Sher.js:** Additional utility for frontend functionalities, possibly for animations or interactions.
### Backend
- **Node.js** with Express
- **Python** for AI/ML services
- **WebSocket** for real-time features
- **JWT** authentication
### Database
- MongoDB for user data

### AI/ML Components
- **BERT** for natural language processing
- **Random Forest** for diagnostic assessments
- **scikit-learn** for machine learning pipelines

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Sneha73685/MANSI
   cd mansi
   ```bash
2. **Install the Depenedencies:** Ensure that you have node.js and npm installed. Then,
    ```bash
    npm install
3. **Set up environment variables:** Create a .env file and set up necessary environment variables, including database credentials and any API keys.
4. **Run the application:**
    ```bash
    npm start

## Usage
1. **Access the Diagnostic Questionnaire:** After signing in, users can complete the diagnostic questionnaire to assess their mental state.
2. **View Recommendations:** Based on AI analysis, users receive tailored recommendations for mental health professionals.
3. **Book Consultations:** Users can book consultations directly with specialists recommended through the app.
4. **Anonymity Options:** Users can choose to engage anonymously, with all personal data encrypted for added privacy.

## Contributing
Contributions are welcome! Please fork the repository, make your changes, and submit a pull request. For major changes, consider opening an issue first to discuss your ideas.
