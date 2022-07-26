import React from 'react';
import '../../../assets/css/modal.css';
import './modal.scss'
const Modal = (props) => {
    // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
    const { open, close, images, header } = props;

    return (
        // 모달이 열릴때 openModal 클래스가 생성된다.
        <div className={open ? 'openModal modal' : 'modal'}>
            {open ? (
                <section>
                    <header className='imageHeader'>
                        {header}
                        <button className="close" onClick={close}>
                            &times;
                        </button>
                    </header>
                    <main className='modalsection'>
                        {
                            images.map((imgs) => {
                                return (
                                    <img className="simagebox" src={imgs} alt={imgs + "2"} />

                                )
                            })
                        }

                    </main>
                    <footer className='footer'>
                        <button className="footerbtn" onClick={close}>
                            close
                    </button>
                    </footer>
                </section>

            ) : null}
        </div>
    );
};

export default Modal