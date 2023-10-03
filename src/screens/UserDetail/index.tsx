import BaseLayout from '@app/components/templates/Base';
import React from 'react';
import UserDetailContainer from './UserDetailContainer';


const UserDetailScreen = ({route}: any) => {
  return (
    <BaseLayout disableScrollView enableHeader disableBack={false}>
      <UserDetailContainer user={route?.params?.item} />
    </BaseLayout>
  );
};

export default UserDetailScreen;
