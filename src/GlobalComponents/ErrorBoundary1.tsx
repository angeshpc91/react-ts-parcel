import React from 'react';
import { useRouteError } from 'react-router-dom';

export default function ErrorBoundary () {
  const error: any = useRouteError();
  console.error(error);
  return <div>{error.message}</div>;
}
