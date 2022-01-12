import { Chip } from '@mui/material';

export const NameTag = ({ name }: { name: string }) => (
  <Chip label={name} style={{ color: '#fff', marginTop: '1em' }}/>
);

export default NameTag;
