# Newegg-Clone

A website that imitates newegg.com on a smaller scale. Created from scratch using the MERN stack, and Passport.js for user authentication.
(A link to the website will be posted here once deployed)

# Features

### Browsing
Without accounts, users can currently query for items by browsing what's trending, using the category/nav bar, or the search bar. Many keywords are supported via regex - brands, platform, name, manufacturer, etc.
### User
Users who are logged in are allowed to put items into their carts. MongoDB will save cart items individually per user.
### Admin
Admins are 'seller' accounts. Admins can post items into the database, once after filling in the required fields.

# Video Demo:
To be posted.

# To Do:
- [x] Moderators can add/remove products
- [x] Add the main component categories (GPU, CPU, RAM..)
- [x] Consumer can add/remove cart items, and see their total
- [ ] Everyone can view the most popular items that have been added by users to their carts
- [ ] Check for parts compatibility inside the cart
- [ ] Allow everyone to create seller accounts, not just Moderators
- [ ] A (Fake) checkout system that sends a receipt via email to the buyer
- [ ] An option for consumers to see most popular items by category
- [ ] Add mobile support
