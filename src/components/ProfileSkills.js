import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import data from '../data/db.json'

export default function BasicChips(sk) {
  return (
<Stack direction="row" spacing={3} sx={{margin: 2}}>
  {/* SkillsData.map((item) => (<Chip label={item.skill} color="secondary" />)) */}
    {data.users[0].skills.map((skill) => (<Chip label={skill} color="primary" />))}
</Stack>
  );
}


