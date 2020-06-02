import { getEnvironment } from "./getEnvironment";

export function isTest(): boolean
{
    return (getEnvironment() === "test");
}
