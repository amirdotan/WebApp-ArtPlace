import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

export default function BasicChips() {
  return (
<Stack direction="row" spacing={3}>
  {/* SkillsData.map((item) => (<Chip label={item.skill} color="secondary" />)) */}
  <Chip label="photographer" color="secondary" />
  <Chip label="animator" color="success" />
  <Chip label="Photoshop" color="warning" />
</Stack>
  );
}

const SkillsData = [{skill: "photogeapher"}, {skill: "animator"}, {skill: "photoshop"}]

