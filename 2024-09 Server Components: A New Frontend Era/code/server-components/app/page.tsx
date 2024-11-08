import { readFile } from 'fs/promises';
import path from 'path';
import GenerateButton from './GenerateButton';

export default async function CatNameGenerator() {
  const filePath = path.join(process.cwd(), 'public', 'cat-names.txt');
  const file = await readFile(filePath, 'utf8');
  const catNames = file.split('\n');
  const index = Math.floor(Math.random() * catNames.length);
  const catName = catNames[index];

  return <GenerateButton catName={catName} />;
}
