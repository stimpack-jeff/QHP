import fs from 'fs';
import path from 'path';

// Points to /Users/test/development/QHP/content
// process.cwd() is /Users/test/development/QHP/qhp-transformation
const contentDirectory = path.join(process.cwd(), '../content');

function getContentCandidates(relativePath: string) {
  const directPath = path.join(contentDirectory, relativePath);

  if (!relativePath.startsWith('portfolio/')) {
    return [directPath];
  }

  const portfolioFileName = relativePath.slice('portfolio/'.length);

  return [
    directPath,
    path.join(contentDirectory, 'portfolio', 'archived-exited', portfolioFileName),
  ];
}

export async function getMarkdownContent(relativePath: string) {
  const candidatePaths = getContentCandidates(relativePath);

  for (const candidatePath of candidatePaths) {
    try {
      const fileContents = fs.readFileSync(candidatePath, 'utf8');
      return fileContents;
    } catch (error) {
      if ((error as NodeJS.ErrnoException).code !== 'ENOENT') {
        console.error(`Error reading file at ${candidatePath}:`, error);
        return null;
      }
    }
  }

  console.error(`Error reading content. Tried paths: ${candidatePaths.join(', ')}`);
  return null;
}
