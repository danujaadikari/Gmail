# Gmail Clone

A modern Gmail clone built with React, TypeScript, and Tailwind CSS. This project replicates the core UI/UX of Gmail with a clean, responsive interface.

![Gmail Clone](https://img.shields.io/badge/React-18.2.0-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.2.2-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3.6-38bdf8)

## ✨ Features

- 📧 **Email Interface** - Clean, Gmail-like inbox interface
- 🎨 **Modern UI** - Built with Tailwind CSS for a responsive design
- 🔐 **Login Page** - Authentication flow (UI ready)
- 📱 **Responsive Design** - Works seamlessly on desktop and mobile devices
- ⚡ **Fast Performance** - Powered by Vite for lightning-fast development and builds
- 🎯 **Type Safety** - Fully typed with TypeScript

## 🛠️ Tech Stack

- **Frontend Framework:** React 18.2.0
- **Language:** TypeScript 5.2.2
- **Styling:** Tailwind CSS 3.3.6
- **Routing:** React Router DOM 6.21.0
- **Build Tool:** Vite 5.0.8
- **Deployment:** Firebase (configured)

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (version 14 or higher)
- npm or yarn

## 🚀 Getting Started

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/gmail-clone.git
cd Gmail
```

2. Install dependencies:
```bash
npm install
```

### Development

Start the development server:
```bash
npm run dev
```

The application will open at `http://localhost:5173`

### Build

Create a production build:
```bash
npm run build
```

### Preview

Preview the production build locally:
```bash
npm run preview
```

### Lint

Run ESLint to check code quality:
```bash
npm run lint
```

## 📁 Project Structure

```
Gmail/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── FloatingActionButton.tsx
│   │   ├── MailList.tsx
│   │   ├── MailRow.tsx
│   │   ├── MailRowSkeleton.tsx
│   │   ├── Sidebar.tsx
│   │   └── TopBar.tsx
│   ├── data/               # Mock data and constants
│   │   └── mockData.ts
│   ├── pages/              # Page components
│   │   ├── Inbox.tsx
│   │   └── Login.tsx
│   ├── types/              # TypeScript type definitions
│   │   └── index.ts
│   ├── App.tsx             # Main app component with routing
│   ├── main.tsx            # Application entry point
│   └── index.css           # Global styles
├── firebase.json           # Firebase configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
├── vite.config.ts          # Vite configuration
└── package.json            # Project dependencies
```

## 🎯 Available Routes

- `/` - Redirects to login
- `/login` - Login page
- `/inbox` - Main inbox interface

## 🎨 Components

- **TopBar** - Navigation bar with search and user controls
- **Sidebar** - Email folder navigation (Inbox, Sent, Drafts, etc.)
- **MailList** - List of email messages
- **MailRow** - Individual email row component
- **MailRowSkeleton** - Loading skeleton for email rows
- **FloatingActionButton** - Compose new email button

## 🔧 Configuration

### Tailwind CSS

The project uses Tailwind CSS for styling. Configuration can be found in [tailwind.config.js](tailwind.config.js).

### TypeScript

TypeScript configuration is split between:
- [tsconfig.json](tsconfig.json) - Main TypeScript config
- [tsconfig.node.json](tsconfig.node.json) - Config for Vite

### Firebase

Firebase deployment is configured in [firebase.json](firebase.json).

## 📝 Development Notes

- The project uses React Router for navigation between pages
- Mock data is stored in `src/data/mockData.ts`
- All components are fully typed with TypeScript
- Tailwind CSS is used for all styling

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Inspired by Gmail's interface
- Built with modern React best practices
- UI components styled with Tailwind CSS

## 📧 Contact

For questions or feedback, please open an issue on GitHub.

---

Made with ❤️ using React + TypeScript + Tailwind CSS