// logger.tsx
//@param message - The message to be logged
export function customLog(message: string): void {
    let logs: string[] = JSON.parse(localStorage.getItem('logs') || '[]');
    logs.push(message);
    localStorage.setItem('logs', JSON.stringify(logs));
    console.log(message);
}

export function displayLogs(): void {
    let logs: string[] = JSON.parse(localStorage.getItem('logs') || '[]');
    logs.forEach(log => console.log(log));
    localStorage.removeItem('logs'); // Clear after displaying
}
