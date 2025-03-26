export default function Footer() {
    return (
      <footer className="bg-background text-foreground py-3 border-t border-border dark:bg-neutral-950 dark:text-gray-300">
        <div className="container mx-auto text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} UI Lib. All rights reserved.
          </p>
        </div>
      </footer>
    );
  }
  