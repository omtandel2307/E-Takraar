E-Takraar
E-Takraar is a tool designed to enhance online safety for women by preventing instances of harassment and other inappropriate behaviors. The system utilizes a sentiment analysis model to detect harassment in real-time while users are browsing online. Additionally, it provides a grievance platform for women to raise, monitor, and track their complaints, offering a seamless experience for reporting and addressing incidents of harassment. Admins have a dedicated interface to monitor and take action on these complaints.

Problem E-Takraar Solves
With the rise of online platforms, many women face sexual harassment and online abuse. E-Takraar offers a solution by detecting harassment-related content through sentiment analysis while women are browsing, thereby ensuring their safety. It also prevents doxxing by integrating an API that blocks access to fake or malicious websites. Furthermore, women can file complaints using the grievance platform, allowing them to track their issues, while administrators can oversee and address these reports.

Features
Real-Time Sentiment Analysis: Detects harassment text in real time while women browse online, blocking harmful interactions.
Grievance Platform: Allows users to raise complaints, track their status, and receive updates on actions taken.
Admin Panel: Provides administrators with the tools to monitor user complaints and take appropriate actions.
Doxxing Prevention: Integrated API that prevents users from entering suspicious or fake websites, ensuring secure online interactions.
Installation and Setup
Prerequisites
To get started with the project, ensure you have the following installed:

Node.js
npm
Python 3.x
Tailwind CSS
Installation Steps
Clone the Repository

bash
Copy code
git clone https://github.com/omtandel2307/E-Takraar.git
cd E-Takraar
Install Dependencies

For the frontend:

bash
Copy code
npm install
For the backend (Python):

bash
Copy code
pip install -r requirements.txt
Run the Application

To start the frontend server:

bash
Copy code
npm start
To run the backend Python model:

bash
Copy code
python run.py
Usage
Once the installation is complete, the tool can be used by women to ensure their online safety. The system automatically detects harassment-related content while they browse, preventing malicious interactions. Women can also report incidents using the integrated grievance platform, tracking the status of their complaints. Admins can log in separately to monitor and manage the complaints raised.

Tech Stack
Frontend: Tailwind CSS, JavaScript, React.js
Backend: Python, Flask
Machine Learning: Natural Language Processing (NLP), Sentiment Analysis
Database: MongoDB/Firebase (if applicable)
Deployment: Node.js, FastAPI
API Integration: API for preventing doxxing by blocking malicious websites.
Project Structure
src/: Contains the source code for the frontend.
public/: Public assets like images and icons.
node_modules/: Node.js dependencies.
main.py: Entry point for the backend (Flask) server.
model.pkl: Pre-trained model for sentiment analysis and harassment detection.
vectoriser.pkl: Pre-trained vectorizer for text data.
requirements.txt: List of Python dependencies.
Model Information
The model.pkl file contains the trained sentiment analysis model for detecting harassment, while the vectoriser.pkl file is used for preprocessing text data. These files work together to classify and detect harassment-related content in real-time.

Contributions
Contributions are welcome! If you'd like to improve the project or add features, feel free to fork the repository and submit a pull request.
