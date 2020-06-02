import { getEnvironment } from "./getEnvironment";

export function isProduction(): boolean
{
    return (getEnvironment() === "production");
}
