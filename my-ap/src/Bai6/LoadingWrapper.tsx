import React from 'react';

interface LoadingContainerProps {
  isLoading: boolean;
  children: React.ReactNode;
}

export const LoadingContainer: React.FC<LoadingContainerProps> = ({
  isLoading,
  children,
}) => {
  if (isLoading) {
    return <p>Đang tải (ActivityIndicator)...</p>;
  }

  return <>{children}</>;
};

export default LoadingContainer;
