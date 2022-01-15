import CameraFrontIcon from '@mui/icons-material/CameraFront';
import HelpIcon from '@mui/icons-material/Help';
import IconButton from '@mui/material/IconButton';
// import PauseCircleOutlineIcon from '@mui/icons-material/PauseCircleOutline';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import styled from '@emotion/styled';
import Tooltip from '@mui/material/Tooltip';
import { Version } from './Version';

const List = styled.ul`
  list-style-type: none;
  line-height: 3em;
  padding: 0;
`

const ListItem = styled.li`
  display: inline;
  padding: 1em;
`

interface MenuProps {
  sideBarHandler?: any;
}

export const Menu = ({ sideBarHandler }: MenuProps) => {
  return (
    <List>
      <ListItem>
        <IconButton onClick={sideBarHandler} data-sidebar-page="contact" aria-label="contact" disabled={false}>
          <CameraFrontIcon />
        </IconButton>
      </ListItem>


      <ListItem>
        <IconButton aria-label="pauseplay" disabled={false}>
          <PlayCircleOutlineIcon />
        </IconButton>
      </ListItem>

      <ListItem>
        <Tooltip title={"v" + Version} placement="right" arrow>
          <span>
            <IconButton aria-label="help" disabled={true}>
              <HelpIcon />
            </IconButton>
          </span>
        </Tooltip>
      </ListItem>
    </List>
  );
}

export default Menu;
