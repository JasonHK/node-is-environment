import { getEnvironment } from "./getEnvironment";

export function isDevelopment(): boolean
{
    return (getEnvironment() === "development");
}
