import { Link } from 'react-router-dom'

import ErrorIllustration from '../../assets/images/error.webp';

export default function Page404() {
    return (
        <main className="error-page">
            <img src={ErrorIllustration} alt="Error Ilustration" width="500" />
            <h1 style={{padding: '15px 0', fontSize: '24px'}}>You are not verified or this page is not available</h1>
            <Link to="/login">
                <button className="error-btn">Go Back</button>
            </Link>
        </main>
    )
}