# Ai interview Mocker

AI platform for mock interview practice and feedback directly from AI

## Features

- Realistic interview simulations
- AI-powered feedback
- Dynamic question adaptation
- Practice mode
- Performance analytics
- Video and audio recording


## Tech Stack

- Nextjs
- postgress SQL
- Clerk
- Stripe
- Shadcn
- Tailwindcss


## Screenshots

![Screenshot (131)](https://github.com/user-attachments/assets/4aef1046-72fe-4076-a800-69e9149d40c4)


![Screenshot (132)](https://github.com/user-attachments/assets/7dbfd422-19ba-4d97-be73-dc005767e884)

![Screenshot (133)](https://github.com/user-attachments/assets/21e29eed-0795-4c26-91e6-e7f8f5e15f34)

![Screenshot (134)](https://github.com/user-attachments/assets/d4964247-41bf-4b7b-bf12-0f71872c0b06)

![Screenshot (135)](https://github.com/user-attachments/assets/56f2d71e-5946-43d5-a6e1-eff8d8e9fffa)
## Installation

Install my-project with npm

```bash
  npm install 
  cd my-project
  npm run dev
```
    

**Set Up Environment Variables**

Create a new file named `.env.local` in the root of your project and add the following content:

```env
# clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

# Postgrss Database
NEXT_PUBLIC_DRIZZLE_DB_URL=

#Gemini api key
NEXT_PUBLIC_GEMINI_API_KEY=
NEXT_PUBLIC_INTERVIEW_QUESTION_COUNT=5
```

Replace the placeholder values with your actual respective account credentials. You can obtain these credentials by signing up on the [Clerk](https://clerk.com/), [MongoDB](https://www.mongodb.com/), [Cloudinary](https://cloudinary.com/) and [Stripe](https://stripe.com)











#

## Edit drizzle.config.js file

Add postgress sql link there in file
## Authors

- [@Deadlybhoot](https://www.github.com/Deadlybhoot)

