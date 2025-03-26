import fs from "fs-extra";
import axios from "axios";
import path from "path";
import chalk from "chalk";
import ora from "ora";

const GITHUB_BASE_URL = "https://raw.githubusercontent.com/Rajat22UEE/GRAY_UI/main/components/ui";

export async function fetchComponent(componentName) {
  const spinner = ora(`Fetching ${componentName}.jsx...`).start();
  
  try {
    const url = `${GITHUB_BASE_URL}/${componentName}.jsx`;
    const response = await axios.get(url);

    // Create directory if it doesn’t exist
    const targetDir = path.resolve(process.cwd(), "components/ui");
    await fs.ensureDir(targetDir);

    // Save the file
    const filePath = path.join(targetDir, `${componentName}.jsx`);
    await fs.writeFile(filePath, response.data);

    spinner.succeed(chalk.green(`✅ Successfully added ${componentName}.jsx to components/ui/`));
  } catch (error) {
    spinner.fail(chalk.red(`❌ Error fetching ${componentName}: ${error.response?.status === 404 ? "Component not found" : error.message}`));
  }
}
