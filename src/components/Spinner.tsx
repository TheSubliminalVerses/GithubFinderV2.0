import './styles/Spinner.css'

export default function Spinner() {
    return (
        <div className="spinner">
            <div className="spinner-sector spinner-sector-light-blue"></div>
            <div className="spinner-sector spinner-sector-dark-blue"></div>
        </div>
    )
}