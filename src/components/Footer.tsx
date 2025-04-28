import { Box, Typography } from '@mui/material';

export const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: '#2F4D68',
                color: 'white',
                textAlign: 'center',
                py: 2,
                mt: 8,
            }}
        >
            <Typography variant="body2">
                © {new Date().getFullYear()} Katarína Lacková. All rights reserved :).
            </Typography>
        </Box>
    );
};
