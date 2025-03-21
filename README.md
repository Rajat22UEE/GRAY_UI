# GRaY_UI

![GRaY_UI](https://img.shields.io/badge/GRaY_UI-v1.0.0-blue)

**GRaY_UI** is a powerful command-line interface tool that empowers developers to effortlessly fetch and integrate UI components from the [yupcha-ui-library](https://github.com/Rajat22UEE/ui_library.git) GitHub repository. With just a single command, you can enhance your project by automatically placing essential components directly into your project's `components/ui/` folder.

## 🚀 Features

- **One-Command Fetching**: Quickly add UI components like `Button.jsx`, `Card.jsx`, and `Input.jsx` to your project with a simple command.
- **Automatic Directory Creation**: No need to worry about folder structures! GRaY_UI automatically creates the `components/ui/` directory if it doesn't already exist, ensuring a seamless integration.
- **Robust Error Handling**: Experience graceful error management, including clear messages for 404 errors if a component is not found, so you can easily troubleshoot.
- **Case-Sensitive Naming**: Maintain consistency with GitHub's case-sensitive filenames, ensuring your components are named correctly.
- **User -Friendly Integration**: Designed to fit smoothly into your development workflow, making it easier than ever to manage UI components.

## 📦 Installation

Using GRaY_UI is a breeze! You can run it directly with `npx`, eliminating the need for global installation. Simply execute the following command in your terminal:

```bash
npx GRaY_UI add <component-name>