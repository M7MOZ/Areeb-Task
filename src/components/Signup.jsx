import { useContext, useEffect } from 'react';
import ReactModal from 'react-modal';
import { IoCloseSharp } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { AppContext } from '../context/AppContext';
import { useTranslation } from 'react-i18next';
function SignupModal() {
  const {isSignUpModal, setIsSignUpModal} = useContext(AppContext);
  const {t} = useTranslation();
  useEffect(() => {
      ReactModal.setAppElement('#root');
    }, []);
  return (
    <div>
      <button className="cursor-pointer bg-[#E32359] text-white px-2 py-1 rounded font-semibold w-32" onClick={() => setIsSignUpModal(true)}>{t("log.signup")}</button>

      <ReactModal
        isOpen={isSignUpModal}
        onRequestClose={() => setIsSignUpModal(false)}
        contentLabel="Sign up Modal"
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          },
          content: {
            height: "80vh",
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            width: '400px',
            padding: '20px',
          },
        }}
      >
        <div className='flex flex-col items-center'>
            <h2 className='text-4xl font-bold mb-10'>{t("log.signup")}</h2>
            <form className='space-y-2.5 flex flex-col w-[80%]'>
                <label className='font-medium'>{t("log.username")}</label>
                <input type="email" className='border border-gray-200 rounded outline-none p-2'/>
                <label className='font-medium'>{t("log.email")}</label>
                <input type="email" className='border border-gray-200 rounded outline-none p-2'/>
                <label className='font-medium'>{t("log.password")}</label>
                <input type="password" className='border border-gray-200 rounded outline-none p-2'/>
                <button type="submit" className='border bg-[#E32359] text-white text-2xl font-semibold p-2 rounded mt-2 cursor-pointer'>{t("log.signup")}</button>
            </form>
            <div className="flex items-center my-3">
                <hr className="flex-grow h-px w-px border-gray-300" />
                <span className="mx-4 text-gray-500">{t("log.or")}</span>
                <hr className="flex-grow h-px w-px border-gray-300" />
            </div>
            <button type="submit" className='border bg-[#1895de] text-white p-2 rounded w-[80%] flex items-center justify-center gap-2 cursor-pointer'>
                <div className='rounded-full bg-white p-1'>
                    <FcGoogle />
                </div>
                <span>{t("log.google")}</span>
            </button>
            <button onClick={() => setIsSignUpModal(false)} className='absolute top-4 right-2 cursor-pointer'>
                <IoCloseSharp className='text-2xl'/>
            </button>
        </div>
   

      </ReactModal>
    </div>
  );

}
export default SignupModal