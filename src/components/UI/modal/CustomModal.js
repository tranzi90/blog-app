import style from './CustomModal.module.css'

const CustomModal = ({children, visible, setVisible}) => {

    const rootClasses = [style.modal]

    if (visible)
        rootClasses.push(style.active)

    return (
        <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
            <div className={style.modalContent} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default CustomModal;