
// Import React to provide the namespace for ReactNode
import React from 'react';

export interface SlideData {
  id: string;
  title: string;
  subtitle?: string;
  content: React.ReactNode;
  bgClass: string;
  textColor: string;
}

export interface RouteSuggestion {
  venueName: string;
  description: string;
  style: string;
  priceRange: string;
}
