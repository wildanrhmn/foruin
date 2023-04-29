import LoadingBar from 'react-redux-loading-bar';

function Loading() {
    return (
        <div className="loading">
            <LoadingBar style={{ backgroundColor: 'var(--color-primary)', zIndex:'999999' }} />
        </div>
    );
}

export default Loading;