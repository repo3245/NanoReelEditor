import { useGoogleLogin } from '@react-oauth/google';
import './GoogleLoginButton.css';

export const GoogleLoginButton = () => {
    const login = useGoogleLogin({
        onSuccess: tokenResponse => console.log(tokenResponse),
        onError: () => console.log('Login Failed'),
    });

    return (
        <button className="custom-google-btn" onClick={() => login()}>
            Sign in with Google!
        </button>
    );
};
