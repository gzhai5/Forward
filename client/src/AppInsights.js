import { ApplicationInsights } from '@microsoft/applicationinsights-web';
import { ReactPlugin, withAITracking } from '@microsoft/applicationinsights-react-js';
var reactPlugin = new ReactPlugin();
var appInsights = new ApplicationInsights({
    config: {
        connectionString: 'InstrumentationKey=da2eb03c-b6ca-411d-9aa6-a2b72fc2f68c;IngestionEndpoint=https://eastus-8.in.applicationinsights.azure.com/;LiveEndpoint=https://eastus.livediagnostics.monitor.azure.com/',
        enableAutoRouteTracking: true,
        extensions: [reactPlugin]
    }
});

appInsights.loadAppInsights();

export { reactPlugin, appInsights };