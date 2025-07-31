# 🔐 Login & Register System with Supabase

A modern authentication system built with Next.js 15, TypeScript, Tailwind CSS, and Supabase. This project provides a complete user authentication flow with registration, login, logout, and a protected dashboard.

## ✨ Features

- **User Registration** - Create new accounts with email, username, and password
- **User Login** - Secure authentication with email and password
- **Protected Dashboard** - User information display with logout functionality
- **Responsive Design** - Modern UI that works on all devices
- **Dark Mode Support** - Built-in dark/light theme
- **Real-time Authentication** - Automatic session management
- **Error Handling** - Comprehensive error messages and validation
- **TypeScript** - Full type safety throughout the application

## 🚀 Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS 4
- **Authentication**: Supabase Auth
- **Database**: Supabase PostgreSQL
- **Deployment**: Vercel-ready

## 📋 Prerequisites

Before running this project, make sure you have:

- Node.js 18+ installed
- A Supabase account and project
- Git installed

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/devpayoub/login-register-supabase
   cd login-register-supabase
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

   To get these values:
   - Go to your Supabase project dashboard
   - Navigate to Settings → API
   - Copy the "Project URL" and "anon public" key

4. **Set up the database**

   In your Supabase dashboard, create a `Users` table with the following SQL:
   ```sql
   CREATE TABLE Users (
     id UUID REFERENCES auth.Users(id) PRIMARY KEY,
     email TEXT UNIQUE NOT NULL,
     username TEXT UNIQUE NOT NULL,
     created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
   );
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── login/             # Login page
│   ├── register/          # Registration page
│   ├── layout.tsx         # Root layout with AuthProvider
│   ├── page.tsx           # Protected dashboard
│   └── globals.css        # Global styles
├── contexts/
│   └── AuthContext.tsx    # Authentication context
└── lib/
    └── supabase.ts        # Supabase client configuration
```

## 🔄 Authentication Flow

### Registration Process
1. User fills out registration form (email, username, password)
2. System checks if email already exists
3. Creates Supabase Auth user
4. Inserts user data into `Users` table
5. Shows success message and redirects to login

### Login Process
1. User enters email and password
2. Supabase authenticates credentials
3. User is automatically redirected to dashboard
4. Session is maintained across page refreshes

### Dashboard
- Displays user information (email, user ID, last sign-in)
- Provides logout functionality
- Protected route - only accessible to authenticated users

## 🎨 UI Components

- **Modern Design**: Clean, responsive interface
- **Loading States**: Spinner animations during authentication
- **Error Handling**: Clear error messages for validation
- **Dark Mode**: Automatic theme switching
- **Responsive**: Works on mobile, tablet, and desktop

## 🔧 Customization

### Styling
The project uses Tailwind CSS. You can customize the design by modifying:
- `src/app/globals.css` - Global styles
- Component classes in individual files

### Authentication
Modify the authentication logic in:
- `src/contexts/AuthContext.tsx` - Core auth functions
- `src/app/login/page.tsx` - Login form
- `src/app/register/page.tsx` - Registration form

### Database Schema
Update the database schema in Supabase and modify the registration logic in `AuthContext.tsx` to match your new schema.

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

### Other Platforms
The project can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🔒 Security Features

- **Password Validation**: Minimum 6 characters required
- **Email Validation**: Proper email format checking
- **Session Management**: Secure session handling with Supabase
- **Protected Routes**: Automatic redirect for unauthenticated users
- **Error Handling**: Comprehensive error messages without exposing sensitive data

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React framework
- [Supabase](https://supabase.com/) - The open source Firebase alternative
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework
- [Vercel](https://vercel.com/) - The platform for frontend developers

## 📞 Support

If you have any questions or need help with this project:

1. Check the [Issues](https://github.com/devpayoub/login-register-supabase/issues) page
2. Create a new issue with a detailed description
3. Include your environment details and error messages

---

**Made with ❤️ using Next.js and Supabase**
