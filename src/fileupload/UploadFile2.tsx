import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';

const Input = styled('input')({
  display: 'none',
});

interface TestProps {
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function UploadFile2(props: TestProps) {
   
  return (
      <>
      <h1>File2</h1>
    <Stack direction="row" alignItems="center" spacing={2}>
      <label htmlFor="contained-button-file2">
        <Input accept="pdf/*" id="contained-button-file2" multiple type="file"
        onChange={props.handleChange} />
        <Button variant="contained" component="span">
          Upload
        </Button>
      </label>
      <label htmlFor="icon-button-file2">
        <Input accept="image/*" id="icon-button-file2" type="file" />
        <IconButton color="primary" aria-label="upload picture" component="span">
          <PhotoCamera />
        </IconButton>
      </label>
    </Stack>
    </>
  );
}