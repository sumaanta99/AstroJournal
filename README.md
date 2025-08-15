AstroJournal

Astro Journal is a mobile journal application for astrology enthusiasts. Users can view daily horoscopes, log personal journal entries, and toggle between zodiac signs. The app supports offline access with local storage and is built with a clean, scalable architecture.

🎯 Objective

View daily horoscopes for selected zodiac signs.

Write and save journal entries for each day.

Toggle between zodiac signs.

Offline access for previously saved journals.

Scalable folder structure and maintainable code.

App Features
1. Home Screen

Displays today’s date and horoscope for the selected zodiac sign.

Dropdown to select zodiac sign (Aries, Taurus, etc.).

"Write Journal" button to navigate to the Journal screen.

2. Edit Journal Screen

Editable input for the day’s journal entry.

Explicit "Save" button to persist entries locally.

3. Journal Screen

List of all journals recorded.

4. Navigation

React Navigation used for routing between screens.

Minimum two screens: Home & Journal.

5. Offline Access

Entries and selected zodiac signs persist using AsyncStorage or SQLite.


🚀 Setup & Running

Clone the Repository

git clone https://github.com/sumaanta99/AstroJournal.git
cd AstroJournal


Install Dependencies

npm install
# or
yarn install


Start Development Server

npx react-native run-android    
