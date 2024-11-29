import { createLogger, transports, format } from 'winston';

export const logger = createLogger();

export const setLogLevel = (logLevel: string) => {
	logger.level = logLevel;
};


export function exitProcess(exitCode: number): void {
	process.exit(exitCode);
  }
  
