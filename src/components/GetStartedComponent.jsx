import React from 'react';
import { GetStarted } from '@questlabs/react-sdk';
import { questConfig } from '../config/questConfig';

function GetStartedComponent() {
  // Generate or retrieve user ID
  const getUserId = () => {
    let userId = localStorage.getItem('userId');
    if (!userId) {
      userId = questConfig.USER_ID;
      localStorage.setItem('userId', userId);
    }
    return userId;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-ocean-50 via-blue-50 to-forest-50 pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <GetStarted
          questId={questConfig.GET_STARTED_QUESTID}
          uniqueUserId={getUserId()}
          accent={questConfig.PRIMARY_COLOR}
          autoHide={false}
        >
          <GetStarted.Header />
          <GetStarted.Progress />
          <GetStarted.Content />
          <GetStarted.Footer />
        </GetStarted>
      </div>
    </div>
  );
}

export default GetStartedComponent;