import { FC } from 'react';
import { AppHeaderUI } from '@ui';
import { getUser } from '../../services/slices/userSlice';
import { useSelector } from '../../services/store';

export const AppHeader: FC = () => {
  const { name } = useSelector(getUser);

  return <AppHeaderUI userName={name} />;
};
