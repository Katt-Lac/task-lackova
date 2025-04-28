import { UserDiagnoses } from "../components/UserDiagnoses";
import {useEffect, useState} from "react";
import AppHeader from "../components/Header.tsx";
import { Footer } from '../components/Footer';
import {Box} from "@mui/material";
import profileImage from "../assets/profile_image.png";
import {User} from "../model/User.ts";

/**
 * TODO
 *
 * 1. Load user from browser localStorage (use useEffect() hook)
 * 2. Set user to component state (use useState() hook)
 * 3. Display name of the user in <h1> tag (see Todo)
 * 4. Display rest in of the data using UserDiagnoses
 */
export const Home = () => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const userData = localStorage.getItem('user');
        if (userData) {
            setUser(JSON.parse(userData));
        }
        setLoading(false);
    }, []);

    if (loading) {
        return <h1>Loading...</h1>;
    }

    return (
        <>
        <AppHeader />
        <div >
            {user ? (
                <>
                    <h1 style={{marginLeft: '5%'}}>Welcome, {user.name}!</h1>
                <Box
                    display="flex"
                    flexDirection="row"
                    mt={8}
                    gap={14}
                    sx={{
                        border: '1px solid #ccc',
                        borderRadius: '15px',
                        fontSize: '20px',
                        marginLeft: '5%',
                        marginRight: '5%',
                        backgroundColor: '#F7F9FB',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                    }}
                >
                    <Box>
                        <img
                            src={profileImage}
                            alt="Profile"
                            style={{ width: '200px', height: 'auto', borderRadius: '15px' }}
                        />
                    </Box>
                    <Box>
                        <h4 style={{ marginBottom: '10px', fontSize: '24px', fontWeight: 'bold', color: '#2F4D68' }}>Personal Details</h4>
                        <p>Date of birth: {user.dateOfBirth}</p>
                        <p>Weight: {user.weight}</p>
                        <p>Height: {user.height}</p>
                    </Box>
                    </Box>
                    <Box sx={{
                        fontSize: '20px',
                        marginLeft: '5%',
                        marginRight: '5%',
                    }}>
                    <h4 style={{ marginBottom: '10px', fontSize: '24px', fontWeight: 'bold', color: '#2F4D68' }}>My Diagnoses</h4>
                    <UserDiagnoses diagnosis={user.diagnosis} />
                    </Box>
                </>
            ) : (
                <h1>No user found</h1>
            )}
        </div>
            <Footer />
        </>
    );
};
