import fs from 'node:fs';
import path from 'node:path'

export async function GET() {
    const filePath = path.join(process.cwd(), 'db', 'accounts.json');
    const readedFile = fs.readFileSync(filePath);
    const accountData = JSON.parse(readedFile);
    return Response.json(accountData);
}