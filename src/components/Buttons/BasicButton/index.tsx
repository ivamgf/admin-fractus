import * as React from 'react'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'

export default function BasicButtons(props: TypeButton): JSX.Element {
    const color = props.style
    const buttonState = props.disabled

    return (
        <Stack style={{ marginTop: '0.5em' }}>
            <Button
                variant="contained"
                disabled={buttonState}
                style={{ color }}
                onClick={props.onClick}
            >
                {props.text}
            </Button>
        </Stack>
    )
}
