The World of Tarot

This app uses the tarot api found here: https://tarotapi.dev/
I'll also be using the Rider Waite 1909 deck, which is public domain.


Technologies Used:
React and Vite

I'm fetching tarot cards with their associated meanings from the tarot api. This information is then matched with an array of card images I've created. I've provided options for a single card and a three-card layout for readings. Each layout runs through the full card list, picks the approporiate number of cards, then matches them with their images. I've also included a 50% chance for a card to be drawn "reversed", which changes the meaning. Those meanings are then added next to the card's image to create a full tarot reading for the user.

For the Explore page, I've created a carousel of the entire deck, so you can explore all the cards and meanings at your leisure. I initially wanted to use bootstrap for this carousel (you can see vestigaes of that in the code), but it was clumsy. I pivoted and created my own.

For the future, I'd like to include images for the reversed cards and an option to display the reversed version. I would also like to make this responsive and potentially use this functionality for a mobile app.

Permalink to project:
https://tarothome.netlify.app


