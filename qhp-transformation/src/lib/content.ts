import fs from 'fs';
import path from 'path';

// Points to /Users/test/development/QHP/content
// process.cwd() is /Users/test/development/QHP/qhp-transformation
const contentDirectory = path.join(process.cwd(), '../content');

export async function getMarkdownContent(relativePath: string) {
  const fullPath = path.join(contentDirectory, relativePath);
  try {
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    return fileContents;
  } catch (error) {
    console.error(`Error reading file at ${fullPath}:`, error);
    return null;
  }
}
