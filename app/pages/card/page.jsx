import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const CardDocs = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      {/* Heading */}
      <h1 className="text-3xl font-bold">Card</h1>
      <p className="text-neutral-500 dark:text-neutral-400">
        Displays a card with header, content, and footer.
      </p>

      {/* Installation */}
      <section className="mt-6">
        <h2 className="text-xl font-semibold">Installation</h2>
        <div className="mt-4">
          <h3 className="text-lg font-medium mb-2">CLI</h3>
          <div className="bg-neutral-950 dark:bg-neutral-900 text-white p-4 rounded-md font-mono text-sm shadow-md">
            <span className="text-green-400">npx</span> gray_ui add card
          </div>
        </div>
      </section>

      {/* Usage */}
      <section className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Usage</h2>
        <div className="bg-neutral-950 dark:bg-neutral-900 text-white p-4 rounded-md font-mono text-sm shadow-md">
          <span className="text-blue-400">{"import { "}</span>
          <span className="text-blue-500">Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle</span>
          <span className="text-blue-400">{" } from "}</span>
          <span className="text-green-400">"@/components/ui/card"</span>
          <br />
          <span className="text-blue-400">{"<"}</span>
          <span className="text-blue-500">Card</span>
          <span className="text-blue-400">{">"}</span>
          <br />
          <span className="text-blue-400 ml-4">{"<"}</span>
          <span className="text-blue-500">CardHeader</span>
          <span className="text-blue-400">{">"}</span>
          <br />
          <span className="text-blue-400 ml-8">{"<"}</span>
          <span className="text-blue-500">CardTitle</span>
          <span className="text-blue-400">{">"}</span>
          <span className="text-green-400">Card Title</span>
          <span className="text-blue-400">{"</"}</span>
          <span className="text-blue-500">CardTitle</span>
          <span className="text-blue-400">{">"}</span>
          <br />
          <span className="text-blue-400 ml-8">{"<"}</span>
          <span className="text-blue-500">CardDescription</span>
          <span className="text-blue-400">{">"}</span>
          <span className="text-green-400">Card Description</span>
          <span className="text-blue-400">{"</"}</span>
          <span className="text-blue-500">CardDescription</span>
          <span className="text-blue-400">{">"}</span>
          <br />
          <span className="text-blue-400 ml-4">{"</"}</span>
          <span className="text-blue-500">CardHeader</span>
          <span className="text-blue-400">{">"}</span>
          <br />
          <span className="text-blue-400 ml-4">{"<"}</span>
          <span className="text-blue-500">CardContent</span>
          <span className="text-blue-400">{">"}</span>
          <br />
          <span className="text-green-400 ml-8">Card Content</span>
          <br />
          <span className="text-blue-400 ml-4">{"</"}</span>
          <span className="text-blue-500">CardContent</span>
          <span className="text-blue-400">{">"}</span>
          <br />
          <span className="text-blue-400 ml-4">{"<"}</span>
          <span className="text-blue-500">CardFooter</span>
          <span className="text-blue-400">{">"}</span>
          <br />
          <span className="text-green-400 ml-8">Card Footer</span>
          <br />
          <span className="text-blue-400 ml-4">{"</"}</span>
          <span className="text-blue-500">CardFooter</span>
          <span className="text-blue-400">{">"}</span>
          <br />
          <span className="text-blue-400">{"</"}</span>
          <span className="text-blue-500">Card</span>
          <span className="text-blue-400">{">"}</span>
        </div>
      </section>

      {/* Examples */}
      <section className="mt-6">
        <h2 className="text-xl font-semibold mb-2 text-neutral-950 dark:text-neutral-200">Examples</h2>

        <Tabs defaultValue="preview" className="flex flex-col">
          <TabsList className="flex space-x-4 border-b border-neutral-700 text-neutral-600 dark:text-neutral-400 mb-4">
            <TabsTrigger value="preview">Preview</TabsTrigger>
            <TabsTrigger value="code">Code</TabsTrigger>
          </TabsList>

          {/* Preview Tab */}
          <TabsContent value="preview" className="flex justify-center">
            <Card className="w-[350px] shadow-lg border border-gray-200 dark:border-gray-700 rounded-lg bg-neutral-50 dark:bg-neutral-900">
              <CardHeader className="text-center border-b border-neutral-300 dark:border-neutral-700 pb-2">
                <CardTitle className="text-xl font-semibold text-neutral-900 dark:text-neutral-200">
                  John Doe
                </CardTitle>
                <CardDescription className="text-gray-500 dark:text-gray-400">
                  Software Engineer
                </CardDescription>
              </CardHeader>

              <CardContent className="p-4 text-center">
                <p className="text-gray-700 dark:text-gray-300">
                  Passionate about building innovative web applications. Loves coding, coffee, and open-source projects.
                </p>
              </CardContent>

              <CardFooter className="flex justify-center gap-4 bg-neutral-200 dark:bg-neutral-800 p-4 rounded-b-lg mx-4">
                <Button variant="outline" className="border-gray-300 dark:border-gray-600">
                  Follow
                </Button>
                <Button className="bg-blue-500 hover:bg-blue-600 text-white">Message</Button>
              </CardFooter>
            </Card>
          </TabsContent>

          {/* Code Tab */}
          <TabsContent value="code" className="mt-4">
            <div className="bg-neutral-950 dark:bg-neutral-900 p-4 rounded-md font-mono text-sm text-neutral-300 relative">

              <pre className="whitespace-pre-wrap break-words">
                {/* Import Statement */}
                <span className="text-blue-400">{"import { "}</span>
                <span className="text-blue-500">Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter</span>
                <span className="text-blue-400">{" } from "}</span>
                <span className="text-green-400">"@/components/ui/card"</span>
                <br /><br />

                {/* Card Component */}
                <span className="text-blue-400">{"<"}</span>
                <span className="text-blue-500">Card</span>
                <span className="text-blue-400">{">"}</span>
                <br />

                {/* Card Header */}
                <span className="text-blue-400 ml-4">{"<"}</span>
                <span className="text-blue-500">CardHeader</span>
                <span className="text-blue-400">{">"}</span>
                <br />

                {/* Card Title */}
                <span className="text-blue-400 ml-8">{"<"}</span>
                <span className="text-blue-500">CardTitle</span>
                <span className="text-blue-400">{">"}</span>
                <span className="text-green-400">John Doe</span>
                <span className="text-blue-400">{"</"}</span>
                <span className="text-blue-500">CardTitle</span>
                <span className="text-blue-400">{">"}</span>
                <br />

                {/* Card Description */}
                <span className="text-blue-400 ml-8">{"<"}</span>
                <span className="text-blue-500">CardDescription</span>
                <span className="text-blue-400">{">"}</span>
                <span className="text-green-400">Software Engineer</span>
                <span className="text-blue-400">{"</"}</span>
                <span className="text-blue-500">CardDescription</span>
                <span className="text-blue-400">{">"}</span>
                <br />

                <span className="text-blue-400 ml-4">{"</"}</span>
                <span className="text-blue-500">CardHeader</span>
                <span className="text-blue-400">{">"}</span>
                <br />

                {/* Card Content */}
                <span className="text-blue-400 ml-4">{"<"}</span>
                <span className="text-blue-500">CardContent</span>
                <span className="text-blue-400">{">"}</span>
                <br />

                <span className="text-blue-400 ml-8">{"<p>"}</span>
                <span className="text-green-400">Passionate about web development...</span>
                <span className="text-blue-400">{"</p>"}</span>
                <br />

                <span className="text-blue-400 ml-4">{"</"}</span>
                <span className="text-blue-500">CardContent</span>
                <span className="text-blue-400">{">"}</span>
                <br />

                {/* Closing Card */}
                <span className="text-blue-400">{"</"}</span>
                <span className="text-blue-500">Card</span>
                <span className="text-blue-400">{">"}</span>
              </pre>


            </div>
          </TabsContent>
        </Tabs>
      </section>


    </div>
  );
};

export default CardDocs;
