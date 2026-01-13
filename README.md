# 🌍 AI Trip Planner


![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Firebase](https://img.shields.io/badge/firebase-ffca28?style=for-the-badge&logo=firebase&logoColor=black)
![Gemini AI](https://img.shields.io/badge/Google%20Gemini%20AI-8E75B2?style=for-the-badge&logo=google&logoColor=white)


### 🚀 [Live Demo](https://ai-trip-planner-neeraj-five.vercel.app)

 
A smart, AI-powered travel assistant that generates personalized trip itineraries based on your preferences. Built with **React.js**, **Google Gemini AI**, and **Firebase**, this application offers a modern, responsive interface to plan your next adventure effortlessly.  Powered by **Google Gemini AI**, **OpenStreetMap**, and **Firebase**.

![Project Banner](public/landing.png)
## ✨ Features

- **🚀 AI-Powered Itineraries:** Generates detailed day-by-day travel plans using Google Gemini 2.5 Flash.
- **🏨 Smart Recommendations:** Suggests hotels and hidden gems tailored to your budget and travel style.
- **📍 Interactive Maps:** Integrated Google Maps links for every location and hotel.
- **📸 Dynamic Imagery:** Fetches high-quality travel photos automatically using the Unsplash API.
- **🔐 Secure Authentication:** Seamless Google Sign-In powered by Firebase & Google OAuth.
- **🎨 Modern UI/UX:** Features a sleek "Glassmorphism" design, responsive layouts, and smooth animations using Tailwind CSS and Shadcn UI.
- **💾 Cloud Sync:** Saves your generated trips to Firebase Firestore so you can view them anytime.

## 🛠️ Tech Stack

- **Frontend:** React.js (Vite), Tailwind CSS
- **UI Library:** Shadcn UI, Radix UI, Lucide React
- **Backend / Database:** Firebase (Firestore)
- **AI Model:** Google Gemini API (`gemini-2.5-flash`)
- **Authentication:** Google OAuth 2.0
- **APIs:** Unsplash API (Images), Google Maps (Navigation)

## 🚀 Getting Started

Follow these steps to run the project locally.

### Prerequisites
Make sure you have **Node.js** installed on your machine.
 
### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Neeraj1708/AI_Trip_Planner.git
    cd AI_Trip_Planner
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3. **Set up Environment Variables**
   Create a `.env.local` file in the root directory and add your API keys:
   ```env
   VITE_GOOGLE_GEMINI_AI_API_KEY=your_gemini_api_key
   VITE_GOOGLE_OAUTH_CLIENT_ID=your_google_client_id
   VITE_FIREBASE_API_KEY=your_firebase_api_key
   VITE_UNSPLASH_ACCESS_KEY=your_unsplash_access_key
   ```


4. **Run the development server**
   ```bash
   npm run dev

   ```


5. **Open your browser**
   Navigate to `http://localhost:5173` to see the app in action!

   ## 📂 Project Structure

   ```
   src/
   ├── components/         # Reusable UI components (Header, Buttons, Dialogs)
   ├── constants/          # Static data (Options, Prompts)
   ├── context/            # React Context for state management
   ├── service/            # API configurations (Firebase, Gemini, GlobalApi)
   ├── view-trip/          # Trip details page components (Hotels, Itinerary)
   ├── create-trip/        # Trip generation form
   ├── my-trips/           # User dashboard
   └── main.jsx            # Entry point

   ```

## 🤝 Contributing

  Contributions are welcome! If you have suggestions for improvements or new features, feel free to open an issue or submit a pull request.

   1. Fork the Project
   2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
   3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
   4. Push to the Branch (`git push origin feature/AmazingFeature`)
   5. Open a Pull Request

## 📄 License

   Distributed under the MIT License. See `LICENSE` for more information.

   ---

<p align="center">
Made with ❤️ by [Neeraj Wariya]
</p>

 
