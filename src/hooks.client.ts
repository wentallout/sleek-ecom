import { handleErrorWithSentry, replayIntegration } from "@sentry/sveltekit";
import * as Sentry from '@sentry/sveltekit';

Sentry.init({
  dsn: 'https://14668b4a4fa2f5877b0f5d2a3537e431@o1394359.ingest.sentry.io/4506836879278080',
  tracesSampleRate: 1.0,

  // This sets the sample rate to be 10%. You may want this to be 100% while
  // in development and sample at a lower rate in production
  replaysSessionSampleRate: 0.1,

  // If the entire session is not sampled, use the below sample rate to sample
  // sessions when an error occurs.
  replaysOnErrorSampleRate: 1.0,
  
  // If you don't want to use Session Replay, just remove the line below:
  integrations: [replayIntegration()],
});

// If you have a custom error handler, pass it to `handleErrorWithSentry`
export const handleError = handleErrorWithSentry();
