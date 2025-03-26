export default function InstallationPage() {
    return (
      <div className="max-w-2xl mx-auto p-6 space-y-6">
        {/* Title */}
        <h1 className="text-3xl font-bold">🚀 GRaY/UI – Installation Guide for Next.js</h1>
        <p className="text-neutral-600 dark:text-neutral-400">
        <strong>Note:</strong> All components are customizable. Feel free to modify styles using Tailwind utilities to match your design needs.
        </p>
  
        {/* Create Next.js Project */}
        <h2 className="text-2xl font-semibold">📦 Create a Next.js Project</h2>
        <p>First, ensure you have a Next.js project set up. If you don’t have one, create it using:</p>
        <div className="bg-neutral-950 dark:bg-neutral-900 text-white p-4 rounded-md font-mono text-sm shadow-md">
          <span className="text-green-400">npx</span> create-next-app@latest my-app
          <br />
          <span className="text-blue-400">cd</span> my-app
        </div>
  
        {/* Add Components */}
        <h2 className="text-2xl font-semibold">🎨 Add Components</h2>
        <p>
          You can now add UI components using our CLI. For example, to add a <strong>Button</strong> component, run:
        </p>
        <div className="bg-neutral-950 dark:bg-neutral-900 text-white p-4 rounded-md font-mono text-sm shadow-md">
          <span className="text-green-400">npx</span> gray_ui add button
        </div>
  
        {/* Usage Example */}
        <p>This will install the <code>Button</code> component, which you can use like this:</p>
        <div className="bg-neutral-950 dark:bg-neutral-900 text-white p-4 rounded-md font-mono text-sm shadow-md overflow-x-auto">
          <span className="text-blue-400">{"import { "}</span>
          <span className="text-blue-500">Button</span>
          <span className="text-blue-400">{" } from "}</span>
          <span className="text-green-400">"@/components/ui/button"</span>;
          <br />
          <br />
          <span className="text-purple-400">{"export default function "}</span>
          <span className="text-blue-500">Home</span>
          <span className="text-blue-400">{"() {"}</span>
          <br />
          <span className="text-blue-400 pl-4">{"return ("}</span>
          <br />
          <span className="text-blue-400 pl-8">{"<div>"}</span>
          <br />
          <span className="text-blue-400 pl-12">{"<Button>"}</span>
          <span className="text-green-400">Click me</span>
          <span className="text-blue-400">{"</Button>"}</span>
          <br />
          <span className="text-blue-400 pl-8">{"</div>"}</span>
          <br />
          <span className="text-blue-400 pl-4">{");"}</span>
          <br />
          <span className="text-blue-400">{"}"}</span>
        </div>
      </div>
    );
  }
  