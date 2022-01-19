import CameraFrontIcon from '@mui/icons-material/CameraFront'
import HelpIcon from '@mui/icons-material/Help'
import IconButton from '@mui/material/IconButton'
import SchoolIcon from '@mui/icons-material/School'
import styled from '@emotion/styled'
import Tooltip from '@mui/material/Tooltip'
import WorkOutlineIcon from '@mui/icons-material/WorkOutline'
import { Version } from './Version'

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
  sideBarHandler?: any
}

export const Menu = ({ sideBarHandler }: MenuProps) => {
  return (
    <List>
      <ListItem>
        <IconButton onClick={sideBarHandler} data-sidebar-page='contact' aria-label='contact' disabled={false}>
          <CameraFrontIcon />
        </IconButton>
      </ListItem>

      <ListItem>
        <IconButton aria-label='courses' disabled>
          <SchoolIcon />
        </IconButton>
      </ListItem>

      <ListItem>
        <IconButton aria-label='jobs' disabled>
          <WorkOutlineIcon />
        </IconButton>
      </ListItem>

      <ListItem>
        <Tooltip title={'v' + Version} placement='right' arrow>
          <span>
            <IconButton aria-label='help' disabled>
              <HelpIcon />
            </IconButton>
          </span>
        </Tooltip>
      </ListItem>
    </List>
  )
}

export default Menu
