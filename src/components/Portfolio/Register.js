import React, { useState } from "react";
import RegisterModal from "./RegisterModal";

const Register = () => {
    const [openRegisterModal, setOpenRegisterModal] = useState(false);

    return (
        <div>
            {" "}
            {openRegisterModal && openRegisterModal && (
                <RegisterModal
                    openRegisterModal={openRegisterModal}
                    setOpenRegisterModal={() => setOpenRegisterModal(false)}
                />
            )}
            <button
                onClick={() => setOpenRegisterModal(true)}
                className="btn btn-primary"
            >
                REGISTER
      </button>
        </div>
    );
};
export default Register;
