import PropTypes from 'prop-types';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import { green } from '@mui/material/colors';
import React from 'react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Share Post</DialogTitle>
      <List sx={{ pt: 0 }}>
          <ListItem disableGutters>
            <ListItemButton onClick={handleListItemClick}>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: green[100], color: green[600] }}>
                  <WhatsAppIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Whatsapp" />
            </ListItemButton>
          </ListItem>
          <ListItem disableGutters>
            <ListItemButton>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: "#E1306C", color:"#fff" }}>
                  <InstagramIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Instagram" />
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
