import * as React from 'react'
import { styled, useTheme } from '@mui/material/styles'

import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import CssBaseline from '@mui/material/CssBaseline'
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import List from '@mui/material/List'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import HomeIcon from '@mui/icons-material/Home'
import InfoIcon from '@mui/icons-material/Info'
import PolicyIcon from '@mui/icons-material/Policy'
import ContactsIcon from '@mui/icons-material/Contacts'
import ClassIcon from '@mui/icons-material/Class'
import QuizIcon from '@mui/icons-material/Quiz'
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange, deepPurple } from '@mui/material/colors';
import Link from 'next/link'

/*eslint-disable */
const drawerWidth = 240

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
    open?: boolean
}>(({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    }),
}))

interface AppBarProps extends MuiAppBarProps {
    open?: boolean
}

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}))

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}))

export default function PersistentDrawerLeft() {
    const theme = useTheme()
    const [open, setOpen] = React.useState(false)

    const handleDrawerOpen = () => {
        setOpen(true)
    }

    const handleDrawerClose = () => {
        setOpen(false)
    }

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" open={open}>
                <Toolbar style={{ backgroundColor: '#249DD9' }}>
                    
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{ mr: 2, ...(open && { display: 'none' }) }}
                    >
                        <MenuIcon />
                    </IconButton>

                    <Typography variant="h6" noWrap component="div">
                        Painel Administrador
                    </Typography>

                    <Stack direction="row" spacing={2} sx={{marginLeft: 'auto'}}>
                        <Avatar sx={{ bgcolor: deepPurple[500] }}>I</Avatar>
                    </Stack>
                </Toolbar>
            </AppBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <DrawerHeader style={{ backgroundColor: '#249DD9' }}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? (
                            <ChevronLeftIcon sx={{ color: '#fff', cursor: 'pointer' }} />
                        ) : (
                            <ChevronRightIcon sx={{ color: '#fff', cursor: 'pointer' }} />
                        )}
                    </IconButton>
                </DrawerHeader>
                <Divider />

                <List>
                    <Link href="/dash/home/">
                        <ListItem>
                            <ListItemIcon>
                                <HomeIcon style={{ color: '#249DD9', cursor: 'pointer' }} />
                            </ListItemIcon>
                            <ListItemText>
                                <span style={{ color: '#249DD9', cursor: 'pointer' }}>Início</span>
                            </ListItemText>
                        </ListItem>
                    </Link>
                </List>

                <List>
                    <Link href="/dash/profile/">
                        <ListItem>
                            <ListItemIcon>
                                <AccountCircleIcon style={{ color: '#249DD9', cursor: 'pointer' }} />
                            </ListItemIcon>
                            <ListItemText style={{ color: '#249DD9', cursor: 'pointer' }}>
                                Perfil
                            </ListItemText>
                        </ListItem>
                    </Link>
                </List>

                <List>
                    <Link href="/dash/about/">
                        <ListItem>
                            <ListItemIcon>
                                <InfoIcon style={{ color: '#249DD9', cursor: 'pointer' }} />
                            </ListItemIcon>
                            <ListItemText style={{ color: '#249DD9', cursor: 'pointer' }}>
                                Sobre
                            </ListItemText>
                        </ListItem>
                    </Link>
                </List>                

                <Divider />

                <List>
                    <Link href="/dash/addClass/">
                        <ListItem>
                            <ListItemIcon>
                                <ClassIcon style={{ color: '#249DD9', cursor: 'pointer' }} />
                            </ListItemIcon>
                            <ListItemText style={{ color: '#249DD9', cursor: 'pointer' }}>
                                Adicionar Aula
                            </ListItemText>
                        </ListItem>
                    </Link>
                </List>

                <List>
                    <Link href="/dash/texts">
                        <ListItem>
                            <ListItemIcon>
                                <InboxIcon style={{ color: '#249DD9', cursor: 'pointer' }} />
                            </ListItemIcon>
                            <ListItemText style={{ color: '#249DD9', cursor: 'pointer' }}>
                                Adicionar Textos
                            </ListItemText>
                        </ListItem>
                    </Link>
                </List>

                <List>
                    <Link href="/dash/exercises">
                        <ListItem>
                            <ListItemIcon>
                                <QuizIcon style={{ color: '#249DD9', cursor: 'pointer' }} />
                            </ListItemIcon>
                            <ListItemText style={{ color: '#249DD9', cursor: 'pointer' }}>
                                Adicionar Exercícios
                            </ListItemText>
                        </ListItem>
                    </Link>
                </List>

                <Divider />

                <List>
                    <Link href="/dash/terms">
                        <ListItem>
                            <ListItemIcon>
                                <PolicyIcon style={{ color: '#249DD9', cursor: 'pointer' }} />
                            </ListItemIcon>
                            <ListItemText style={{ color: '#249DD9', cursor: 'pointer' }}>
                                Termos
                            </ListItemText>
                        </ListItem>
                    </Link>
                </List>

                <List>
                    <Link href="/dash/contacts">
                        <ListItem>
                            <ListItemIcon>
                                <ContactsIcon style={{ color: '#249DD9', cursor: 'pointer' }} />
                            </ListItemIcon>
                            <ListItemText style={{ color: '#249DD9', cursor: 'pointer'}}>
                                Contatos
                            </ListItemText>
                        </ListItem>
                    </Link>
                </List>

                <Divider />

                <List>
                    <Link href="/login/">
                        <ListItem>
                            <ListItemIcon>
                                <LogoutIcon style={{ color: '#249DD9', cursor: 'pointer' }} />
                            </ListItemIcon>
                            <ListItemText style={{ color: '#249DD9', cursor: 'pointer' }}>
                                Sair
                            </ListItemText>
                        </ListItem>
                    </Link>
                </List>
               
            </Drawer>
            <Main open={open}>
                <DrawerHeader />
            </Main>
        </Box>
    )
}
/*eslint-disable */
