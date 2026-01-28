import { use, Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

export function fetchMessage(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello Dmytro");
    }, 1500);
  });
}

const messagePromise = fetchMessage();

export function Message() {
  const message = use(messagePromise);
  return <h1>{message}</h1>;
}

export default function MessageComponent () {
    return(
  <ErrorBoundary fallback={<p>Something went wrong</p>}>
  <Suspense fallback={<h1>Loading...</h1>}>
    <Message/>
  </Suspense>
  </ErrorBoundary>
    );
};