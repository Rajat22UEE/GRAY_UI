"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Introduction() {
  const router = useRouter();

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      <h1 className="text-4xl font-bold tracking-tight mb-4">Introduction</h1>
      <hr className="border-muted" />
      <p className="text-lg leading-relaxed text-muted-foreground">
        <strong>GRaY_UI</strong> is a powerful command-line interface tool that empowers developers to effortlessly 
        fetch and integrate UI components from the <strong>GRaY-ui-library</strong> GitHub repository. With just a 
        single command, you can enhance your project by automatically placing essential components directly into your 
        <br />
        <code className="px-1 py-0.5 bg-muted rounded"> components/ui/</code> folder.
      </p>

      <h2 className="text-2xl font-semibold mb-4">🚀 Features</h2>
      <hr className="border-muted" />
      <ul className="space-y-6 text-muted-foreground">
        <li>
          <strong>⚡ One-Command Fetching:</strong> Quickly add UI components like 
          <code className="px-1 py-0.5 bg-muted rounded mx-1">Button.jsx</code>,  
          <code className="px-1 py-0.5 bg-muted rounded mx-1">Card.jsx</code>, and  
          <code className="px-1 py-0.5 bg-muted rounded mx-1">Input.jsx</code>  
          to your project with a simple command.
        </li>
        <li>
          <strong>📂 Automatic Directory Creation:</strong> No need to worry about folder structures! 
          <strong> GRaY_UI</strong> automatically creates the 
          <code className="px-1 py-0.5 bg-muted rounded mx-1">components/ui/</code> 
          directory if it doesn’t already exist, ensuring a seamless integration.
        </li>
        <li>
          <strong>🔍 Robust Error Handling:</strong> Experience graceful error management, including clear messages 
          for 404 errors if a component is not found, so you can easily troubleshoot.
        </li>
        <li>
          <strong>🔠 Case-Sensitive Naming:</strong> Maintain consistency with GitHub’s case-sensitive filenames, 
          ensuring your components are named correctly.
        </li>
        <li>
          <strong>🛠️ User-Friendly Integration:</strong> Designed to fit smoothly into your development workflow, 
          making it easier than ever to manage UI components.
        </li>
      </ul>

      <div className="mt-10 flex justify-start gap-6">
        <Button variant="outline" onClick={() => router.push("/pages/button")}>
          View Components
        </Button>
        <Button onClick={() => router.push("/pages/installation")}>
          Installation <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </div>
  );
}
