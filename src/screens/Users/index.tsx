import BaseLayout from '@app/components/templates/Base';
import React from 'react';
import UserContainer from './UserContainer';

const UserScreen = () => {
  return (
    <BaseLayout disableScrollView={true} enableHeader>
      <UserContainer />
    </BaseLayout>
  );
};

export default UserScreen;
