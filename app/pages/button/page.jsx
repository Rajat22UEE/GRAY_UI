// app/pages/docs/button/page.jsx
"use client";
import React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {  Menu } from "lucide-react";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { DialogTitle } from "@/components/ui/dialog";

const buttonVariants = {
  primary: { label: "Primary", variant: "default" },
  secondary: { label: "Secondary", variant: "secondary" },
  destructive: { label: "Destructive", variant: "destructive" },
  outline: { label: "Outline", variant: "outline" },
  ghost: { label: "Ghost", variant: "ghost" },
  link: { label: "Link", variant: "link" },
};


const ButtonDocs = () => {
  const [selectedButton, setSelectedButton] = useState("primary");

  const buttonCode = (
    <>
      {/* Import Statement */}
      <span className="text-blue-400">{"import { "}</span>
      <span className="text-blue-500">buttonVariants</span>
      <span className="text-blue-400">{" } from "}</span>
      <span className="text-green-400">"@/components/ui/button"</span>
      <br /><br />

      {/* Button Component */}
      <span className="text-blue-400">{"<"}</span>
      <span className="text-blue-500">Button</span>
      <span className="text-blue-400">{" "}</span>
      <span className="text-purple-400">variant</span>
      <span className="text-blue-400">{"=\""}</span>
      <span className="text-orange-400">{buttonVariants[selectedButton].variant}</span>
      <span className="text-blue-400">{"\">"}</span>
      <span className="text-green-400">{buttonVariants[selectedButton].label}</span>
      <span className="text-blue-400">{"</"}</span>
      <span className="text-blue-500">Button</span>
      <span className="text-blue-400">{">"}</span>
    </>
  );

  // const copyToClipboard = () => {
  //   navigator.clipboard.writeText(buttonCode);
  //   alert("Code copied to clipboard!");
  // };

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      {/* Heading */}
      <h1 className="text-3xl font-bold">Button</h1>
      <p className="text-neutral-500 dark:text-neutral-400">
        Displays a button or a component that looks like a button.
      </p>

      {/* Installation */}
      <section className="mt-6">
        <h2 className="text-xl font-semibold">Installation</h2>
        <div className="mt-4">
          <h3 className="text-lg font-medium mb-2">CLI</h3>
          <div className="bg-neutral-950 dark:bg-neutral-900 text-white p-4 rounded-md font-mono text-sm shadow-md">
            <span className="text-green-400">npx</span> gray_ui add button
          </div>
        </div>
      </section>

      {/* Usage */}
      <section className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Usage</h2>
        <div className="bg-neutral-950 dark:bg-neutral-900 text-white p-4 rounded-md font-mono text-sm shadow-md">
          <span className="text-blue-400">{"import { "}</span>
          <span className="text-blue-500">buttonVariants</span>
          <span className="text-blue-400">{" } from "}</span>
          <span className="text-green-400">"@/components/ui/button"</span>
          <br /><br />
          <span className="text-blue-400">{"<"}</span>
          <span className="text-blue-500">Button</span>
          <span className="text-blue-400">{" "}</span>
          <span className="text-purple-400">variant</span>
          <span className="text-blue-400">{"=\""}</span>
          <span className="text-orange-400">outline</span>
          <span className="text-blue-400">{"\">"}</span>
          <span className="text-green-400">Button</span>
          <span className="text-blue-400">{"</"}</span>
          <span className="text-blue-500">Button</span>
          <span className="text-blue-400">{">"}</span>
        </div>
      </section>

      {/* Link */}
      <section className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Link</h2>
        <p className="text-neutral-500 dark:text-neutral-400">
          You can use the <code>buttonVariants</code> helper to create a link that looks like a button.
        </p>
        <div className="bg-neutral-950 dark:bg-neutral-900 text-white p-4 rounded-md font-mono text-sm shadow-md mt-4">
          <span className="text-blue-400">{"import { "}</span>
          <span className="text-blue-500">buttonVariants</span>
          <span className="text-blue-400">{" } from "}</span>
          <span className="text-green-400">"@/components/ui/button"</span>
          <br /><br />
          <span className="text-blue-400">{"<"}</span>
          <span className="text-blue-500">Link</span>
          <span className="text-blue-400">{" "}</span>
          <span className="text-purple-400">className</span>
          <span className="text-blue-400">{"={buttonVariants({ variant: "}</span>
          <span className="text-orange-400">"outline"</span>
          <span className="text-blue-400">{" })}>"}</span>
          <span className="text-green-400">Click here</span>
          <span className="text-blue-400">{"</"}</span>
          <span className="text-blue-500">Link</span>
          <span className="text-blue-400">{">"}</span>
        </div>
      </section>

      {/* asChild */}
      <section className="mt-6">
        <h2 className="text-xl font-semibold mb-2">asChild</h2>
        <p className="text-neutral-500 dark:text-neutral-400">
          Alternatively, you can set the <code>asChild</code> prop and nest a link component inside the button.
        </p>
        <div className="bg-neutral-950 dark:bg-neutral-900 text-white p-4 rounded-md font-mono text-sm shadow-md mt-4">
          <span className="text-blue-400">{"<"}</span>
          <span className="text-blue-500">Button</span>
          <span className="text-blue-400">{" "}</span>
          <span className="text-purple-400">asChild</span>
          <span className="text-blue-400">{">"}</span>
          <br />
          <span className="text-blue-400 ml-4">{"<"}</span>
          <span className="text-blue-500">Link</span>
          <span className="text-blue-400">{" "}</span>
          <span className="text-purple-400">href</span>
          <span className="text-blue-400">{"=\""}</span>
          <span className="text-green-400">/login</span>
          <span className="text-blue-400">{"\" />"}</span>
          <br />
          <span className="text-blue-400">{"</"}</span>
          <span className="text-blue-500">Button</span>
          <span className="text-blue-400">{">"}</span>
        </div>
      </section>

      {/* Examples */}
      <section className="mt-6">
        <h2 className="text-xl font-semibold mb-2 text-neutral-950 dark:text-neutral-200">Examples</h2>

        {/* Card Container - Increased Height */}
        <Card className="bg-neutral-50 dark:bg-neutral-900 text-white border border-neutral-800 rounded-lg shadow-md h-[22rem]">
          {/* Card Header */}
          <CardHeader className="flex justify-between items-center border-b border-neutral-700 pb-2">
            <CardTitle className="text-neutral-900 dark:text-neutral-300">Primary</CardTitle>

            {/* Drawer for Button Selection */}
            <Drawer>
              <DrawerTrigger asChild>
                <Button variant="outline" size="sm" className="text-neutral-500">
                  <Menu className="h-4 w-4 mr-1" /> Select Button
                </Button>
              </DrawerTrigger>
              <DrawerContent className="p-4 bg-neutral-50 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-200">
                <DialogTitle>Select a Button</DialogTitle>
                <div className=" ml-16 space-x-4 mt-4">
                  {Object.keys(buttonVariants).map((key) => (
                    <Button
                      key={key}
                      variant={buttonVariants[key].variant}
                      onClick={() => setSelectedButton(key)}
                    >
                      {buttonVariants[key].label}
                    </Button>
                  ))}
                </div>
              </DrawerContent>
            </Drawer>
          </CardHeader>

          {/* Tab Section */}
          <CardContent className="h-full flex flex-col">
            <Tabs defaultValue="preview" className="flex flex-col flex-grow">
              <TabsList className="flex space-x-4 border-b border-neutral-700 text-neutral-400">
                <TabsTrigger value="preview">Preview</TabsTrigger>
                <TabsTrigger value="code">Code</TabsTrigger>
              </TabsList>

              {/* Preview Tab - Centered Button */}
              <TabsContent value="preview" className="flex items-center justify-center flex-grow text-neutral-900 dark:text-neutral-200">
                <Button variant={buttonVariants[selectedButton].variant}>
                  {buttonVariants[selectedButton].label}
                </Button>
              </TabsContent>

              {/* Code Tab */}
              <TabsContent value="code" className="mt-4 relative">
                <div className="bg-neutral-800 p-4 rounded-md font-mono text-sm text-neutral-300 relative">
                  <pre>{buttonCode}</pre>

                  {/* Copy Button */}
                  {/* <Button
                    onClick={copyToClipboard}
                    variant="ghost"
                    size="icon"
                    className="absolute top-2 right-2 text-neutral-400 hover:text-white"
                  >
                    <Copy className="h-4 w-4" />
                  </Button> */}
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </section>


    </div>
  );
};

export default ButtonDocs;
