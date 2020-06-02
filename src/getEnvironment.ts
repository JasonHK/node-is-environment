import { Environment } from "./Environment";
import { getRawEnvironment } from "./getRawEnvironment";

export function getEnvironment(): Environment | undefined
{
    switch (getRawEnvironment())
    {
        case "development":
        case "dev":
            return "development";

        case "test":
            return "test";

        case "production":
        case "prod":
            return "production";
            
        default:
            return undefined;
    }
}
