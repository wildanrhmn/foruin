import PropTypes from 'prop-types';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import React, { useEffect } from 'react';
import { ContentCopy } from '@mui/icons-material';

export default function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;
  const handleClose = () => {
    onClose(selectedValue);
  };
  
  useEffect(() => {
    navigator.clipboard.writeText(selectedValue);
  }, [selectedValue])
  const handleListItemClick = () => {
    onClose(selectedValue);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Share Post</DialogTitle>
      <List sx={{ pt: 0 }}>
          <ListItem disableGutters>
            <ListItemButton onClick={handleListItemClick}>
              <ListItemAvatar>
                <Avatar sx={{  }}>
                  <ContentCopy />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Copy Link" style={{fontWeight: 600}} />
            </ListItemButton>
          </ListItem>
      </List>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};
