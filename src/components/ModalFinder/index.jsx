// eslint-disable-next-line react/prop-types
const ModalFinder = ({isOpen}) => {
    return (
        <div style={{display: isOpen ? 'flex' : 'none'}} className="ModalFinder">Modal finder</div>
    );
}

export default ModalFinder